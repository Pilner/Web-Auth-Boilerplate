import { Footer } from '@/_components/semantics/Footer';
import { Navbar } from '@/_components/semantics/Navbar';
import Image from 'next/image';
import styles from './notfound.module.css';

export default function NotFound() {
  return (
		<>
			<Navbar />
			<section id={styles.notFoundPage}>
				<div className="container">
					<div id={styles.errorMessage}>
						<div id={styles.errorPicture}>
							<Image
								src="/images/questionmark.png"
								alt="Not Found Image"
								width={0}
								height={0}
								style={{
									width: "auto",
									height: "100%",
								}}
								unoptimized={true}
							/>
						</div>
						<h1 className={styles.errorTitleFont}>
							404 NOT
							<br />
							<span className="main-accent">FOUND</span>
						</h1>
						<p className={styles.errorSubtitleFont}>
							Oops! The page you&apos;re looking for
							<br />
							does not exist.
						</p>
					</div>
				</div>
			</section>
			<Footer />
		</>
  );
}
