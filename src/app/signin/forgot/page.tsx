import { Footer } from "@/_components/semantics/Footer";
import { Navbar } from "@/_components/semantics/Navbar";
import { SubmitButton } from "@/_components/ui/Button";
import { InputText } from "@/_components/ui/Input";
import Link from "next/link";
import styles from "./page.module.css";

export default function ForgotPasswordPage() {
	return (
		<>
			<Navbar />
			<section id={styles.forgotPasswordPage}>
				<div className="container">
					<div id={styles.formContainer}>
						<h1 className="sectionTitleFont">Forgot Password</h1>
						<form id={styles.forgotPasswordForm} method="POST">
							<InputText
								type="text"
								text="Enter your username/email"
								inputId="username"
								name="username"
								placeholder="Enter username"
								required={true}
							/>
							<InputText
								type="password"
								text="New Password"
								inputId="username"
								name="username"
								placeholder="Enter Password"
								required={true}
							/>
							<InputText
								type="password"
								text="Confirm Password"
								inputId="username"
								name="username"
								placeholder="Enter Password"
								required={true}
							/>
						</form>
						<div id={styles.submitGroup}>
							<div id={styles.subForm}>
								<Link href="/signin">Remembered the Password?</Link>
							</div>
							<SubmitButton
								form={styles.forgotPasswordForm}
								text="Reset"
							/>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
