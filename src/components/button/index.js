import React from "react"
import "./style.scss"

const Button = ({ text, onClick, className }) => {
	return (
		<button
			onClick={onClick}
			className={`BtnPrimary ${className ? className : ""}`}
		>
			{text}
		</button>
	)
}

export default Button
