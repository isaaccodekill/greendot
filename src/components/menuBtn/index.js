import React from "react"
import "./style.scss"

const MenuBtn = ({ open, setOpen }) => {
	return (
		<button className={`menuBtn ${open ? "menuBtn--open" : ""}`} onClick={() => setOpen(!open)}>
			<div className="menu"></div>
		</button>
	)
}


export default MenuBtn