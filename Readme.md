## The Deployed Application

The deployed application can be found at [https://movie-search-nextjs.vercel.app/](https://movie-search-nextjs.vercel.app/)

## Project Structure

This project is a Next.js application that follows the Bulletproof React structure with some Next.js flavoured things. For more information on the structure of the project, please refer to the offical [Bulletproof React](https://github.com/alan2207/bulletproof-react) docs.

## Testing

I've gone with favouring playwright E2E tests as they give a closer representation of how users interact with the application and a MOTO style of mocks. Where we mock outside using mock service worker and as far outside as possible.

## Production

- This application uses Next's [opentelemetry](https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry) to collect performance metrics and traces. This is a great way to monitor the performance of the application in production. These traces can be sent to a collector like [Jaeger](https://www.jaegertracing.io/) or [Lightstep](https://lightstep.com/) so that we can monitor the application in production.

## Future Ideas

- We could add caching to the nexts backend for frontend [(BFF)](https://medium.com/mobilepeople/backend-for-frontend-pattern-why-you-need-to-know-it-46f94ce420b0) reducing the amount of requests we make to the MovieDB API. If the service worked on credits or had a rate limit this would be a good idea.

- Rather than requiring the user to click to load more movies, we could implement infinite scrolling similar to how TikTok or Instagram work where the user scrolls to the bottom of the page and more movies are loaded.

- We could shift the state of search to the url so that users can share their saved searches with others or bookmark them.

- Currently we are only tracing out events that happen on the server with the default node instrumentation. We could add more instrumentation to the client side so we get a full timeline of events that users are experiencing.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

- Node.js
- npm

### Cloning the Repository

To clone the repository, run the following command in your terminal:

```sh
git clone https://github.com/Nhollas/Flaggy.git
```

## Setting Up The Project

1. Navigate to the project directory:

```bash
cd Flaggy
```

2. Install Dependencies:

```bash
npm install
```

3. Setup environment variables:

**copy the `.env.example` file to a new file called `.env.local`.**

```bash
copy .env.example .env.local
```

Replace the Launchdarkly values, they can be found under your specific project here:

https://app.launchdarkly.com/settings/projects

## Run Development Server

Finally, run the development server:

```bash
npm run dev
```

Now you can open [http://localhost:3000](http://localhost:3000) with your browser to see the application.
