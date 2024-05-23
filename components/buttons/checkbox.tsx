import React from 'react';
import styled, { keyframes } from 'styled-components';

const Input = styled.input`
	height: 0;
	width: 0;
	opacity: 0;
	z-index: -1;
`;

interface LabelProps {
	disabled?: boolean;
}

const Label = styled.label<LabelProps>`
	position: relative;
	display: inline-block;
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	margin: 0.6em 1em;
	letter-spacing: 0.1rem;
`;

const rotate = keyframes`
 from {
    opacity: 0;
    transform: rotate(0deg);
  }
  to {
    opacity: 1;
    transform: rotate(45deg);
  }
`;

const Indicator = styled.div`
	width: 1.3em;
	height: 1.3em;
	background: ${({ theme }) => theme.colors.background};
	position: absolute;
	top: 0.1em;
	left: -1.6em;
	border: 1px solid ${({ theme }) => theme.colors.primary};
	border-radius: 0.2em;

	${Input}:not(:disabled):checked & {
		background: #8b0d0d;
	}

	${Label}:hover & {
		background: #494949;
	}

	&::after {
		content: '';
		position: absolute;
		display: none;
	}

	${Input}:checked + &::after {
		display: block;
		top: 0em;
		left: 0.3em;
		width: 30%;
		height: 65%;
		border: solid ${({ theme }) => theme.colors.secondary};
		border-width: 0 0.2em 0.2em 0;
		animation-name: ${rotate};
		animation-duration: 0.3s;
		animation-fill-mode: forwards;
	}

	&::disabled {
		cursor: not-allowed;
	}
`;

interface CheckboxProps {
	checked: boolean;
	onChange: () => void;
	name: string;
	id: string;
	label: string;
	disabled?: boolean;
}

export default function Checkbox({
	checked,
	onChange,
	name,
	id,
	label,
	disabled,
}: CheckboxProps) {
	return (
		<Label htmlFor={id} disabled={disabled}>
			<Input
				id={id}
				type="checkbox"
				name={name}
				disabled={disabled}
				checked={checked}
				onChange={onChange}
			/>
			<Indicator />
			{label}
		</Label>
	);
}
