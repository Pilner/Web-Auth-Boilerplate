import Link from "next/link";
import styles from "./styles/Button.module.css";

interface ButtonProps {
	text?: string;
	children?: React.ReactNode;
}

interface LinkButtonProps extends ButtonProps {
	href: string;
}

interface SubmitButtonProps extends ButtonProps {
	form: string;
}

interface FunctionButtonProps extends ButtonProps {
	onClick: () => void;
}

export function LinkButton({ text, children, href }: LinkButtonProps) {

	if (text === undefined) {
		return (
			<div className={styles.buttonDiv}>
				<Link href={href} scroll={false}>
					<button className={styles.roundButton}>
						{children}
					</button>
				</Link>
			</div>
		);
	}

	return (
		<div className={styles.buttonDiv}>
			<Link href={href} scroll={false}>
				<button className={styles.roundButton}>
					{text}
				</button>
			</Link>
		</div>
	);
}

export function SubmitButton({ text, children, form }: SubmitButtonProps) {

	if (text === undefined) {
		return (
			<div className={styles.buttonDiv}>
				<button className={styles.roundButton} type="submit" form={form}>
					{children}
				</button>
			</div>
		);
	}

	return (
		<div className={styles.buttonDiv}>
			<button className={styles.roundButton} type="submit" form={form}>
				{text}
			</button>
		</div>
	);
}

export function FunctionButton({ text, children, onClick }: FunctionButtonProps) {

	if (text === undefined) {
		return (
			<div className={styles.buttonDiv}>
				<button className={styles.roundButton} onClick={onClick}>
					{children}
				</button>
			</div>
		);
	}

	return (
		<div className={styles.buttonDiv}>
			<button className={styles.roundButton} onClick={onClick}>
				{text}
			</button>
		</div>
	);
}
