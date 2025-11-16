import { Component, ReactNode, ErrorInfo } from 'react';
import styles from './ErrorBoundary.module.css';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
  consoleLogs: Array<{ type: string; message: string; timestamp: string }>;
  isVisible: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  private originalConsole = {
    log: console.log,
    warn: console.warn,
    error: console.error,
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      consoleLogs: [],
      isVisible: true,
    };
  }

  componentDidMount() {
    // Intercept console methods
    console.log = (...args: any[]) => {
      this.originalConsole.log(...args);
      this.addLog('log', args.join(' '));
    };

    console.warn = (...args: any[]) => {
      this.originalConsole.warn(...args);
      this.addLog('warn', args.join(' '));
    };

    console.error = (...args: any[]) => {
      this.originalConsole.error(...args);
      this.addLog('error', args.join(' '));
    };

    // Capture unhandled errors
    window.addEventListener('error', this.handleWindowError);
    window.addEventListener('unhandledrejection', this.handleUnhandledRejection);
  }

  componentWillUnmount() {
    // Restore original console methods
    console.log = this.originalConsole.log;
    console.warn = this.originalConsole.warn;
    console.error = this.originalConsole.error;

    window.removeEventListener('error', this.handleWindowError);
    window.removeEventListener('unhandledrejection', this.handleUnhandledRejection);
  }

  handleWindowError = (event: ErrorEvent) => {
    this.addLog('error', `${event.message} at ${event.filename}:${event.lineno}:${event.colno}`);
  };

  handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    this.addLog('error', `Unhandled Promise Rejection: ${event.reason}`);
  };

  addLog = (type: string, message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    this.setState((prevState) => ({
      consoleLogs: [...prevState.consoleLogs, { type, message, timestamp }],
    }));
  };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ errorInfo });
    this.addLog('error', `React Error: ${error.toString()}`);
    this.addLog('error', `Component Stack: ${errorInfo.componentStack}`);
  }

  toggleVisibility = () => {
    this.setState((prev) => ({ isVisible: !prev.isVisible }));
  };

  clearLogs = () => {
    this.setState({ consoleLogs: [], hasError: false, error: null, errorInfo: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div className={styles.errorContainer}>
          <div className={styles.errorHeader}>
            <h1>⚠️ Application Error</h1>
            <button onClick={() => window.location.reload()}>Reload Page</button>
          </div>
          <div className={styles.errorDetails}>
            <h2>Error Details:</h2>
            <pre>{this.state.error.toString()}</pre>
            {this.state.errorInfo && (
              <>
                <h3>Component Stack:</h3>
                <pre>{this.state.errorInfo.componentStack}</pre>
              </>
            )}
          </div>
          {this.state.consoleLogs.length > 0 && (
            <div className={styles.consoleLogs}>
              <h3>Console Logs:</h3>
              {this.state.consoleLogs.map((log, idx) => (
                <div key={idx} className={`${styles.logEntry} ${styles[log.type]}`}>
                  <span className={styles.timestamp}>[{log.timestamp}]</span>
                  <span className={styles.type}>[{log.type.toUpperCase()}]</span>
                  <span className={styles.message}>{log.message}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <>
        {this.props.children}
        {this.state.consoleLogs.length > 0 && (
          <div className={`${styles.consoleOverlay} ${!this.state.isVisible ? styles.hidden : ''}`}>
            <div className={styles.consoleHeader}>
              <span>🐛 Console ({this.state.consoleLogs.length})</span>
              <div className={styles.consoleActions}>
                <button onClick={this.clearLogs} className={styles.clearBtn}>
                  Clear
                </button>
                <button onClick={this.toggleVisibility} className={styles.toggleBtn}>
                  {this.state.isVisible ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>
            {this.state.isVisible && (
              <div className={styles.consoleBody}>
                {this.state.consoleLogs.map((log, idx) => (
                  <div key={idx} className={`${styles.logEntry} ${styles[log.type]}`}>
                    <span className={styles.timestamp}>{log.timestamp}</span>
                    <span className={styles.type}>{log.type}</span>
                    <span className={styles.message}>{log.message}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </>
    );
  }
}
