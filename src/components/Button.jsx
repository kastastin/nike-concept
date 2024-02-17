const Button = ({
	label,
	iconURL,
	fullWidth,
	borderColor,
	backgroundColor,
	textColor,
}) => (
	<button
		className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
				backgroundColor
					? `${backgroundColor} ${textColor} ${borderColor}`
					: "bg-coral-red text-white border-coral-red hover:bg-red-500"
			} rounded-full ${fullWidth && "w-full"}`}
	>
		{label}

		{iconURL && (
			<img
				src={iconURL}
				alt="Right arrow"
				className="ml-2 rounded-full bg-white w-5 h-5"
			/>
		)}
	</button>
);

export default Button;