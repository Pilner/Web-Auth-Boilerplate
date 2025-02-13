import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { faSquareFacebook, faSquareXTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
	// get current year
	const currentYear = new Date().getFullYear();

	return (
		<footer className="h-[10rem] border border-red-500">
			<div className="container flex h-full items-center justify-between border border-red-500">
				<div className="flex h-full items-center gap-4">
					<Link href="/" className="contents">
						<Image src="/images/placeholder.png" alt="Logo" width={100} height={100} className="h-3/4 w-auto" />
					</Link>
					<Link href="/">
						<p>Logo</p>
					</Link>
				</div>
				<div className="flex flex-col gap-2 text-center">
					<p>Contact Us</p>
					<ul className="flex gap-8">
						<li>
							<FontAwesomeIcon icon={faSquareFacebook} size="xl" />
						</li>
						<li>
							<FontAwesomeIcon icon={faSquareXTwitter} size="xl" />
						</li>
						<li>
							<FontAwesomeIcon icon={faSquareInstagram} size="xl" />
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col border border-red-500 text-center">
				<p>©{currentYear} Company. All Rights Reserved</p>
			</div>
		</footer>
	);
}
