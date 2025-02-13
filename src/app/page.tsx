import { Footer } from '@/_components/semantics/Footer';
import { Navbar } from '@/_components/semantics/Navbar';
import styles from './page.module.css';

export default function Home() {
	return (
		<>
			<Navbar />
			<section id={styles.homePage} style={{ height: '70vh' }}>
				<div className="container"></div>
			</section>
			<Footer />
		</>
	);
}
