const Button = ({
	label,
	iconURL,
	fullWidth,
	borderColor,
	backgroundColor,
	textColor,
}) => (
	<button
		className={`flex items-center justify-center gap-2 border px-7 py-4 font-montserrat text-lg leading-none
      ${
				backgroundColor
					? `${backgroundColor} ${textColor} ${borderColor}`
					: "border-coral-red bg-coral-red text-white hover:bg-red-500"
			} rounded-full ${fullWidth && "w-full"}`}
	>
		{label}

		{iconURL && (
			<img
				src={iconURL}
				alt="Right arrow"
				className="ml-2 h-5 w-5 rounded-full bg-white"
			/>
		)}
	</button>
);

export default Button;
