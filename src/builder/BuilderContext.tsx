import React, { createContext, useContext, useState, ReactNode } from 'react';
import {
  TemplateBuilderState,
  BuilderContextType,
  StyleType,
  BorderRadiusStyle,
  ColorPalette,
  TemplateSection,
} from './types/builder.types';

const initialState: TemplateBuilderState = {
  selectedStyle: null,
  borderRadius: 'soft',
  colorPalette: {
    brand: '#2563eb',
    accent: '#10b981',
    neutral: '#64748b',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  sections: [],
  currentStep: 1,
};

const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export const BuilderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<TemplateBuilderState>(initialState);

  const setStyle = (style: StyleType) => {
    setState((prev) => ({ ...prev, selectedStyle: style }));
  };

  const setBorderRadius = (radius: BorderRadiusStyle) => {
    setState((prev) => ({ ...prev, borderRadius: radius }));
  };

  const setColors = (colors: ColorPalette) => {
    setState((prev) => ({ ...prev, colorPalette: colors }));
  };

  const addSection = (section: Omit<TemplateSection, 'id' | 'order'>) => {
    setState((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          ...section,
          id: `section-${Date.now()}-${Math.random()}`,
          order: prev.sections.length,
        },
      ],
    }));
  };

  const removeSection = (id: string) => {
    setState((prev) => ({
      ...prev,
      sections: prev.sections
        .filter((s) => s.id !== id)
        .map((s, idx) => ({ ...s, order: idx })),
    }));
  };

  const updateSection = (id: string, data: Record<string, any>) => {
    setState((prev) => ({
      ...prev,
      sections: prev.sections.map((s) =>
        s.id === id ? { ...s, data: { ...s.data, ...data } } : s
      ),
    }));
  };

  const moveSectionUp = (id: string) => {
    setState((prev) => {
      const sections = [...prev.sections];
      const index = sections.findIndex((s) => s.id === id);
      if (index > 0) {
        [sections[index - 1], sections[index]] = [sections[index], sections[index - 1]];
        sections.forEach((s, idx) => (s.order = idx));
      }
      return { ...prev, sections };
    });
  };

  const moveSectionDown = (id: string) => {
    setState((prev) => {
      const sections = [...prev.sections];
      const index = sections.findIndex((s) => s.id === id);
      if (index < sections.length - 1) {
        [sections[index], sections[index + 1]] = [sections[index + 1], sections[index]];
        sections.forEach((s, idx) => (s.order = idx));
      }
      return { ...prev, sections };
    });
  };

  const nextStep = () => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.min(prev.currentStep + 1, 4),
    }));
  };

  const prevStep = () => {
    setState((prev) => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 1),
    }));
  };

  const reset = () => {
    setState(initialState);
  };

  const value: BuilderContextType = {
    ...state,
    setStyle,
    setBorderRadius,
    setColors,
    addSection,
    removeSection,
    updateSection,
    moveSectionUp,
    moveSectionDown,
    nextStep,
    prevStep,
    reset,
  };

  return <BuilderContext.Provider value={value}>{children}</BuilderContext.Provider>;
};

export const useBuilder = (): BuilderContextType => {
  const context = useContext(BuilderContext);
  if (!context) {
    throw new Error('useBuilder must be used within BuilderProvider');
  }
  return context;
};
