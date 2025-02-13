import { Providers } from '@/app/providers';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Web Auth Boilerplate',
	description: 'A Web Auth Boilerplate that uses Next.js, TailwindCSS, and Next-Auth',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head></head>
			<body className={`bg-gray ${inter.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
