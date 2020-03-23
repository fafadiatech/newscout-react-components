import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";

export class JumboBox extends React.Component {

	getArticleId = () => {
		this.props.getArticleId(this.props.id)
	}

	render(){
		
		const { id, source_url, image, title, uploaded_on, uploaded_by, description, hash_tags, slug_url, is_loggedin, bookmark_ids, base_url } = this.props;
		let all_hash_tags = "";
		let final_url = base_url+slug_url
		
		if(hash_tags !== undefined){
			all_hash_tags = hash_tags.map((item, index) => {
				return(
					<li className="list-inline-item">{`#${item}`}</li>
				)
			})
		}
		
		return(
			<Card className="card-post">
				<a href={`${source_url}`} target="_blank"><img src={image} alt={title} className="img-fluid" /></a>
				<div className="section-category">{uploaded_on}</div>
				<CardBody>
					<CardTitle className="mb-3">
						<ul className="list-inline hash-tags mb-2">{all_hash_tags}</ul>
						<h3><a href={`${source_url}`} target="_blank">{title}</a></h3>
					</CardTitle>
					<CardText className="mb-4">
						<a href={`${source_url}`} target="_blank">{uploaded_by}</a>
					</CardText>
					<CardText className="card-desc">{description}</CardText>
					<div className="clearfix">
						<div className="float-right">
							<ul className="list-inline m-0 sharelink">
								<li className="list-inline-item">
									<div>
										<FacebookShareButton url={final_url} quote={title}>
											<FacebookIcon size={20} round />
										</FacebookShareButton>&nbsp;
										<TwitterShareButton url={final_url} quote={title}>
											<TwitterIcon size={20} round />
										</TwitterShareButton>&nbsp;
										<WhatsappShareButton url={final_url} quote={title}>
											<WhatsappIcon size={20} round />
										</WhatsappShareButton>
									</div>
									<FontAwesomeIcon icon={faShareAlt} />
								</li>
								<li className="list-inline-item">
									<FontAwesomeIcon icon={faBookmark} onClick={this.getArticleId} className={bookmark_ids.indexOf(id) > -1 ? 'bookmarked' : ''} />
								</li>
							</ul>
						</div>
					</div>
				</CardBody>
			</Card>
		)
	}
}
