'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getCsrfToken, signIn } from 'next-auth/react';

import { Footer } from '@/_components/semantics/Footer';
import { Navbar } from '@/_components/semantics/Navbar';
import Link from 'next/link';
import { TextInput } from '@/_components/ui/Input';
import Button from '@/_components/ui/Button';

export default function LoginPage() {
	const router = useRouter();
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
				router.push('/');
			}
		} catch (error) {
			// Handle Error: By showing an alert or custom message
			alert('Invalid Username or Password');
			console.error(error);
		}
	}

	return (
		<main className="flex min-h-screen flex-col">
			<Navbar />
			<section className="flex h-full flex-grow items-center justify-center">
				<div className="container h-full">
					<div className="mx-auto flex h-full w-[35rem] flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border border-red-500 p-4">
						<div className="flex flex-col gap-2 text-center">
							<h1 className="text-4xl">Sign In</h1>
							<p>
								Don't have an account?{' '}
								<Link href="/signup">
									<span className="hover:underline">Sign up</span>
								</Link>
							</p>
						</div>
						<form className="flex w-full flex-col gap-4" onSubmit={handleSignIn}>
							<input name="csrfToken" type="hidden" defaultValue={csrfToken} />
							<div className="">
								<TextInput type="text" name="username" placeholder="Username" required />
							</div>
							<div className="">
								<TextInput type="password" name="password" placeholder="Password" required />
							</div>
							<div className="flex items-center justify-between">
								<Link href="/signin/forgot" className="text-sm text-blue-500 hover:underline">
									Forgot password?
								</Link>
								<Button type="submit">Sign In</Button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
