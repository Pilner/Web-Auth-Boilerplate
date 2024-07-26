import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Web Auth Boilerplate",
	description: "A Web Auth Boilerplate that uses Next.js and Next-Auth",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<script
					src="https://kit.fontawesome.com/ad98de5722.js"
					crossOrigin="anonymous"
				></script>
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
