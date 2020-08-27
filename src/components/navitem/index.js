import React from "react"
import "./style.scss"
import { NavLink } from "react-router-dom"

const navItem = ({ url, text, active }) => {
	return (
		<NavLink
			className="link"
			to={url}
			isActive={() => active}
			activeClassName="activeLink"
		>
			<button className="NavLink">
				<span>{text}</span>
				{/* <div className="greenDot"></div> */}
			</button>
		</NavLink>
	)
}

export default navItem
