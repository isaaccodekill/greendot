import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Main from "../pages/main"

export default () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={Main} />
				{/* <Route component={Main} /> */}
			</Switch>
		</BrowserRouter>
	)
}
