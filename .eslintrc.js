module.exports = {
  env: {
    browser: true,
    es6: true,
    "react-percy/globals": true
  },
  extends: "eslint:recommended",
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "react-percy"],
  rules: {
       {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader']
        }
  },
  overrides: [
    {
      files: ["**/*.percy.{js,jsx}"],
      env: {
        "react-percy/globals": true
      }
    }
  ]
};
