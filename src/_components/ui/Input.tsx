import Link from 'next/link';
import { forwardRef } from 'react';
import styles from './styles/Input.module.css';

interface InputProps {
	text: string;
	form?: string;
	inputId: string;
	name: string;
	required?: boolean;
	readonly?: boolean;
	disabled?: boolean;
}

interface InputTextProps extends InputProps {
	type: 'text' | 'email' | 'password';
	value?: string;
	placeholder: string;
}

interface InputNumberProps extends InputProps {
	min?: number;
	max?: number;
	step?: number;
	negative?: boolean;
	value?: number;
	placeholder: string;
}

interface InputSelectProps extends InputProps {
	value?: string;
	data: string[];
}

interface InputDateProps extends InputProps {
	value?: string;
}

interface InputCheckboxProps extends InputProps {
	value?: boolean;
}

export const InputText = forwardRef<HTMLInputElement, InputTextProps>((props, ref) => {
	return (
		<div className={styles.inputStyle}>
			<label htmlFor={props.name} className={styles.labelText}>
				{props.text}
			</label>
			<input
				form={props.form}
				type={props.type}
				id={props.inputId}
				name={props.name}
				placeholder={props.placeholder}
				required={props.required}
				readOnly={props.readonly}
				disabled={props.disabled}
				ref={ref}
				defaultValue={props.value}
			/>
		</div>
	);
});

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>((props, ref) => {
	return (
		<div className={styles.inputStyle}>
			<label htmlFor={props.name} className={styles.labelText}>
				{props.text}
			</label>
			<input
				form={props.form}
				type="number"
				id={props.inputId}
				name={props.name}
				placeholder={props.placeholder}
				required={props.required}
				readOnly={props.readonly}
				disabled={props.disabled}
				ref={ref}
				min={(props.min ?? props.negative) ? undefined : 0}
				max={props.max}
				step={props.step}
				defaultValue={props.value}
			/>
		</div>
	);
});

export const InputSelect = forwardRef<HTMLSelectElement, InputSelectProps>((props, ref) => {
	return (
		<div className={styles.inputStyle}>
			<label htmlFor={props.name} className={styles.labelText}>
				{props.text}
			</label>
			<select
				form={props.form}
				id={props.inputId}
				name={props.name}
				required={props.required}
				ref={ref}
				defaultValue={props.value ?? ''}
				disabled={props.disabled}
			>
				<option hidden={true} value="">
					Select your option
				</option>
				{props.data.map((option, index) => (
					<option key={index} value={index}>
						{option}
					</option>
				))}
			</select>
		</div>
	);
});

export const InputDate = forwardRef<HTMLInputElement, InputDateProps>((props, ref) => {
	// Get Date in UTC format
	const date = new Date(props.value ?? '');
	const dateUTC = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));

	return (
		<div className={styles.inputStyle}>
			<label htmlFor={props.name} className={styles.labelText}>
				{props.text}
			</label>
			<input
				form={props.form}
				type="date"
				id={props.inputId}
				name={props.name}
				required={props.required}
				readOnly={props.readonly}
				disabled={props.disabled}
				ref={ref}
				value={props.value ? dateUTC.toISOString().split('T')[0] : undefined}
			/>
		</div>
	);
});

export const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>((props, ref) => {
	if (props.text === 'I agree to the Terms and Conditions') {
		return (
			<div className={styles.inputCheckboxStyle}>
				<label htmlFor={props.name} className={styles.labelText}>
					I agree to the <Link href="#">Terms</Link> and <Link href="#">Conditions</Link>
				</label>
				<input
					form={props.form}
					type="checkbox"
					id={props.inputId}
					name={props.name}
					required={props.required}
					readOnly={props.readonly}
					disabled={props.disabled}
					ref={ref}
				/>
			</div>
		);
	}

	return (
		<div className={styles.inputCheckboxStyle}>
			<label htmlFor={props.name} className={styles.labelText}>
				{props.text}
			</label>
			<input
				form={props.form}
				type="checkbox"
				id={props.inputId}
				name={props.name}
				required={props.required}
				readOnly={props.readonly}
				disabled={props.disabled}
				ref={ref}
			/>
		</div>
	);
});
