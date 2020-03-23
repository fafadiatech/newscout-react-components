import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

export class SliderItem extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<UncontrolledCarousel items={this.props.slides} />
		)
	}
}