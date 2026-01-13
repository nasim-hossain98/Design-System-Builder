import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { {{componentName}} } from './{{componentName}}';

export default {
  title: 'Components/{{componentName}}',
  component: {{componentName}},
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Visual style variant',
      defaultValue: 'primary',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      description: 'Component size',
      defaultValue: 'medium',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      defaultValue: false,
    },
  },
} as ComponentMeta<typeof {{componentName}}>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof {{componentName}}> = (args) => <{{componentName}} {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'Default {{componentName}}',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Primary {{componentName}}',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary {{componentName}}',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Large {{componentName}}',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Small {{componentName}}',
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: 'Disabled {{componentName}}',
};

// Interactive states story
export const InteractiveStates = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <{{componentName}}>Default State</{{componentName}}>
    <{{componentName}} variant="secondary">Secondary State</{{componentName}}>
    <{{componentName}} size="large">Large Size</{{componentName}}>
    <{{componentName}} disabled>Disabled State</{{componentName}}>
  </div>
);

// Accessibility test story
export const AccessibilityTest = Template.bind({});
AccessibilityTest.args = {
  'aria-label': 'Accessible {{componentName}}',
  children: 'Screen reader friendly',
};

// Responsive story
export const Responsive = Template.bind({});
Responsive.args = {
  children: 'Resize viewport to test',
};
Responsive.parameters = {
  viewport: {
    defaultViewport: 'responsive',
  },
};