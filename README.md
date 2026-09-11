# Netflix Clone

A high-fidelity front-end replica of the Netflix user experience, built with **React**, **Firebase**, and **The Movie Database (TMDB) API**.

## Overview

This project recreates Netflix's core browsing experience — a hero banner, horizontally-scrolling movie/show rows organized by genre, and a details view — powered by live data from TMDB rather than static mock content.

## Features

- **Dynamic content rows** — trending, top-rated, and genre-based rows fetched live from the TMDB API
- **Hero banner** — auto-selected featured title with backdrop image and overview
- **Netflix-style UI** — horizontally scrollable movie posters with hover interactions, mimicking the real Netflix layout
- **Firebase integration** — used for authentication and/or data persistence (e.g. user session state)

## Stack

- **React** — front-end UI
- **Firebase** — authentication / backend services
- **TMDB API** — movie and TV show data (posters, backdrops, overviews, ratings)
- **Axios** — API requests to TMDB

## Project Structure

```
Netflix_Clone_2026A/
└── netflix-clone/          # React application root
    ├── src/                 # Components, rows, banner, requests/API config
    ├── public/
    └── package.json
```

## Getting Started

### Prerequisites

- Node.js and npm installed
- A free [TMDB API key](https://www.themoviedb.org/settings/api)
- A Firebase project (if using auth/persistence features)

### Installation

```bash
git clone https://github.com/hailemichaeltesfsye-hue/Netflix_Clone_2026A.git
cd Netflix_Clone_2026A/netflix-clone
npm install
```

### Environment Variables

Create a `.env` file inside `netflix-clone/` with your keys:

```
REACT_APP_TMDB_API_KEY=your_tmdb_api_key
REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
```

> Never commit real API keys — keep `.env` in `.gitignore`.

### Running Locally

```bash
npm start
```

The app runs at `http://localhost:3000`.

## Author

**Hailemichael Tesfaye Mekuria**
[LinkedIn](https://www.linkedin.com/in/hailemichael-tesfaye-2b7114401/) · [GitHub](https://github.com/hailemichaeltesfsye-hue)
