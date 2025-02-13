import Image from 'next/image';
import Link from 'next/link';

import Button from '@/_components/ui/Button';

export function Navbar() {
	return (
		<nav className="h-[10rem] border border-red-500">
			<div className="container flex h-full items-center justify-between border border-red-500">
				<div className="flex h-full items-center gap-4">
					<Link href="/" className="contents">
						<Image src="/images/placeholder.png" alt="Logo" width={100} height={100} className="h-full w-auto" />
					</Link>
					<Link href="/">
						<p>Logo</p>
					</Link>
				</div>
				<ul className="flex h-full items-center gap-8">
					<Link href="#">
						<li>First</li>
					</Link>
					<Link href="#">
						<li>Second</li>
					</Link>
					<Link href="#">
						<li>Third</li>
					</Link>
					<Link href="#" className="contents">
						<Button disabled={false}>
							<p>Button</p>
						</Button>
					</Link>
				</ul>
			</div>
		</nav>
	);
}
