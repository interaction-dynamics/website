# Contributing

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

## Found an Issue?

Thank you for reporting any issues you find. We do our best to test and make this project as solid as possible, but any reported issue is a real help.

Please follow these guidelines when reporting issues:

- Provide a title in the format of `<Error> when <Task>`
- Tag your issue with the tag `bug`
- Provide a short summary of what you are trying to do
- Provide the log of the encountered error if applicable
- Provide the exact version
- Be awesome and consider contributing a [pull request](#want-to-contribute)

## Want to contribute?

You consider contributing changes to this project – we dig that!
Please consider these guidelines when filing a pull request:

- Follow the [Coding Rules](#coding-rules)
- Follow the [Commit Rules](#commit-rules)
- Make sure you rebased the current master branch when filing the pull request
- Follow [Test guidelines](./#tests)
- Squash your commits when filing the pull request
- Provide a short title with a maximum of 100 characters
- Provide a more detailed description containing
  - What you want to achieve
  - What you changed
  - What you added
  - What you removed
- For significant changes, post also an issue before to know if your idea has a chance to be accepted

## Coding Rules

To keep the code base of commitlint neat and tidy the following rules apply to every change

- `prettier` is king
- `eslint` is awesome
- Favor micro library over swiss army knives (rimraf, ncp vs. fs-extra)
- Be awesome

> use commands `yarn lint` and `yarn format` to be sure your code
> respect coding rules.
> You can also use `npx prettier --write .` to fix prettier errors

## Commit Rules

To help everyone with understanding the commit history of commitlint the following commit rules are enforced.

- [conventional commits](https://www.conventionalcommits.org/en/v1.0.0-beta.3/)
- present tense
- maximum of 100 characters
- for bugs, includes the github tag of the issue in the description.
- message format of `$type($scope): $message`

These are the authorized types:

- build
- ci
- chore
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

> Using the right type is really important since it is used to increase the version number automatically.

## Test

If you add a feature or fix a bug, you need to provide a test verifying your
improvement. You can launch tests using `yarn test`.

## Chrome extensions

- [React Dev tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Vercel](https://chromewebstore.google.com/detail/vercel/lahhiofdgnbcgmemekkmjnpifojdaelb)

## Git hooks

Few git hooks are installed to help you to respect the coding rules. You can find them in the package.json in the property "simple-git-hooks".

Every time you set up a new hook, you should run the command `npx simple-git-hooks`.

## Translations

This project uses a custom implementation of react-i18n to handle translations. You can find the translations in the `src/messages/translations` folder.

Each file in this folder is a namespace.

To add a new translation:

- if the translation should be in a new namespace
  - create a new file in the `src/messages/translations` folder
  - add the namespace in `src/services/translation/i18n/config.tsx`
- use the `useTranslation` hook to access translations in your client components and `getTranslations` in your server components
- write english version first
- use prompt below to translate in other languages

```bash
read the attached json and translate the values in french while keeping the same keys:
# ...
```

### Components

If you need to create React components, you can use [v0.dev](https://v0.dev/) to generate a component.

You can also pick a component from one of these libraries:

- [originui](https://originui.com/)
- [https://magicui.design/](https://magicui.design/)
- [aceternity](https://ui.aceternity.com/)
- [ever-ui](https://www.ever-ui.com/)

## Payments

If you want to test the payment in the `/checkout` page, you can use these [card numbers](https://docs.stripe.com/testing#cards).

## Versioning

This project use [standard-version](https://github.com/conventional-changelog/standard-version) to handle versioning
automatically.

## Environment variables

### Github Actions

If you use github actions, you will need to add some of the environment variables in the github secrets. You can find the list of environment variables in the `.github/workflows/validate.yml`.

You will also need to add them to the dependabot on github.com.

### Vercel

If you use vercel, you can set environment variables in the vercel dashboard. Then use `vercel env pull` to get the environment variables locally.

### Local

If you want to set environment variables locally, you can create a `.env` file at the root of the project and add your environment variables in it.

## Dependencies

This project uses [pnpm](https://pnpm.io/) to manage dependencies. Please use `pnpm install` to install dependencies.

You can also upgrade dependencies using the commands below:

```bash
npx npm-check-updates -u
npm install
```

## Architecture decisions

This project uses [ADR](https://adr.github.io/) to document architecture decisions. When you take an archiveture decision, you can copy the template `docs/decisions/0000-madr-template.md` to `docs/decisions/<number>-my-decision.md` and fill it with your decision.

**May the force be with you !!**
