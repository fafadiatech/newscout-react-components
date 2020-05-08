import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const icon_name = '-white.'

export class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isChecked: this.props.isChecked,
			isSideOpen: this.props.isSideOpen,
		}
	}

	componentWillReceiveProps(newProps) {
		this.setState({
			isChecked: newProps.isChecked,
			isSideOpen: newProps.isSideOpen
		})
	}


	render() {
		var listitem = this.props.menuitems.map((item, index) => {
			var icon_path = ""
			if (this.state.isChecked === true) {
				icon_path = item.item_icon.split(".")[0] + icon_name + item.item_icon.split(".")[1]
			} else {
				icon_path = item.item_icon
			}
			return (
				<ListGroupItem className={this.props.active === item.itemurl.replace("news/", "").trim() ? 'active-menu' : ''} tag="a" href={"/"+item.itemurl+"/"} key={index}>
					<img src={`/${icon_path}`} alt={item.itemtext} className="menu-icons"/>&nbsp;
					{item.itemtext}
				</ListGroupItem>
			)
		})
		return (
			<div className={`sidebar col-lg-2 d-none d-md-block d-xl-block ${this.props.class ? '' : 'sidebar-none'}`}>
				<ListGroup>
					{this.props.domain === "domain=newscout" || this.props.domain === undefined ?
						<ListGroupItem className={this.props.active === "trending" ? 'active-menu' : ''} tag="a" href="/news/trending/">
							<img src={`${this.state.isChecked ? "/static/icons/trending_news-white.png" : "/static/icons/trending_news.png"}`} alt="Trending" className="menu-icons" />&nbsp;
							Trending
						</ListGroupItem>
						: ""
					}
					{listitem}
					{this.props.domain === "domain=newscout" || this.props.domain === undefined ?
						<ListGroupItem className={this.props.active === "rss" ? 'active-menu' : ''} tag="a" href="/news/rss/?domain=newscout">
							<img src={`${this.state.isChecked ? "/static/icons/rss-white.png" : "/static/icons/rss.png"}`} alt="rss" className="menu-icons" />&nbsp;
							RSS
						</ListGroupItem>
						: ""
					}
				</ListGroup>
			</div>
		)
	}
}
