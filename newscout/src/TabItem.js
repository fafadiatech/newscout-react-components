import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Media } from 'reactstrap';

export class TabItem extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			activeTab: '0'
		};
	}

	toggle = (tab) => {
		if(this.state.activeTab !== tab){
			this.setState({
				activeTab: tab
			})
		}
	}

	render(){

		var navitem = this.props.tabnav.map((item, index) => {
			return (
				<NavItem key={index}>
					<NavLink
						className={this.state.activeTab === index.toString() ? 'active' : ''}
						onClick={() => this.toggle(index.toString())}>
						{item.tab_title}
					</NavLink>
				</NavItem>
			)
		})

		var tabpane = this.props.tabnav.map((item, index) => {
			return (
				<TabPane tabId={index.toString()} key={index} className={this.state.activeTab === index.toString() ? 'active' : ''}>
					{item.tab_posts.map((subitem, index) => {
						return(
							<Media key={index}>
								<Media left href={`/news/article/${subitem.id}/`} className="mr-4">
									<Media object src={subitem.src} alt={subitem.alttext} />
								</Media>
								<Media body>
									<Media heading>
										<a href={`/news/article/${subitem.id}/`}>{subitem.header}</a>
									</Media>
									{subitem.caption}
								</Media>
							</Media>
						)
					})}
				</TabPane>
			)
		})
		
		return(
			<React.Fragment>
				<Nav tabs>{navitem}</Nav>
				<TabContent>{tabpane}</TabContent>
			</React.Fragment>
		)
	}
}