import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { Search } from 'newscout';

const current_date = new Date()
const current_year = current_date.getFullYear()

export class Footer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	render(){
		return(
			<footer className="footer-area py-4">
				<div className="container">
					<div className="row">
						<div className="col-lg-5">
							<p className="m-0">&copy; Copyright {current_year}, All Rights Reserved by <a href="/">Newscout</a></p>
						</div>
						<div className="col-lg-3">
							<p className="m-0">Made with <FontAwesomeIcon icon={faHeart} /> by <a href="https://www.fafadiatech.com/" target="_blank">Fafadia Tech</a></p>
						</div>
						<div className="col-lg-4">
							<ul className="list-inline m-0 text-right">
								<li className="list-inline-item">
									<a href={this.props.privacyurl}>Privacy Policy</a>
								</li>
								<li className="list-inline-item">|</li>
								<li className="list-inline-item">
									<a href={this.props.facebookurl} target="_blank">
										<FontAwesomeIcon icon={faFacebookSquare} />
									</a>
								</li>
								<li className="list-inline-item">
									<a href={this.props.twitterurl} target="_blank">
										<FontAwesomeIcon icon={faTwitter} />
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</footer>
		)
	}
}