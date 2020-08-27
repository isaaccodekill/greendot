import React from "react"
import "./style.scss"
import { NavLink } from "react-router-dom"

const SidebarLink = ({ url, text, active, setOpen }) => {
	return (
		<NavLink
			className="sideLink"
			to={url}
			isActive={() => active}
			activeClassName="sideActive"
		>
			<span onClick={() => setOpen(false)}>{text}</span>
		</NavLink>
	)
}

export default SidebarLink
