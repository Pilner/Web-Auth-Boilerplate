'use client';

import { Footer } from '@/_components/semantics/Footer';
import { Navbar } from '@/_components/semantics/Navbar';
import Link from 'next/link';
import { TextInput } from '@/_components/ui/Input';
import Button from '@/_components/ui/Button';

export default function RegisterPage() {
	const handleRegister = async (event: any) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		console.log(Object.fromEntries(formData));
	};

	return (
		<main className="flex min-h-screen flex-col">
			<Navbar />
			<section className="flex h-full flex-grow items-center justify-center">
				<div className="container h-full">
					<div className="mx-auto flex h-full w-[35rem] flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border border-red-500 p-4">
						<div className="flex flex-col gap-2 text-center">
							<h1 className="text-4xl">Sign Up</h1>
							<p>
								Already have an account?{' '}
								<Link href="/signin">
									<span className="hover:underline">Sign in</span>
								</Link>
							</p>
						</div>
						<form className="flex w-full flex-col gap-4" onSubmit={handleRegister}>
							<div className="">
								<TextInput type="text" name="username" placeholder="Enter your username" required />
							</div>
							<div className="">
								<TextInput type="email" name="email" placeholder="Enter your email" required />
							</div>
							<div className="">
								<TextInput type="password" name="password" placeholder="Enter your password" required />
							</div>
							<div className="">
								<TextInput type="password" name="password2" placeholder="Enter your password again" required />
							</div>
							<div className="flex items-center justify-between">
								<Link href="/signin" className="text-sm text-blue-500 hover:underline">
									Sign In
								</Link>
								<Button type="submit">Register</Button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
