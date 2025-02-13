<h1 style="text-align: center">Web-Auth Boilerplate</h1>

<p style="text-align: center">A NextJS + TailwindCSS + Next-Auth Website Boilerplate to quickly build your Website that has Authentication using Docker.</p>

## How to use

_Note: Make sure you have [Node.js](https://nodejs.org/en/) installed. To check, run `node -v` in your terminal_

_Note: This website uses `TypeScript`_

_Note: This website uses the new `Tailwind CSS v4.0`_

1. Click `Use this template` or clone into a local directory

```bash
git clone https://github.com/Pilner/Web-Auth-Boilerplate.git
```

2. Download all the dependencies and packages needed in this repository

```bash
npm install
```

3. After cloning, create a `.env` or `.env.local` file in the root directory

```
NEXTAUTH_SECRET=secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the Server Process (<kbd>Ctrl</kbd>+<kbd>C</kbd> to exit process)

```bash
npm run dev
```

## Docker Setup

_Note: Make sure you have [Docker](https://www.docker.com/products/docker-desktop/) installed. To check, run `docker -v` in your terminal_

_Note: For deployment, [learn more](https://youtu.be/DfNhBZUrA-U?si=1jwVEMA5bKeNbi4K)_

1. Review/Edit the `compose.yaml` file

```yaml
services:
  web:
    build: .
    ports:
      - '3000:3000'
    environment:
      - NEXTAUTH_SECRET=${NEXTAUTH_SECRET}
      - NEXTAUTH_URL=${NEXTAUTH_URL}
```

2. Run the Docker image

```bash
docker compose up
```

3. View the website at `http://localhost:3000`

4. To exit the process, either use the `Docker Desktop` or run:

```bash
docker compose down
```

## Setup

1. Modify TailwindCSS Config according to your design and color palette in `/src/app/globals.css`.
2. Setup `package.json` to rename the project name.
3. Setup `src/app/layout.tsx` to edit website metadata.

## Custom Components

- `Navbar`
- `Footer`
- `Button`
- `Input`
  - `TextInput`
  - `DropdownInput`

## Routes

- `/` - Home Page
- `/signin` - Sign In Page
- `/signup` - Register Page
- `/signin/forgot` - Forgot Password Page
- `/*` - 404 Error Page

## API Routes

- `/api/authenticated` Checks if you are authenticated

## Technique

Here is the standard procedure in creating your website. This is split into two categories: `Page Route` and `API Route`.

### Page Route

1. To create a new route, create a new folder in `src/app/` with your new route name.

```
src/
- app/
| - sample/
| | - sample2/
| | | - page.tsx
| | - page.tsx
```

This will generate `localhost:3000/sample` and `localhost:3000/sample/sample2`.

2. The template for a normal page with Navbar and Footer goes like this:

```tsx
// /src/app/sample/page.tsx
import { Footer } from '@/_components/semantics/Footer';
import { Navbar } from '@/_components/semantics/Navbar';

export default function SamplePage() {
	return (
		<main className="flex min-h-screen flex-col">
			<Navbar />
			<section className="h-full flex-grow">
				<div className="container">{/* Content here */}</div>
			</section>
			<Footer />
		</main>
	);
}
```

3. To make a Page Route Protected, just add which route you want to protect in `src/middleware.ts`.

```ts
// src/middleware.ts
export { default } from 'next-auth/middleware';

// Remove this if you want to make all routes protected
export const config = {
	matcher: [
		// This is where you can add which routes to be protected
		// '/sampleRoute',
		// '/sampleRoute/:path*', // This is an example of a dynamic route
	],
};
```

### API Route

1. To create an API Route, create a new folder in `src/app/api/`.

```
src/
- app/
| - api/
| | - sample/
| | | - route.ts
```

This will generate an API route in `localhost:3000/api/sample`.

2. The template for an API Route goes like this:

#### GET Request

```ts
// /src/app/api/sample/page.tsx
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	// Set headers
	let headers = {
		'Content-Type': 'application/json',
	};

	// Check if the request method is GET
	if (req.method !== 'GET') {
		return new Response(
			JSON.stringify({
				message: 'Method not allowed',
			}),
			{ headers, status: 405 }
		);
	}

	return new Response(
		JSON.stringify({
			message: 'GET Request Success',
		}),
		{ headers, status: 200 }
	);
}
```

#### POST Request

```ts
// /src/app/api/sample/page.tsx
import { NextApiRequest, NextApiResponse } from 'next';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
	// Set headers
	let headers = {
		'Content-Type': 'application/json',
	};

	// Check if the request method is POST
	if (req.method !== 'POST') {
		return new Response(
			JSON.stringify({
				message: 'Method not allowed',
			}),
			{ headers, status: 405 }
		);
	}

	// Get data from the request body
	const body = await new Response(req.body).json();

	if (body) {
		return new Response(
			JSON.stringify({
				message: 'POST Request Success',
			}),
			{ headers, status: 200 }
		);
	}

	// Catch all unintended processes
	return new Response(
		JSON.stringify({
			message: 'Server Error',
		}),
		{ headers, status: 500 }
	);
}
```

3. Protecting an API Route

```ts
// Add these two for Route Protection
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';

import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	// Check if user is authenticated
	const session = await getServerSession(authOptions);
	if (!session) {
		return new Response(
			JSON.stringify({
				message: 'Not Authenticated',
			}),
			{ headers, status: 401 }
		);
	}

	// YOUR CONTENT HERE
}
```
