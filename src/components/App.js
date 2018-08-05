import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { inject, observer } from "mobx-react";
import LazyRoute from "lazy-route";
import DevTools from "mobx-react-devtools";

@inject("store")
@observer
export default class App extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}
	render() {
		return (
			<div>
				{/*<DevTools />*/}
                <DevTools />
				<Route
					exact
					path="/"
					render={props => (
						<LazyRoute {...props} component={import("./Hello")} />
					)}
				/>
			</div>
		);
	}
}
