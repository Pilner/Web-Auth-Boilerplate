'use client';

import { Footer } from '@/_components/semantics/Footer';
import { Navbar } from '@/_components/semantics/Navbar';
// import { TextInput, DropdownInput } from '@/_components/ui/Input';

export default function Home() {
	// const sampleOptions = [
	// 	{ label: 'Option 1', value: 'option1' },
	// 	{ label: 'Option 2', value: 'option2' },
	// 	{ label: 'Option 3', value: 'option3' },
	// ];

	return (
		<main className="flex min-h-screen flex-col">
			<Navbar />
			<section className="h-full flex-grow">
				<div className="container">
					<div className="flex h-full items-center justify-between gap-4">
						{/* <TextInput>Text Input Component</TextInput>
						<DropdownInput options={sampleOptions}>Dropdown Input Component</DropdownInput> */}
					</div>
				</div>
			</section>
			<Footer />
		</main>
	);
}
