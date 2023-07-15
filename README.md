# eslint-plugin-path-dependant-constant-naming

You can use this plugin on your project if you tend to have a robust structure for constants.

## Introduction
As you may know, `constants` play an important role in a large project.
since the project starts to grow-up and different developers start working on it, with no structure for dealing with these `constants`, the situation would get more and more complicated.
new developers will comfront with dozens of `constants` that do not have file-structure and a naming-pattern.

no-structure approach pains :

    - hard to maintain(add , remove or edit an existing constant).
    - hard to identify a ``constant``'s domain and logic.
    - hard to understand the constant type.
    - duplications.

with-structure approach gains : 

    - easy to maintain => project is divided into logical domains and every new constant would belong to a domain.
    - no duplications => constraints on constant naming and domains.
    - constant identification => identify constant's domain by its name.
    - identify constant's type => have constraints on constant's naming and divide `literal` and `non-liternal` values

**Let get into it**

## The structure
Let just explain it with an example

consider this is out constants structure
```
constants
        └── ├──domain1
            │       ├── file11.ts
            │       └── file12.ts
            ├── domain2
            │       ├── file21.ts
            │       ├── file22.ts
            │       └── file23.ts
            └── domain3
                    └── file23.ts
```



rules for constants

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-path-dependant-constant-naming`:

```sh
npm install eslint-plugin-path-dependant-constant-naming --save-dev
```

## Usage

Add `constants` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "path-dependant-constant-naming"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "path-dependant-constant-naming/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


