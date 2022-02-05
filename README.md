# Intro to TypeScript - EmergentWorks

Hi!
This is the companion code repository for my Intro to TypeScript EmergentWorks workshop.

[See the slides here!](https://1drv.ms/p/s!AvUc1cvPrJnWvtJ5PdgSBQts-PgLSg?e=1tu2l2)

## Setup

Run these somewhere on your computer to download this repository and install its requirements:

```shell
git clone https://github.com/JoshuaKGoldberg/typescript-intro-emergentworks
cd typescript-intro-emergentworks
npm i
```

You can then open the folder in your editor.
For example, with VS Code:

```shell
code .
```

## Running TypeScript Snippets

It's generally easiest to install TypeScript globally:

```shell
npm i -g typescript
```

We recommend you then run TypeScript in "watch" mode on individual code examples by providing it the `-w` flag and a path to the example.
For example, to start TypeScript running on the first code example:

```shell
tsc -w src/1
```

Alternately, if you'd prefer not to install TypeScript globally, you can use it as an already-installed dependency of this repository with the `npm run compile` command:

```shell
npm run compile -- src/1 -w
# Alternately: yarn compile src/1 -w
```
