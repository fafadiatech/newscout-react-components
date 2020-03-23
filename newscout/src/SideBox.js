import React from 'react';
import { Media } from 'reactstrap';

export class SideBox extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		var post = this.props.posts.map((item, index) => {
			return (
				<Media key={index}>
					<Media left href={`${item.slug}/`} className="mr-3 img">
						<Media object src={item.src} alt={item.alttext} />
					</Media>
					<Media body>
						<Media heading>
							<a href={`${item.slug}/`}>{item.title}</a>
							<p><small>{item.published_on}</small></p>
						</Media>
					</Media>
				</Media>
			);
		});

		return(
			<React.Fragment>{post !== undefined ? post : ""}</React.Fragment>
		)
	}
}