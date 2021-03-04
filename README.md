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
  "extends": [...otherConfig, "curology"]
}
```

`"curology"` must be the last entry in "extends" for [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier/blob/1f206661b8e197e6753b772509028c34f954b42a/README.md#recommended-configuration) compatibility
