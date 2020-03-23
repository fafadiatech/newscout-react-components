import React from 'react';

export class SectionTitle extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div className="sidebox">
				<div className="boxtitle mb-4">
					<h4 className="m-0">{this.props.title}</h4>
				</div>
			</div>
		)
	}
}