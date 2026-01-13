module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-viewport",
    {
      name: '@storybook/addon-docs',
      options: {
        transcludeMarkdown: true,
      },
    },
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-toolbars',
    '@storybook/addon-measure',
    '@storybook/addon-outline',
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  features: {
    previewMdx2: true,
  },
  staticDirs: ['../public'],
  webpackFinal: async (config) => {
    // Add custom webpack config here if needed
    return config;
  },
};