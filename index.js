module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  parser: "babel-eslint",
  plugins: ["react", "babel", "curology"],
  rules: {
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "class-methods-use-this": 0,
    "comma-dangle": [2, "always-multiline"],
    "consistent-return": 0,
    "curology/no-action-bound-decorator": 2,
    "curology/no-single-letter-variable": 2,
    "func-names": 0,
    "function-paren-newline": 0,
    "global-require": 0,
    "import/extensions": ["error", "never"],
    "import/no-unresolved": 0,
    "import/order": [2, {"groups": [["builtin", "external"], "internal", ["parent", "sibling"]], "newlines-between": "always"}],
    "import/prefer-default-export": 1,
    "import/no-extraneous-dependencies": 1,
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "jsx-a11y/anchor-is-valid": 1,
    "jsx-a11y/click-events-have-key-events": 1,
    "jsx-a11y/img-redundant-alt": 1,
    "jsx-a11y/no-static-element-interactions": 1,
    "jsx-a11y/accessible-emoji": 1,
    "max-len": 0,
    "no-confusing-arrow": 0,
    "no-else-return": 1,
    "no-plusplus": 1,
    "no-static-element-interactions": 0,
    "no-underscore-dangle": 1,
    "object-curly-newline": 1,
    "object-property-newline": ["error", { "allowAllPropertiesOnSameLine": true }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/jsx-key": 2,
    "react/no-array-index-key": 1,
    "react/require-default-props": 0,
    "react/sort-comp": 0,
    "space-before-function-paren": 0
  },
  settings: {
    "import/extensions": [".js", ".jsx"]
  },
};
