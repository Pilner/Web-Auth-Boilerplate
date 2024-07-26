import Image from "next/image";
import Link from "next/link";

import styles from "./styles/Footer.module.css";

export function Footer() {
	return (
		<footer id={styles.footer}>
			<div className="container">
				<div id={styles.footerLeft}>
					<div id={styles.footerLogo}>
						<Link href="/">
							<div id={styles.footerLogoImg}>
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
						</Link>
					</div>
					<div id={styles.footerCopyright}>
						<p>©2024 Company</p>
						<p>All Rights Reserved.</p>
					</div>
				</div>
				<div id={styles.footerRight}>
					<div>
						<div>
							<p>Contact Us</p>
						</div>
						<ul>
							<li>
								<Link href="#" scroll={false}>
									<i className="fa-brands fa-facebook fa-xl"></i>
								</Link>
							</li>
							<li>
								<Link href="#" scroll={false}>
									<i className="fa-brands fa-x-twitter fa-xl"></i>
								</Link>
							</li>
							<li>
								<Link href="#" scroll={false}>
									<i className="fa-brands fa-instagram fa-xl"></i>
								</Link>
							</li>
							<li>
								<Link href="#" scroll={false}>
									<i className="fa-brands fa-linkedin fa-xl"></i>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
