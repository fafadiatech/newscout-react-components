import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";

export class ContentOverlay extends React.Component {

	getArticleId = () => {
		this.props.getArticleId(this.props.id)
	}
	
	render(){
		
		const {id, title, description, uploaded_by, source_url, category, slug_url, is_loggedin, bookmark_ids, base_url} = this.props;
		let final_url = base_url+slug_url

		return(
			<article className="featurepost">
				<div className="featurepost-content">
					<ul className="list-inline featurepost-category">
						<li className="list-inline-item">{category}</li>
					</ul>
					<h3><a href={`${slug_url}`}>{title}</a></h3>
					<ul className="list-unstyled featurepost-source">
						<li className="list-item"><a href={`${source_url}`}>{uploaded_by}</a></li>
					</ul>
					<p>{description}</p>
					<div className="clearfix">
						<div className="float-left">
							<h6><a href={`${slug_url}`}>Read More...</a></h6>
						</div>
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
				</div>
			</article>
		)
	}
}
