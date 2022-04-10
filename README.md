<p align="center"><img src="https://i.postimg.cc/1tXXkbsX/logo-png.png"></p>

<p align="center">
<img src="https://img.shields.io/badge/-beta-gold">
<a href="https://github.com/arcetros/doo-lyric/blob/main/LICENSE.md" target="_blank"><img alt="License" src="https://img.shields.io/github/license/arcetros/doo-lyric?color=37bf5d"></a>
<img src="https://img.shields.io/github/languages/top/arcetros/doo-lyric">
<img src="https://img.shields.io/github/checks-status/arcetros/doo-lyric/main">
</p>

## About the project

On this project I implemented what I have learned in [React Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) by Maximilian Schwarzmüller from first section up to "_Sending http requests_" section.

I built this website which allow the users to fetch any song lyrics from Genius by querying artist name or song title (using Deezer API). However, I'm aware that this project still leaves room for improvement, and I will be adding those lacking features in the future.

[Try it out the live demo of this project !](https://doo-lyric.vercel.app/)

Inspired by [Sing-Watch](https://github.com/JoaoGabriel-Lima/SingWatch) from [João Gabriel](https://github.com/JoaoGabriel-Lima)

## Prerequisites

**Cloning the Repository**

```
$ git clone https://github.com/arcetros/doo-lyric

$ cd doo-lyric
```

**Installing dependencies**

```
$ yarn
```

_or_

```
$ npm install

```

### Preparing For running

Change the environment variables on in [/.env.development](https://github.com/arcetros/doo-lyric/blob/main/.env.development) acccording to yours

```
NEXT_PUBLIC_GENIUS_API= <insert here>
NEXT_PUBLIC_MUSIC_URI= <insert here>
```

### Run the application

```bash
npm run dev
# or
yarn dev
```

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Next.js](https://nextjs.org/) - The React Framework  
  for Production
- [Axios](https://github.com/axios/axios) - HTTP Client
- [ESlint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Code Formatter
- [Babel](https://babeljs.io/) - JavaScript Compiler
- [react-icons](https://react-icons.github.io/react-icons/) - Icons Library
- [genius-lyrics-api](https://www.npmjs.com/package/genius-lyrics-api) - Lyrics fetcher
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
