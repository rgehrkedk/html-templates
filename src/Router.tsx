import { useState, useEffect } from 'react';
import App from './App';
import { BuilderApp } from './builder/BuilderApp';

type Route = 'home' | 'builder';

export function Router() {
  const [currentRoute, setCurrentRoute] = useState<Route>('home');

  useEffect(() => {
    // Simple hash-based routing
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'builder') {
        setCurrentRoute('builder');
      } else {
        setCurrentRoute('home');
      }
    };

    // Set initial route
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentRoute === 'builder') {
    return <BuilderApp />;
  }

  return <App />;
}
