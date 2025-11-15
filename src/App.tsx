import { useState, useMemo, useEffect } from 'react';
import { Header, FilterSection, TemplateGrid } from './components/composed';
import { IndustryType, StyleType } from './types/template';
import { templates } from './data/templates';

function App() {
  const [activeIndustry, setActiveIndustry] = useState<IndustryType | 'alle'>('alle');
  const [activeStyle, setActiveStyle] = useState<StyleType | 'alle'>('alle');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Filter templates based on active filters
  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesIndustry = activeIndustry === 'alle' || template.industry === activeIndustry;
      const matchesStyle = activeStyle === 'alle' || template.style === activeStyle;
      return matchesIndustry && matchesStyle;
    });
  }, [activeIndustry, activeStyle]);

  const handleThemeToggle = () => {
    setIsDarkMode((prev) => !prev);
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
      <TemplateGrid templates={filteredTemplates} />
    </div>
  );
}

export default App;
