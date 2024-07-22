import Link from "next/link";
import styles from "./styles/Button.module.css";

interface ButtonProps {
	text: string;
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

export function LinkButton({ text, href }: LinkButtonProps) {
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

export function SubmitButton({ text, form }: SubmitButtonProps) {
  return (
	<div className={styles.buttonDiv}>
		<button className={styles.roundButton} type="submit" form={form}>
			{text}
		</button>
	</div>
  );
}

export function FunctionButton({ text, onClick }: FunctionButtonProps) {
  return (
	<div className={styles.buttonDiv}>
		<button className={styles.roundButton} onClick={onClick}>
			{text}
		</button>
	</div>
  );
}
