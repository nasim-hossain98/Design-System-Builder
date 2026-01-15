# Storybook Setup Reference

## Overview

Storybook is a development environment for UI components. It allows you to browse a component library, view the different states of each component, and interactively develop and test components.

## Installation

```bash
npm install --save-dev @storybook/react @storybook/addon-essentials
```

## Configuration

### Main Configuration (.storybook/main.js)
```javascript
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    interactionsDebugger: true,
  },
};
```

### Preview Configuration (.storybook/preview.js)
```javascript
import '../src/styles/globals.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          width: '375px',
          height: '667px',
        },
      },
      tablet: {
        name: 'Tablet',
        styles: {
          width: '768px',
          height: '1024px',
        },
      },
      desktop: {
        name: 'Desktop',
        styles: {
          width: '1440px',
          height: '900px',
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
    ],
  },
};
```

## Story Structure

### Component Story Format 3
```javascript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'danger'],
      description: 'Button visual style variant',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Button',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};
```

## Addons

### Essential Addons
- **Actions**: Log event handlers
- **Controls**: Edit component props
- **Docs**: Auto-generate documentation
- **Viewport**: Test responsive designs
- **Backgrounds**: Switch backgrounds

### Accessibility Addon
```bash
npm install --save-dev @storybook/addon-a11y
```

```javascript
// .storybook/main.js
module.exports = {
  addons: ['@storybook/addon-a11y'],
};
```

Usage in stories:
```javascript
export default {
  title: 'Components/Button',
  parameters: {
    a11y: {
      element: '#root',
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: true,
          },
        ],
      },
    },
  },
};
```

### Design Addon
Connect Figma designs to stories:
```bash
npm install --save-dev storybook-addon-designs
```

```javascript
export default {
  title: 'Components/Button',
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/LKQ4FJ4bTnUPVEDn7j2A0g/Button',
      allowFullscreen: true,
    },
  },
};
```

## Story Organization

### Atomic Design Structure
```
├── atoms/
│   ├── Button/
│   ├── Input/
│   └── Text/
├── molecules/
│   ├── FormField/
│   ├── SearchBar/
│   └── Card/
├── organisms/
│   ├── Header/
│   ├── Footer/
│   └── ProductCard/
└── templates/
    ├── HomePage/
    └── ProductPage/
```

### Story Naming
```javascript
export default {
  title: 'Category/ComponentName',
  // Examples:
  // 'Atoms/Button/Primary'
  // 'Molecules/Card/Product'
  // 'Organisms/Header/Default'
};
```

## Documentation

### Auto-docs
CSF 3 with `tags: ['autodocs']` automatically generates documentation.

### Custom Documentation
```javascript
import { Meta, Story, Canvas, ArgsTable } from '@storybook/addon-docs';
import { Button } from './Button';

<Meta title="Components/Button/Documentation" component={Button} />

# Button Component

The Button component is used to trigger an action or event.

## Usage

<Canvas>
  <Story name="Primary">
    {(args) => <Button {...args}>Click me</Button>}
  </Story>
</Canvas>

## Props

<ArgsTable of={Button} />

## Accessibility

Buttons should always have accessible labels, either through visible text or `aria-label`.
```

## Testing

### Interaction Testing
```javascript
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export const FilledForm: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.type(canvas.getByLabelText('Email'), 'test@example.com');
    await userEvent.click(canvas.getByRole('button'));

    await expect(canvas.getByText('Success')).toBeInTheDocument();
  },
};
```

### Visual Testing
Integrate with Chromatic or Percy for visual regression testing.

## Build Optimization

### Bundle Size
```javascript
// .storybook/main.js
module.exports = {
  webpackFinal: async (config) => {
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
      },
    };
    return config;
  },
};
```

### Performance
- Use `storyStoreV7` for on-demand loading
- Implement lazy loading for heavy components
- Optimize images and assets

## Deployment

### Static Build
```bash
npm run build-storybook
```

### Hosting Options
- Chromatic (recommended)
- Netlify
- Vercel
- GitHub Pages

## Best Practices

1. **Write Stories for Edge Cases**: Include error states, loading states, empty states
2. **Use Args**: Make stories dynamic and reusable
3. **Add Controls**: Enable interactive testing
4. **Document Usage**: Include real-world examples
5. **Test Accessibility**: Use a11y addon
6. **Organize Logically**: Use consistent naming and structure
7. **Keep Updated**: Stories should match production components

## Troubleshooting

### Common Issues

**Stories not appearing**
- Check file naming: `*.stories.js` or `*.stories.ts`
- Verify import paths in `main.js`

**Controls not working**
- Ensure component props are properly typed
- Use `argTypes` for custom control configuration

**Build errors**
- Check webpack configuration
- Verify all dependencies are installed
- Review import statements

## Resources

- [Official Documentation](https://storybook.js.org/)
- [Component Story Format 3.0](https://storybook.js.org/blog/component-story-format-3-0/)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Addons Directory](https://storybook.js.org/addons/)"}