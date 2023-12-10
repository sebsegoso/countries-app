# CountriesApp

## Introduction

Welcome to the documentation of CountriesApp, a Front-end application built with Next.js 13.5.6 that allows exploring information about countries using the [RestCountries REST API](https://restcountries.com/).

### Check out our [DEMO](https://countries-app-lime.vercel.app/) for more details.

## Dependencies

```
next: 13.5.6
react: ^18
react-dom: ^18
react-hot-toast: ^2.4.1
sass: ^1.69.5
```

## Getting Started

First, run the development server:

```bash
npm install
# or
yarn
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project structure

```

|-- /app
|    -- layout.js
|    -- page.jsx
|    -- globals.scss
|    -- /[page]
|         -- page.jsx
|         -- [pageStyle].scss
|    -- ...
|-- /components
|    -- /[componentCategory]
|         -- [Component].jsx
|         -- [ComponentStyle].scss
|    -- ...
|-- /hooks
|-- /styles
|-- /utils
|-- next.config.js
|-- package.json
|-- ...
```

## Pages

### Home (/):

The home page displays a list of all countries and their flags. Clicking on a country redirects to the details page.

### Details (/countries/[countryCCA2]):

The details view shows specific information about a country, identified by its unique CCA2 code.

### Search (/search):

The search page allows queries using the useDebounce hook to optimize API requests.

### About Us (/about):

This page provides additional information about the project and the team behind its development.

### Contact (/contact):

The contact page has a simple form requesting name, email, and message.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [DEMO](https://countries-app-lime.vercel.app/) for more details.
