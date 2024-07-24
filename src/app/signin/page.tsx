import { Footer } from '@/_components/semantics/Footer';
import { Navbar } from '@/_components/semantics/Navbar';
import { SubmitButton } from '@/_components/ui/Button';
import { InputText } from '@/_components/ui/Input';
import Link from 'next/link';
import styles from './page.module.css';

export default function SignInPage() {
  return (
		<>
			<Navbar />
			<section id={styles.signInPage}>
				<div className="container">
					<div id={styles.formContainer}>
						<div id={styles.formTitleGroup}>
							<h1 className="sectionTitleFont">Sign in</h1>
							<p>
								Don't have an account?{" "}
								<Link href="/signup">Sign up</Link>
							</p>
						</div>
						<form id={styles.signInForm} method="POST">
							<InputText
								type="text"
								text="Username"
								inputId="username"
								name="username"
								placeholder="Enter username"
								required={true}
							/>
							<InputText
								type="password"
								text="Password"
								inputId="password"
								name="password"
								placeholder="Enter Password"
								required={true}
							/>
						</form>
						<div id={styles.submitGroup}>
							<div id={styles.subForm}>
								<Link href="/signin/forgot">
									Forgot password?
								</Link>
							</div>
							<SubmitButton
								form={styles.signInForm}
								text="Sign In"
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
  );
}
