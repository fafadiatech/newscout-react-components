import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

export class SideBar extends React.Component {
	constructor(props) {
		super(props);
	}


	render(){
		var listitem = this.props.menuitems.map((item, index) => {
			return (
				<ListGroupItem tag="a" href={"/"+item.itemurl+"/"} key={index}>
					<img src={`${item.item_icon}`} alt={item.itemtext} className="menu-icons"/>&nbsp;
					{item.itemtext}
				</ListGroupItem>
			)
		})
		return(
			<div className={`sidebar col-lg-2 d-none d-md-block d-xl-block ${this.props.class ? '' : 'sidebar-none'}`}>
				<ListGroup>
					{this.props.domain === "domain=newscout" || this.props.domain === undefined ?
						<ListGroupItem tag="a" href="/news/trending/">
							<img src="/static/icons/trending_news.png" alt="Trending" className="menu-icons"/>&nbsp;
							Trending
						</ListGroupItem>
					: ""
					}
					{listitem}
					{this.props.domain === "domain=newscout" || this.props.domain === undefined ?
						<ListGroupItem tag="a" href="/news/rss/?domain=newscout">
                                                        <img src="/static/icons/rss.png" alt="rss" className="menu-icons"/>&nbsp;
							RSS
						</ListGroupItem>
					: ""
					}
				</ListGroup>
			</div>
		)
	}
}
