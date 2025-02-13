import { Footer } from '@/_components/semantics/Footer';
import { Navbar } from '@/_components/semantics/Navbar';
import { SubmitButton } from '@/_components/ui/Button';
import { InputCheckbox, InputDate, InputNumber, InputSelect, InputText } from '@/_components/ui/Input';
import Link from 'next/link';
import styles from './page.module.css';

export default function SignUpPage() {
	return (
		<>
			<Navbar />
			<section id={styles.signUpPage}>
				<div className="container">
					<div id={styles.formContainer}>
						<div id={styles.formTitleGroup}>
							<h1 className="sectionTitleFont">Sign Up</h1>
							<p>
								Already have an account? <Link href="/signin">Sign in</Link>
							</p>
						</div>
						<form id="signUpForm" className={styles.signUpForm} method="POST">
							<InputText
								type="text"
								text="Username"
								inputId="username"
								name="username"
								placeholder="Enter username"
								required={true}
							/>
							<InputText
								type="text"
								text="First Name"
								inputId="first_name"
								name="first_name"
								placeholder="Enter First Name"
								required={true}
							/>
							<InputText
								type="text"
								text="Last Name"
								inputId="last_name"
								name="last_name"
								placeholder="Enter Last Name"
								required={true}
							/>
							<InputText
								type="email"
								text="Email Address"
								inputId="email"
								name="email"
								placeholder="Enter Email Address"
								required={true}
							/>
							<InputNumber
								text="Mobile Number"
								inputId="mobile_number"
								name="mobile_number"
								placeholder="Enter Mobile Number"
								required={true}
								min={5}
								step={1}
								negative={false}
							/>
							<InputText
								type="password"
								text="Password"
								inputId="password"
								name="password"
								placeholder="Enter Password"
								required={true}
							/>
							<InputText
								type="password"
								text="Confirm Password"
								inputId="password2"
								name="password2"
								placeholder="Enter Password"
								required={true}
							/>
							<InputSelect
								text="Gender"
								inputId="gender"
								name="gender"
								required={true}
								data={['Male', 'Female', 'Other', 'Prefer not to say']}
							/>
							<InputDate text="Date of Birth" inputId="birthday" name="birthday" required={true} />
						</form>
						<div id={styles.submitGroup}>
							<div id={styles.subForm}>
								<InputCheckbox
									form={styles.signUpForm}
									text="I agree to the Terms and Conditions"
									inputId="terms"
									name="terms"
									required={true}
								/>
							</div>
							<SubmitButton form="signUpForm" text="Sign Up" />
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
