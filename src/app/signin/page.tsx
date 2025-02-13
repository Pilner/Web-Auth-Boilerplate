'use client';

import { getCsrfToken, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { Footer } from '@/_components/semantics/Footer';
import { Navbar } from '@/_components/semantics/Navbar';
import { SubmitButton } from '@/_components/ui/Button';
import { InputText } from '@/_components/ui/Input';
import Link from 'next/link';
import styles from './page.module.css';

export default function SignInPage() {
	const [csrfToken, setCsrfToken] = useState<string | undefined>('');

	useEffect(() => {
		const fetchData = async () => {
			const csrf = await getCsrfToken();
			setCsrfToken(csrf);
		};
		fetchData();
	}, []);

	async function handleSignIn(event: any) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		formData.append('csrfToken', (csrfToken as string) ?? '');
		console.log(Object.fromEntries(formData));

		try {
			const result = await signIn('credentials', {
				redirect: false,
				username: formData.get('username') as string,
				password: formData.get('password') as string,
			});

			console.log(result);

			if (result?.error) {
				throw new Error(result.error);
			} else if (result?.ok) {
				window.location.href = '/';
			}
		} catch (error) {
			// Handle Error: By showing an alert or custom message
			alert('Invalid Username or Password');
			console.error(error);
		}
	}

	return (
		<>
			<Navbar />
			<section id={styles.signInPage}>
				<div className="container">
					<div id={styles.formContainer}>
						<div id={styles.formTitleGroup}>
							<h1 className="sectionTitleFont">Sign in</h1>
							<p>
								Don't have an account? <Link href="/signup">Sign up</Link>
							</p>
						</div>
						<form id="signInForm" className={styles.signInForm} onSubmit={handleSignIn} method="POST">
							<InputText
								type="text"
								text="Username"
								inputId="username"
								name="username"
								placeholder="Enter username"
								required={true}
							/>
							<InputText
								type="password"
								text="Password"
								inputId="password"
								name="password"
								placeholder="Enter Password"
								required={true}
							/>
						</form>
						<div id={styles.submitGroup}>
							<div id={styles.subForm}>
								<Link href="/signin/forgot">Forgot password?</Link>
							</div>

							<SubmitButton form="signInForm" text="Sign In" />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
