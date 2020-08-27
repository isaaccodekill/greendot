import React, { useState } from "react"
import "./style.scss"
import { ReactComponent as Logo } from "../../assets/images/Logo.svg"
import Navitem from "../../components/navitem"
import Button from "../../components/button"
import Menu from "../../components/menuBtn"
import { ReactComponent as HeaderIll } from "../../assets/images/ModifiedBusiness.svg"
import { ReactComponent as Dashboard } from "../../assets/images/dashboard.svg"
import { ReactComponent as Pie } from "../../assets/images/pieChart.svg"
import { ReactComponent as Traffic } from "../../assets/images/traffic.svg"
import { ReactComponent as Phone } from "../../assets/images/phoneGroup.svg"
import { ReactComponent as Face } from "../../assets/images/facebook.svg"
import { ReactComponent as Twitter } from "../../assets/images/twitter.svg"
import { ReactComponent as Link } from "../../assets/images/linkedin.svg"
import { ReactComponent as Mail } from "../../assets/images/mail.svg"
import { NavLink } from "react-router-dom"
import Sidebar from "../../components/sidebar/index"

const Main = () => {
	const [open, setOpen] = useState(false)
	return (
		<div className="mainPage">
			<Sidebar open={open} setOpen={setOpen} />
			<div className="Header">
				<div className="navGroup">
					<Logo />
					<div className="flexNavItems">
						<Navitem url={"/"} text={"home"} />
						<Navitem url={"#"} text={"industries"} />
						<Navitem url={"#"} text={"blog"} />
						<Navitem url={"#"} text={"how it works"} />
						<Navitem url={"#"} text={"our customers"} />
						<Navitem url={"#"} text={"about us"} />
						<Navitem url={"#"} text={"contact us"} />
						<Button onClick={() => {}} text="Login" className="navBtn" />
					</div>
					<Menu open={open} setOpen={setOpen} />
				</div>
				<div className="main">
					<div className="text">
						<h1>A simple and smart tool that will help grow your business</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
							autem odio natus quasi pariatur ducimus facere impedit, adipisci
							quos porro placeat nulla sit dicta sed! Nam, aspernatur.
							Distinctio, minima tenetur.
						</p>
						<Button
							onClick={() => {}}
							text="Learn More"
							className="headerBtn"
						/>
					</div>
					<HeaderIll />
				</div>
			</div>
			<div className="features">
				<div className="text">
					<h1>Features</h1>
					<p>
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
						perferendis, illum animi fuga deserunt tenetur, tempore numquam enim
						consectetur unde at quaerat dicta earum vel porro illo reprehenderit
						aspernatur eveniet.
					</p>
				</div>
				<div className="featureItemsGroup">
					<div className="featureItem">
						<Dashboard />
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
							saepe, debitis corrupti harum dolorum, ut impedit culpa nemo
							mollitia nisi architecto ducimus magnam quia? Odio, eos sint! Ad,
							laudantium non!
						</p>
					</div>
					<div className="featureItem">
						<Pie />
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
							saepe, debitis corrupti harum dolorum, ut impedit culpa nemo
							mollitia nisi architecto ducimus magnam quia? Odio, eos sint! Ad,
							laudantium non!
						</p>
					</div>
					<div className="featureItem">
						<Traffic />
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
							saepe, debitis corrupti harum dolorum, ut impedit culpa nemo
							mollitia nisi architecto ducimus magnam quia? Odio, eos sint! Ad,
							laudantium non!
						</p>
					</div>
				</div>
			</div>
			<div className="featuresExtended">
				<div className="text">
					<h1>Features</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
						autem odio natus quasi pariatur ducimus facere impedit, adipisci
						quos porro placeat nulla sit dicta sed! Nam, aspernatur. Distinctio,
						minima tenetur.
					</p>
					<Button onClick={() => {}} text="Learn More" className="headerBtn" />
				</div>
				<Phone />
			</div>
			<div className="footer">
				<div className="footerHead">
					<h1>A simple way to track your business growth</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
						excepturi corrupti est perspiciatis, accusantium eveniet odit
						cupiditate inventore mollitia deserunt nemo tempore laudantium ea
						nostrum libero. Ipsa itaque accusantium iste?
					</p>
					<Button onClick={() => {}} text="Start trial" className="headerBtn" />
				</div>
				<div className="footerMain">
					<Logo />
					<div className="footerLinks">
						<div className="footerLinkGroup">
							<h2>Links</h2>
							<NavLink to="#" className="footerLink">
								<span>Home</span>
							</NavLink>
							<NavLink to="#" className="footerLink">
								<span>Blog</span>
							</NavLink>
							<NavLink to="#" className="footerLink">
								<span>Where to find us</span>
							</NavLink>
						</div>
						<div className="footerLinkGroup">
							<h2>Support</h2>
							<NavLink to="#" className="footerLink">
								<span>Faqs</span>
							</NavLink>
							<NavLink to="#" className="footerLink">
								<span>Contact</span>
							</NavLink>
						</div>
						<div className="footerLinkGroup">
							<h2>Social</h2>
							<div className="socialGroup">
								<NavLink to="#" className="footerLink">
									<Face />
								</NavLink>
								<NavLink to="#" className="footerLink">
									<Twitter />
								</NavLink>
								<NavLink to="#" className="footerLink">
									<Link />
								</NavLink>
								<NavLink to="#" className="footerLink">
									<Mail />
								</NavLink>
							</div>
						</div>
					</div>
				</div>
				<p className="copy">
					Copyright &copy; 2010-2020 GreenDot company all rights reserved
				</p>
			</div>
		</div>
	)
}

export default Main
