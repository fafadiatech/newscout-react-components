import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { Card, CardImg, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";

export class HorizontalCardItem extends React.Component {

	getArticleId = () => {
		this.props.getArticleId(this.props.id)
	}
	
	render(){
		const { id, image, title, description, uploaded_on, uploaded_by, slug_url, source_url, category, hash_tags, bookmark_ids, base_url } = this.props;
		let final_url = base_url+slug_url;
		let bookmark_index = bookmark_ids.findIndex(x => x.id === id);
		return(
			<article className="article-post">
				<div className="row">
					<div className="col-lg-6 p-0">
						<a href={`${slug_url}`}><img src={image} alt={title} className="img-fluid" /></a>
						<div className="section-category">{uploaded_on}</div>
					</div>
					<div className="col-lg-6 p-0">
						<Card className="card-post">
							<CardBody>
								<CardTitle className="mb-2">
									<a href={`${slug_url}`}>{title}</a>
								</CardTitle>
								<CardText className="mb-2">
									<a href={`${source_url}`}>{uploaded_by}</a>
								</CardText>
								<CardText className="card-desc mb-2"><a href={`${slug_url}`} target="_blank">{description}</a></CardText>
								<div className="clearfix">
									<div className="float-left">
										<CardLink href={`${slug_url}`}>Read More...</CardLink>
									</div>
									<div className="float-right">
										<ul className="list-inline m-0 sharelink">
											<li className="list-inline-item">
												<div>
													<FacebookShareButton url={final_url} quote={title} image={image}>
														<FacebookIcon size={20} round />
													</FacebookShareButton>&nbsp;
													<TwitterShareButton url={final_url} quote={title} image={image}>
														<TwitterIcon size={20} round />
													</TwitterShareButton>&nbsp;
													<WhatsappShareButton url={final_url} quote={title} image={image}>
														<WhatsappIcon size={20} round />
													</WhatsappShareButton>
												</div>
												<FontAwesomeIcon icon={faShareAlt} />
											</li>
											<li className="list-inline-item">
												<FontAwesomeIcon icon={faBookmark} onClick={this.getArticleId} className={`${bookmark_index > -1 ? 'bookmarked' : ''} product-${id}`} />
											</li>
										</ul>
									</div>
								</div>
							</CardBody>
						</Card>
					</div>
				</div>
			</article>
		)
	}
}
