import React from 'react';
import { ThemeProvider } from '../src/components/ThemeProvider';
import { DesignSystemProvider } from '../src/components/DesignSystemProvider';
import '../src/styles/globals.css';

// Add custom theme switcher to toolbar
export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
      showName: true,
      dynamicTitle: true,
    },
  },
};

// Decorator to wrap stories with providers
const withProviders = (Story, context) => {
  const theme = context.globals.theme;

  return (
    <DesignSystemProvider>
      <ThemeProvider theme={theme}>
        <div style={{ padding: '20px' }}>
          <Story {...context} />
        </div>
      </ThemeProvider>
    </DesignSystemProvider>
  );
};

export const decorators = [withProviders];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      xs: {
        name: 'Mobile (xs)',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      sm: {
        name: 'Tablet (sm)',
        styles: {
          width: '640px',
          height: '800px',
        },
      },
      md: {
        name: 'Desktop (md)',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      lg: {
        name: 'Large Desktop (lg)',
        styles: {
          width: '1024px',
          height: '768px',
        },
      },
      xl: {
        name: 'Extra Large (xl)',
        styles: {
          width: '1280px',
          height: '800px',
        },
      },
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#ffffff',
      },
      {
        name: 'dark',
        value: '#1a1a1a',
      },
      {
        name: 'gray',
        value: '#f5f5f5',
      },
    ],
  },
  docs: {
    inlineStories: true,
    prepareForInline: (storyFn) => storyFn(),
  },
  // Accessibility testing configuration
  a11y: {
    config: {
      rules: [
        {
          id: 'color-contrast',
          enabled: true,
        },
      ],
    },
    options: {
      checks: {
        'color-contrast': {
          options: {
            noScroll: true,
          },
        },
      },
    },
  },
  // Design token documentation
  designToken: {
    defaultTab: 'colors',
    styleInjection:
      '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap");',
  },
};