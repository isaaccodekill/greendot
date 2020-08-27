import React from "react"
import "./style.scss"
import SideLinks from "./sidebarLinks/index"

const Sidebar = ({ open, setOpen }) => {
	return (
		<div className={`sidebar ${open ? "sidebar--open" : ""}`}>
			<SideLinks setOpen={setOpen} text={"Home"} url={"/"} />
			<SideLinks setOpen={setOpen} text={"Industries"} url={"#"} />
			<SideLinks setOpen={setOpen} text={"Blog"} url={"#"} />
			<SideLinks setOpen={setOpen} text={"How it works"} url={"#"} />
			<SideLinks setOpen={setOpen} text={"Our Customers"} url={"#"} />
			<SideLinks setOpen={setOpen} text={"About us"} url={"#"} />
			<SideLinks setOpen={setOpen} text={"Contact us"} url={"#"} />
		</div>
	)
}

export default Sidebar
