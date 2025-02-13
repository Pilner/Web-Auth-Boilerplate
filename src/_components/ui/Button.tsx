import React from 'react';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'solid' | 'outline';
	children?: React.ReactNode;
	className?: string;
	disabled?: boolean;
}

export default function Button({
	variant = 'solid',
	children,
	className = '',
	disabled = false,
	...otherProps
}: ButtonProps) {
	const typeVariants = {
		solid:
			'bg-main-accent text-white border-main-accent hover:bg-white hover:text-main-accent disabled:bg-main-accent/25 disabled:text-white disabled:border-transparent disabled:pointer-events-none',
		outline:
			'border-main-accent text-main-accent hover:bg-main-accent hover:text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:border-gray-300 disabled:pointer-events-none',
	};

	return (
		<button
			className={`flex cursor-pointer items-center justify-center rounded-xl border px-2 py-1 transition duration-200 sm:px-4 sm:py-2 ${typeVariants[variant]} ${className}`}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
}
