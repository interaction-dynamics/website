# Use flags wrapper

## Context and Problem Statement

Having a feature flags solution is important. It helps to deactivate a feature in case of critical error. It also helps for A/B testing.

A lot of solutions exists but there are not SSR compatible. It is also important to use a wrapper so it is possible to switch from one solution to another easily.

## Considered Options

- [https://www.statsig.com/](https://www.statsig.com/)
- [vercel flags library](https://vercel.com/docs/feature-flags)

## Decision Outcome

The solution was to use [vercel flags library](https://vercel.com/docs/feature-flags) since it is natively integrated with Vercel toolbar.

It also wraps [other feature flags libraries](https://flags-sdk.dev/docs/adapters/supported-providers) so it will be easy to change the solution in the future.

### Consequences

- good: it is possible to control the feature flags from the toolbar
- good: it is possible to change the feature flags solution easily
- bad: the project is more binded to Vercel
