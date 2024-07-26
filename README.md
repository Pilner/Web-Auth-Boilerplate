<div style="text-align: center">
	<h1>Web-Auth Boilerplate</h1>

	A NextJS + Next-Auth Website Boilerplate to quickly build your Website that has Authentication.

</div>

## How to use

*Note: Make sure you have [Node.js](https://nodejs.org/en/) installed. To check, run `node -v` in your terminal*

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
* Modify CSS Variables according to your design and color palette in `/src/app/globals.css`
* This website uses `TypeScript`.


## Custom Components
* `Navbar`
* `Footer`
* `Button`
	- `LinkButton`
	- `SubmitButton`
	- `FunctionButton`
* `Input`
	- `InputText`
	- `InputNumber`
	- `InputSelect`
	- `InputDate`
	- `InputCheckbox`

## Routes

* `/` - Home Page
* `/signin` - Sign In Page
* `/signup` - Register Page
* `/signin/forgot` - Forgot Password Page
* `/*` - 404 Error Page

## API Routes

* `/api/authenticated` Checks if you are authenticated

## Technique
Make a general `section` and then inside of it add a `div` with the class `container`.
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

## Licenses
MIT License

Copyright (c) 2024 Victuelles

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
