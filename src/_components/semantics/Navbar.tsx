import Image from "next/image";
import Link from "next/link";

import { LinkButton } from "@/_components/ui/Button";
import styles from "./styles/Navbar.module.css";

export function Navbar() {
	return (
		<nav id={styles.navbar}>
			<div className="container">
				<div id={styles.navLogoSide}>
					<Link href="/">
						<div id={styles.navLogoImg}>
								<Image
									src="/images/placeholder.png"
									alt="Logo"
									width={0}
									height={0}
									style={{
										height: "100%",
										width: "auto",
										objectFit: "contain",
									}}
									unoptimized={true}
								/>
						</div>
						<div id={styles.navLogotext}>
							<p>Logo</p>
						</div>
					</Link>
				</div>
				<div id={styles.navLinkSide}>
					<div>
						<ul>
							<li>
								<Link href="/" scroll={false}>
									Home
								</Link>
							</li>
							<li>
								<Link href="/" scroll={false}>
									About
								</Link>
							</li>
							<li>
								<Link href="/" scroll={false}>
									Contact
								</Link>
							</li>
							<li>
								<LinkButton text="Sign in" href="/signin"></LinkButton>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
}