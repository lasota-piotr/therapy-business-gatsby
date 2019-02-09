module.exports = {
  extends: [
    'kentcdodds/react',
    'kentcdodds/possible-errors',
    'kentcdodds/best-practices',
    'kentcdodds/es6/possible-errors',
    'kentcdodds/import',
  ],
  rules: {
    /* custom rules */
    "import/no-unresolved" : "off",
    "react/jsx-curly-brace-presence": "off"
  },
  "globals": {
    "graphql": false,
  },
}
