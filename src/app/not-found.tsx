import { Footer } from '@/_components/semantics/Footer';
import { Navbar } from '@/_components/semantics/Navbar';
import Image from 'next/image';
import styles from './notfound.module.css';

export default function NotFound() {
	return (
		<main className="flex min-h-screen flex-col">
			<Navbar />
			<section className="flex h-full flex-grow items-center justify-center">
				<div className="container h-full">
					<div className="mx-auto flex h-full w-[35rem] flex-col items-center justify-center gap-4 overflow-hidden rounded-xl border border-red-500 p-4">
						<div className="flex flex-col gap-4 text-center">
							<Image
								src="/images/questionmark.png"
								alt="Not Found Image"
								width={100}
								height={100}
								className="h-[20rem] w-auto object-contain"
							/>
							<div className="flex flex-col gap-2">
								<h1 className="text-4xl">404 NOT FOUND</h1>
								<p>
									Oops! The page you&apos;re looking for
									<br />
									does not exist.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
