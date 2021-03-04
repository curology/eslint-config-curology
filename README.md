# eslint-config-curology

An ESLint [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs)
for use at [Curology](https://curology.com/).

## Install

Run

```
yarn add eslint-config-curology --dev
```

## Usage

Assuming you already have ESLint configured, extend this configuration
by adding this to your `.eslintrc` file:

```
{
  "extends": ["curology", ...otherConfig, "prettier"]
}
```

`"prettier"` must be the last entry in "extends" for [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation) compatibility
