'use client';

import { Footer } from '@/_components/semantics/Footer';
import { Navbar } from '@/_components/semantics/Navbar';
import Link from 'next/link';
import { TextInput } from '@/_components/ui/Input';
import Button from '@/_components/ui/Button';

export default function ForgotPasswordPage() {
	const handleForgotPassword = async (event: any) => {
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
							<h1 className="text-4xl">Forgot Password</h1>
							<p>
								Don't have an account?{' '}
								<Link href="/signup">
									<span className="hover:underline">Sign up</span>
								</Link>
							</p>
						</div>
						<form className="flex w-full flex-col gap-4" onSubmit={handleForgotPassword}>
							<div className="">
								<TextInput type="text" name="username" placeholder="Enter your username/email" required />
							</div>
							<div className="">
								<TextInput type="password" name="password" placeholder="Enter New Password" required />
							</div>
							<div className="">
								<TextInput type="password" name="password2" placeholder="Enter New Password Again" required />
							</div>
							<div className="flex items-center justify-between">
								<Link href="/signin" className="text-sm text-blue-500 hover:underline">
									Sign In
								</Link>
								<Button type="submit">Reset</Button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
