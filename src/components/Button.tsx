import React from 'react';

const Button = ({
	bgColor,
	color,
	text = 'buttom',
	borderRadius,
	size = 'md',
}: {
	bgColor: string;
	color: string;
	text: string;
	borderRadius: string;
	size?: string;
}) => {
	return (
		<button
			className={`text-${size} p-3 px-4 hover:drop-shadow-xl`}
			style={{ backgroundColor: bgColor, color, borderRadius }}
		>
			{text}
		</button>
	);
};

export default Button;
