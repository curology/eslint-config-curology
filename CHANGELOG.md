# CHANGELOG

# 3.0.1

- Re-release of 3.0.0

# 3.0.0

- **This package is no longer maintained**. All existing configuration options can now be found in `eslint-plugin-curology`. 

At the time of this writing the configuration can be switched over like so:

```diff
  extends: [
-    'curology',
+    'plugin:curology/recommended',
  ]
```

# 2.2.0

- Ignore `react/jsx-one-expression-per-line`, `react/jsx-wrap-multilines`, `object-curly-newline`, and `indent`.
- Warn on `import/no-cycle` and `import/no-named-as-default-member`.
  - These will eventually be enforced as errors at a future date.

# 2.1.0

- Re-release of 2.0.0, mostly.
- Re-order config extensions, document adding `"curology"` as last `"extends"` entry
- Add `@typescript-eslint/prefer-ts-expect-error` as error.
- Remove `arrow-body-style` (handled by `prettier` plugin).

# 2.0.0

- **BREAKING CHANGE**: Use `@typescript-eslint/parser`
- Update ruleset and update `peerDependencies`

## 1.3.0

- Update `import/prefer-default-export` from warning to off [(#7)](https://github.com/PocketDerm/eslint-config-curology/pull/7)

## 1.2.0

- Update `import/no-extraneous-dependencies` from warning to error, with devDependencies exception [(#6)](https://github.com/PocketDerm/eslint-config-curology/pull/6)

## 1.1.0

- Add `react/require-default-props` error rule [(#4)](https://github.com/PocketDerm/eslint-config-curology/pull/4)

## 1.0.5

- Add `no-console` error rule [(#3)](https://github.com/PocketDerm/eslint-config-curology/pull/3)
