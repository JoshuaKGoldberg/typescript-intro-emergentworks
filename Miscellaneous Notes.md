# Miscellaneous Notes

## Project recommendations

Someone asked what I recommend as good projects to learn TypeScript.

1. Most full online learn-coding sites such as Codecademy _(my personal favorite)_ and freeCodeCamp will have them set up to work well with their curriculum.
2. Try converting your old JavaScript projects to TypeScript!
3. My personal favorite project to get experience with a language is Connect4 on a command line. It forces you to get good with arrays, loops, printing to the console, and general tricky function logic.

## Steps to Onboard React

I definitely recommend using a starter such as [create-react-app](https://create-react-app.dev/) or [create-next-app](https://nextjs.org/docs/api-reference/create-next-app).
The three most important things are:

1. In your `tsconfig.json`: `jsx` `compilerOption` setting
2. Use the `.tsx` file extensions for files that include JSX syntax
3. `npm i @types/react --save-dev` / `yarn add @types/react -D`
