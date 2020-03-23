import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";

export class ImageOverlay extends React.Component {

	getArticleId = () => {
		this.props.getArticleId(this.props.id)
	}

	render(){
		
		const {id, image, title, description, uploaded_by, source_url, category, slug_url, is_loggedin, bookmark_ids, base_url} = this.props;
		let size = this.props.size !== undefined ? this.props.size : "lg";
		let final_url = base_url+slug_url
		
		return(
			<article className={`article ${size !== "lg" ? "sm" : ""}`}>
				<section>
					<div className={`section-img ${size !== "lg" ? "sm" : ""}`}>
						<a href={`${slug_url}`}><img src={image} alt={title} className="img-fluid" /></a>
					</div>
					{size === "lg" ?
						<React.Fragment><div className="section-category">{category}</div></React.Fragment>
					:
						""
					}
				</section>
				<div className={`section-content ${size !== "lg" ? "sm" : ""}`}>
					{size === "lg" ?
						<React.Fragment>
							<h3 className="section-title"><a href={`${slug_url}`}>{title}</a></h3>
							<div className="clearfix">
								<div className="float-left">
									<ul className="list-unstyled m-0">
										<li className="list-item"><a href={`${source_url}`}>{uploaded_by}</a></li>
									</ul>
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
						</React.Fragment>
					:
						<React.Fragment>
							<h5 className="section-title"><a href={`${slug_url}`}>{title}</a></h5>
						</React.Fragment>
					}
				</div>
			</article>
		)
	}
}
