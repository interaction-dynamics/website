# Use Clerk for Authentication

## Context and Problem Statement

We need an authentication system for the boilerplate

## Considered Options

- Clerk
- next-auth
- supabase
- firebase

## Decision Outcome

Clerk has the developer experience. In order to ensure it will be possible to change the authentication provider in the future, everything is wrapped in a service.
