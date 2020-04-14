import React, { Component } from 'react';

export default class HelloWorld extends Component {
	render(){
		return(
			<h1>{this.props.title} repos</h1>
		)
	}
}