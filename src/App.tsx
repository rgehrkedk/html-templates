import { useState, useMemo, useEffect } from 'react';
import { Header, FilterSection, TemplateGrid } from './components/composed';
import { IndustryType, StyleType } from './types/template';
import { getAllTemplates } from './data/templates';

function App() {
  const [activeIndustry, setActiveIndustry] = useState<IndustryType | 'alle'>('alle');
  const [activeStyle, setActiveStyle] = useState<StyleType | 'alle'>('alle');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Listen for hash changes to refresh templates when returning from builder
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '') {
        // Refresh templates when returning to home
        setRefreshKey(prev => prev + 1);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Get all templates (including builded ones)
  const allTemplates = useMemo(() => {
    return getAllTemplates();
  }, [refreshKey]);

  // Filter templates based on active filters
  const filteredTemplates = useMemo(() => {
    return allTemplates.filter((template) => {
      const matchesIndustry = activeIndustry === 'alle' || template.industry === activeIndustry;
      const matchesStyle = activeStyle === 'alle' || template.style === activeStyle;
      return matchesIndustry && matchesStyle;
    });
  }, [allTemplates, activeIndustry, activeStyle]);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleTemplateDelete = () => {
    // Refresh the template list after deletion
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="app">
      <Header onThemeToggle={handleThemeToggle} isDarkMode={isDarkMode} />
      <FilterSection
        activeIndustry={activeIndustry}
        activeStyle={activeStyle}
        onIndustryChange={setActiveIndustry}
        onStyleChange={setActiveStyle}
      />
      <TemplateGrid
        templates={filteredTemplates}
        onTemplateDelete={handleTemplateDelete}
      />
    </div>
  );
}

export default App;
