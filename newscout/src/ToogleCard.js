import React from 'react';
import moment from 'moment';
import { Card, CardImg, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBookmark, faShareAlt } from '@fortawesome/free-solid-svg-icons';
import { FacebookShareButton, FacebookIcon, TwitterShareButton, TwitterIcon, WhatsappShareButton, WhatsappIcon } from "react-share";

export class ToogleCard extends React.Component {

	constructor(props) {
		super(props);
		this.state = {}
	}

	getArticleId = (e) => {
		var itemid = e.currentTarget.id;
		this.props.getArticleId(itemid)
	}

	render() {
		console.log("ToogleCard.js")
		const { items, is_loggedin, bookmark_ids, base_url, index } = this.props;

		var results = items.map((item, j) => {
			if (j !== 0) {
				return (
					<div className="row" key={j}>
						<div className="col-lg-9 col-12">
							<ul className="list-inline m-0 inside-post" key={j}>
								<li className="list-inline-item mb-4">
									<h6 className="mb-1">{moment(item.published_on).startOf('hour').fromNow()}</h6>
									<h4><a href={`/news/article/${item.slug}`}>{item.title}</a></h4>
									<div className="clearfix">
										<div className="float-left">
											<h6 className="m-0">
												<a href={item.source_url}>{item.source}</a>
											</h6>
										</div>
										<div className="float-right">
											<ul className="list-inline m-0 sharelink">
												<li className="list-inline-item">
													<div>
														<FacebookShareButton url={`${base_url}/news/article/${item.slug}`} quote={item.title} image={item.image}>
															<FacebookIcon size={15} round />
														</FacebookShareButton>&nbsp;
														<TwitterShareButton url={`${base_url}/news/article/${item.slug}`} quote={item.title} image={item.image}>
															<TwitterIcon size={15} round />
														</TwitterShareButton>&nbsp;
														<WhatsappShareButton url={`${base_url}/news/article/${item.slug}`} quote={item.title} image={item.image}>
															<WhatsappIcon size={15} round />
														</WhatsappShareButton>
													</div>
													<FontAwesomeIcon icon={faShareAlt} />
												</li>
												<li className="list-inline-item">
													<FontAwesomeIcon icon={faBookmark} onClick={this.getArticleId} className={`${bookmark_ids.findIndex(x => x.id === item.id) > -1 ? 'bookmarked' : ''} product-${item.id}`} />
												</li>
											</ul>
										</div>
									</div>
								</li>
							</ul>
						</div>
						<div className="col-lg-3 text-right col-12 d-none d-sm-block">
							<a href={`/news/article/${item.slug}`}>
								<img src={"http://images.newscout.in/unsafe/70x70/left/top/" + decodeURIComponent(item.cover_image)} className="img-fluid" />
							</a>
						</div>
					</div>
				)
			}
		})

		return (
			<div className="card toogle-card">
				<div className="card-header" id={`heading${index}`}>
					<div className="article-card">
						<div className="row">
							<div className="col-lg-3 text-right col-12 d-block d-sm-none mb-1">
								<a href={`/news/article/${items[0].slug}`}>
									<img src={"http://images.newscout.in/unsafe/368x276/left/top/" + decodeURIComponent(items[0].cover_image)} className="img-fluid" />
								</a>
							</div>
							<div className="col-lg-9 col-12">
								<ul className="list-inline featurepost-category mb-1">
									<li className="list-inline-item">{moment(items[0].published_on).startOf('hour').fromNow()}</li>
								</ul>
								<h3><a href={`/news/article/${items[0].slug}`}>{items[0].title}</a></h3>
								<div className="clearfix">
									<div className="float-left">
										<ul className="list-inline m-0">
											<li className="list-inline-item"><a href={items[0].source_url}>{items[0].source}</a></li>
										</ul>
									</div>
									<div className="float-right">
										<ul className="list-inline m-0 sharelink">
											<li className="list-inline-item">
												<div>
													<FacebookShareButton url={`${base_url}/news/article/${items[0].slug}`} quote={items[0].title}>
														<FacebookIcon size={15} round />
													</FacebookShareButton>&nbsp;
													<TwitterShareButton url={`${base_url}/news/article/${items[0].slug}`} quote={items[0].title}>
														<TwitterIcon size={15} round />
													</TwitterShareButton>&nbsp;
													<WhatsappShareButton url={`${base_url}/news/article/${items[0].slug}`} quote={items[0].title}>
														<WhatsappIcon size={15} round />
													</WhatsappShareButton>
												</div>
												<FontAwesomeIcon icon={faShareAlt} />
											</li>
											<li className="list-inline-item">
												<FontAwesomeIcon icon={faBookmark} onClick={this.getArticleId} className={`${bookmark_ids.findIndex(x => x.id === items[0].id) > -1 ? 'bookmarked' : ''} product-${items[0].id}`} />
											</li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-lg-3 text-right col-12 d-none d-sm-block">
								<a href={`/news/article/${items[0].slug}`}>
									<img src={"http://images.newscout.in/unsafe/100x100/left/top/" + decodeURIComponent(items[0].cover_image)} className="img-fluid" />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div id={`collapse${index}`} className={`collapse ${index === 0 ? 'show' : ''}`} aria-labelledby={`heading${index}`} data-parent="#accordionExample">
					<div className="card-body">
						{results}
					</div>
				</div>
				<h5 className="text-center mb-0">
					<div className={`${index === 0 ? '' : 'collapsed'}`} data-toggle="collapse" data-target={`#collapse${index}`} aria-expanded={`${index === 0 ? 'true' : 'false'}`} aria-controls={`collapse${index}`}>
						<div>
							<ul className="list-inline m-0 sharelink">
								<li className="list-inline-item">
									<FontAwesomeIcon icon={faAngleDown} />
								</li>
								<li className="list-inline-item">
									<p><b> +{items.length - 1}</b></p>
								</li>
							</ul>
						</div>
					</div>
				</h5>
			</div>
		)
	}
}