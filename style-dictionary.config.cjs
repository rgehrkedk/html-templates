module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/tokens/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'src/styles/tokens/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6'
        }
      ]
    }
  }
};
