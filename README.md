<h1 style="text-align: center">Web-Auth Boilerplate</h1>

<p style="text-align: center">A NextJS + Next-Auth Website Boilerplate to quickly build your Website that has Authentication.</p>

## How to use

_Note: Make sure you have [Node.js](https://nodejs.org/en/) installed. To check, run `node -v` in your terminal_

_Note: This website uses `TypeScript`_

1. Click `Use this template` or clone into a local directory

```bash
git clone https://github.com/Pilner/Web-Auth-Boilerplate.git
```

2. Download all the dependencies and packages needed in this repository

```bash
npm install
```

3. After cloning, create a `.env` or `.env.local` file in the root directory
4. Write this inside the environment variable file

```
NEXTAUTH_SECRET=secret
NEXTAUTH_URL=http://localhost:3000
```

5. Run the Server Process

```bash
npm run dev
```

## Setup

1. Modify CSS Variables according to your design and color palette in `/src/app/globals.css`.
2. Setup `package.json` to rename the project name.
3. Setup `src/app/layout.tsx` to edit website metadata.

## Custom Components

- `Navbar`
- `Footer`
- `Button`
  - `LinkButton`
  - `SubmitButton`
  - `FunctionButton`
- `Input`
  - `InputText`
  - `InputNumber`
  - `InputSelect`
  - `InputDate`
  - `InputCheckbox`

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
	- sample/
		- sample2/
			- page.tsx
			- page.module.css
		- page.tsx
		- page.module.css
```

This will generate `localhost:3000/sample` and `localhost:3000/sample/sample2`.

2. The template for a normal page with Navbar and Footer goes like this:

```tsx
// /src/app/sample/page.tsx
import { Footer } from "@/_components/semantics/Footer";
import { Navbar } from "@/_components/semantics/Navbar";
import styles from "./page.module.css";

export default function SamplePage() {
	return (
		<>
			<Navbar />
			<section id={styles.samplePage}>
				<div class="container">
					<!-- CONTENT -->
				</div>
			</section>
			<Footer />
		</>
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
	- api/
		- sample/
			- route.ts
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
				status: 405,
				message: 'Method not allowed',
			}),
			headers
		);
	}

	return new Response(
		JSON.stringify({
			status: 200,
			message: 'GET Request Success',
		}),
		{ headers }
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
				status: 405,
				message: 'Method not allowed',
			}),
			headers
		);
	}

	// Get data from the request body
	const body = await new Response(req.body).json();

	if (body) {
		return new Response(
			JSON.stringify({
				status: 200,
				message: 'POST Request Success',
			}),
			{ headers }
		);
	}

	// Catch all unintended processes
	return new Response(
		JSON.stringify({
			status: 500,
			message: 'Server Error',
		}),
		{ headers }
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
				status: 401,
				message: 'Not Authenticated',
			}),
			{ headers }
		);
	}

	// YOUR CONTENT HERE
}
```
