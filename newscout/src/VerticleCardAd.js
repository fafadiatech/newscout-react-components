import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkSquareAlt } from '@fortawesome/free-solid-svg-icons';

export class VerticleCardAd extends React.Component {

	render() {
		const { id, image, description, source_url } = this.props;
		return (
			<Card className="card-post">
				<a href={`${source_url}`}><img src={image} alt={id} className="img-fluid" /></a>
				<CardBody className="adlink">
					<CardText className="card-desc"><a href={`${source_url}`} target="_blank">{description}</a></CardText>
					<div className="clearfix">
						<div className="float-left"></div>
						<ul className="list-inline m-0">
							<li className="list-inline-item">
								<FontAwesomeIcon icon={faExternalLinkSquareAlt} /> sponsored
								</li>
						</ul>
					</div>
				</CardBody>
			</Card>
		)
	}
}
