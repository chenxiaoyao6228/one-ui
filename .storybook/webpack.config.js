module.exports = ({ config }) => {
  console.dir(config, { depth: null }) || config;
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader')
      }
    ]
  });
  // https://github.com/storybookjs/storybook/tree/master/addons/storysource
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: {
          parser: 'typescript',
          prettierConfig: {
            tabWidth: 2,
            printWidth: 100,
            singleQuote: true
          }
        }
      }
    ],
    enforce: 'pre'
  });

  config.module.rules.push({
    test: /\.less$/,
    use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
  });
  config.resolve.extensions.push('.ts', '.tsx', 'less', 'css');
  return config;
};
