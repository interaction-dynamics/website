# Choose Architectural Decision Records

## Context and Problem Statement

It is important to save the architectural decisions for 2 reasons:

- keeping track over time
- sharing knowledge with the team

The principle of Architectural Decision Records (ADR) is a good way to document these decisions. The question is, which format to use for the ADRs.

A good website is [adr.github.io](https://adr.github.io/).

Another good website is: https://github.com/joelparkerhenderson/architecture-decision-record

## Considered Options

- Json
- Markdown

## Decision Outcome

The decision is to use Markdown for the ADRs since it is the most common format for documentation in the project.

The template is available at [0000-madr-template.md](./0000-madr-template.md) and is inspired by the [MADR](https://adr.github.io/madr/) templates.

### Consequences

- it will used one file by decision.
- it will be easier to read and write.
