# eslint-plugin-path-dependant-constant-naming

You can use this plugin on your project if you tend to have a robust structure for constants.

## Introduction
As you may know, `constants` play an important role in a large project.
since the project starts to grow-up and different developers start working on it, with no structure for dealing with these `constants`, the situation would get more and more complicated.
new developers will comfront with dozens of `constants` that do not have file-structure and a naming-pattern.

no-structure approach pains :

    - hard to maintain(add , remove or edit an existing constant).
    - hard to identify a constant's domain and logic.
    - hard to understand the constant type.
    - duplications.

with-structure approach gains : 

    - easy to maintain => project is divided into logical domains and every new constant would belong to a domain.
    - no duplications => constraints on constant naming and domains.
    - constant identification => identify constant's domain by its name.
    - identify constant's type => have constraints on constant's naming and divide `literal` and `non-liternal` values

**Lets get into it**

## The structure

This is the structure...
```
constants
        └── ├── domain-1-1
            │       ├── domain-2-1
            │       └── domain-2-1
            ├── domain-1-2
            │       ├── domain-2-1
            │       └── domain-2-1
            |                   ├── domain-3-1
            │                   └── domain-3-2
            └── domain-1-3
                    └── domain-2-1
                                └── domain-3-1
```

As u see we have divided our constants into `THREE level` domains.
There can be infinite domain-levels, but I recommend you to deep down only 3 levels, I'll explain it later.

Let bring it into a real-world example :
consider an ecommerce app specialized in selling electronice devices, a slice of project constants structure should be something like this.
```
constants
        └── ├── order
            │       ├── status - index.ts
            │       └── tag - index.ts
            ├── customer
            │       ├── info - index.ts
            │       └── purchase
            |                 ├── done - index.ts
            │                 └── undone - index.ts
            └── product
                    └── category
                                └── phone - index.ts
                                ├── tablet - index.ts
                                └── laptop - index.ts
```

> This proposed structure would help you to design a domain-driven structure for your constants.

Now its time to talk about the rules :
## Rules

Consider we are going to add a constant to project that represents phone brands,
as u may think, the constant should be added to

`product -> category -> phone`.

There are only two rules for this to be perfect:
 
## naming
The naming of the constants should be path-dependant and include relative path from indicated root(constants in this example)

for example if we are adding `brands` under `product -> category -> phone`, the name of the constant should start with 

**productCategoryPhone**  or **PRODUCT_CATEGORY_PHONE**

## type
For better identification, we decided to use two diffrent case-formats for our constants, according to best practices, the `SCREAMING_SNAKE_CASE` is suitable for `literal` values and the `camelCase` is good for `none-literal`(object or array).

so there are only two options in naming a constant

  > SCREAMING_SNAKE_CASE for literals
  
  > camelCase for none-literals

If we combine these two rules with a real-world example, we would have :
```
// constants/product/category/phone/index.ts

PRODUCT_CATEGORY_PHONE_BRAND_SAMSUNG_ID = 2
PRODUCT_CATEGORY_PHONE_BRAND_SAMSUNG_TITLE = 'SAMSUNG"

productCategoryPhoneBrandSamsung = { id : PRODUCT_CATEGORY_PHONE_BRAND_SAMSUNG_ID , title : PRODUCT_CATEGORY_PHONE_BRAND_SAMSUNG_TITLE }

productCategoryPhoneBrands = [ productCategoryPhoneBrandSamsung ]
```
Names are very longggg!!, right , thats why I recommended max 3 levels of depth.

**And Thats it, we built the structure of our constants and the eslint rule will pass if and only if you obey the structure.**

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

you should pass in rootDir, it should be an address, in our example the rootDir was `/constants`

```json
{
    "rules": {
        "path-dependant-constant-naming/constant-name": [ 2 , { rootDir : "/constants" } ]
    }
}
```


