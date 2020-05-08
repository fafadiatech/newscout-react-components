import React from 'react';
import Cookies from 'universal-cookie';
import KeyboardEventHandler from 'react-keyboard-event-handler';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupAddon, InputGroupText, Tooltip } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faSignInAlt, faPowerOff, faBookmark, faMoon, faSun, faUser, faFilter, faLock } from '@fortawesome/free-solid-svg-icons';
import { AsyncTypeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';

import { Search } from 'newscout';

const cookies = new Cookies();
const icon_name = '-white.'

export class Menu extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			isSearchOpen: false,
			isSlider: this.props.isSlider,
			isSideOpen: this.props.isSideOpen,
			text: '',
			isChecked: this.props.isChecked,
			tooltipOpen: false,
			selected: [],
			dropdownOpen: false,
			isNavbarFilter: this.props.isNavbarFilter || false,
			query: this.props.query || ""
		};

		this.myRef = React.createRef();
	}

	toggleDropdown = () => {
		this.setState({
			dropdownOpen: !this.state.dropdownOpen
		})
	}

	toggleSwitch = () => {
		this.setState({
			isChecked: !this.state.isChecked
		}, function() {
			this.props.toggleSwitch(this.state.isChecked)
		});
	}

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	toggleLogin = () => {
		this.props.toggle(this.props.is_open)
	}

	isSideBarToogle = () => {
		this.setState({
			isSideOpen: !this.state.isSideOpen
		}, function() {
			this.props.isSideBarToogle(this.state.isSideOpen)
		})
	}

	tooltipToggle = () => {
		this.setState({
			tooltipOpen: !this.state.tooltipOpen
		})
	}

	handleKeyPress = (e) => {
		var value = e.target.value;
		var url = this.props.url+"?q="+value;
		if(e.keyCode == 13){
			window.location.href = url;
		}
	}

	handleSearchClick = () => {
		var value = this.state.text;
		if(value !== "" && value !== undefined){
			var url = this.props.url+"?q="+value;
			window.location.href = url;
		}
	}

	handleAutoFocus = () => {
		const instance = this._typeahead.getInstance();
		instance.clear();
		instance.focus();
	}

	handleSearch = (query) => {
		this.props.handleSearch(query)
	}

	handleChange = (e) => {
		const value = e.target.value;
		this.setState({ text: value})
	}

	handleLogout = () => {
		this.props.handleLogout()
	}

	toggleFilter = () => {
		this.props.toggleFilter()
	}

	handleDocumentClick = (e) => {
		const container = this._element;
		if (e.target !== container && !container.contains(e.target)) {
			if(this.state.isOpen === true){
				this.toggle();
			}
		}
	}

	componentDidMount() {
		document.addEventListener('click', this.handleDocumentClick, true);
	}

	componentWillUnmount() {
		document.removeEventListener('click', this.handleDocumentClick, false);
	}

	componentWillReceiveProps(newProps){
		this.setState({
			isChecked: newProps.isChecked,
			isSideOpen: newProps.isSideOpen,
			isNavbarFilter: newProps.isNavbarFilter,
			query: newProps.query
    	})
    }

	render(){
		const { multiple, placeholder, url, isSlider, domain, navitems, logo, username, is_loggedin, options } = this.props;
		const { dropdownOpen } = this.state;

		if(this.state.isSearchOpen === true){
			document.getElementsByTagName("body")[0].style = "overflow:hidden";
		} else {
			document.getElementsByTagName("body")[0].style = "overflow:auto";
		}

		const menu = navitems.map((item, index) => {
			var menuitem = item.itemtext.replace(/ /g, "-").toLowerCase();
			var icon_path = "";
			if(this.state.isChecked === true){
				icon_path = item.item_icon.split(".")[0]+icon_name+item.item_icon.split(".")[1];
			} else {
				icon_path = item.item_icon;
			}
			return (
				<NavItem key={index} className="d-block d-md-none">
					<NavLink href={`${domain !== 'dashboard' ? '/news/' : '/'}${menuitem}/`}>
						<img src={`/${icon_path}`} alt={item.itemtext} className="menu-icons"/>&nbsp;
						{item.itemtext}
					</NavLink>
				</NavItem>
			)
		})

		return(
			<React.Fragment>
				<div ref={(c)=> (this._element = c)}>
					<Navbar className="fixed-top" expand="md">
						<NavbarToggler onClick={this.toggle} className="custom-toggler" />
						{isSlider ?
							<React.Fragment>
								<div className="sidebar-btn d-none d-sm-block" onClick={this.isSideBarToogle}><FontAwesomeIcon icon={faBars} size="lg" /></div>
							</React.Fragment>
						: ""
						}
						<NavbarBrand href={` ${domain === "dashboard" ? "/dashboard/" : "/"} `} className="ml-3"></NavbarBrand>
						<Nav className="ml-auto toogler-switch list-inline">
							<NavItem className="list-inline-item" style={{lineHeight: '15px'}}>
								{this.state.isChecked ?
									<FontAwesomeIcon icon={faMoon} style={{fontSize:'16px'}}/>
								:
									<FontAwesomeIcon icon={faSun} style={{fontSize:'16px'}}/>
								}
								<label className="switch" id="TooltipExample">
									<input type="checkbox" onChange={this.toggleSwitch} checked={this.state.isChecked} className={`${this.state.isChecked ? 'checked-switch' : ''}`} />
									<span className="slider round"></span>
								</label>
							</NavItem>
							{domain === "domain=newscout" || domain === undefined ?
								<React.Fragment>
									{is_loggedin ?
										<UncontrolledDropdown nav inNavbar className="list-inline-item">
											<DropdownToggle nav caret className="login">
												<FontAwesomeIcon icon={faUser} />
											</DropdownToggle>
											<DropdownMenu right>
												<DropdownItem className="login">
													<FontAwesomeIcon icon={faUser} /> {username}
												</DropdownItem>
												<DropdownItem divider />
												<DropdownItem className="login" href="/news/bookmark/">
													<FontAwesomeIcon icon={faBookmark} /> My Bookmarks
												</DropdownItem>
												<DropdownItem divider />
												<DropdownItem className="login" href="/user/profile/">
													<FontAwesomeIcon icon={faUser} /> My Profile
												</DropdownItem>
												<DropdownItem divider />
												<DropdownItem className="login" href="/user/change-password/">
													<FontAwesomeIcon icon={faLock} /> Change Password
												</DropdownItem>
												<DropdownItem divider />
												<DropdownItem onClick={this.handleLogout} className="login">
													<FontAwesomeIcon icon={faPowerOff} /> Logout
												</DropdownItem>
											</DropdownMenu>
										</UncontrolledDropdown>
									:
										<React.Fragment>
											<NavItem className="list-inline-item">
												<NavLink onClick={this.toggleLogin} className="login"><FontAwesomeIcon icon={faSignInAlt} /></NavLink>
											</NavItem>
										</React.Fragment>
									}
								</React.Fragment>
							:
								<UncontrolledDropdown nav inNavbar className="list-inline-item">
									<DropdownToggle nav caret className="login">
										<FontAwesomeIcon icon={faUser} />
									</DropdownToggle>
									<DropdownMenu right style={{'left':'unset', 'right':'0'}}>
										<DropdownItem className="login">{username}</DropdownItem>
										<DropdownItem divider />
										<DropdownItem className="login" href="/change-password/">Change Password</DropdownItem>
										<DropdownItem divider />
										<DropdownItem href="/logout/" className="login">Logout</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
							}
						</Nav>
						<Collapse isOpen={this.state.isOpen} navbar>
							<div className="m-auto col-lg-6">
								<Nav className="ml-auto" navbar id="menu">
									<InputGroup className={`search-box ${domain === "dashboard" ? 'd-none' : ''} `}>
										<AsyncTypeahead
											options={options}
											onBlur={this.handleChange}
											placeholder="Search.."
											id="search-text"
											onSearch={this.handleSearch}
											onKeyDown={this.handleKeyPress}
											isLoading={false}
											emptyLabel=""
											defaultInputValue={this.state.query}
											inputProps={{'id':'search-text'}}
											ref={(ref) => this._typeahead = ref}
										/>
										<InputGroupAddon addonType="append" onClick={this.handleSearchClick}>
											<span className="input-group-text">
												<FontAwesomeIcon icon={faSearch} />
											</span>
										</InputGroupAddon>
									</InputGroup>
									{domain === "domain=newscout" || domain === undefined ?
										<React.Fragment>
											<NavItem className="d-block d-md-none">
												<NavLink href="/news/trending/">
												<img src={`${this.state.isChecked ? "/static/icons/trending_news-white.png" : "/static/icons/trending_news.png" }`} alt="Trending" className="menu-icons"/>&nbsp;
												Trending
												</NavLink>
											</NavItem>
										</React.Fragment>
									: ""
									}
									{menu}
									{domain === "domain=newscout" || domain === undefined ?
										<NavItem className="d-block d-md-none">
											<NavLink href="/news/rss/?domain=newscout">
												<img src={`${this.state.isChecked ? "/static/icons/rss-white.png" : "/static/icons/rss.png" }`} alt="rss" className="menu-icons"/>&nbsp;
												RSS
											</NavLink>
										</NavItem>
									: ""
									}
								</Nav>
							</div>

							<Nav className="ml-auto" navbar>
								<NavItem className="d-none d-sm-block">
									{this.state.isChecked ?
										<FontAwesomeIcon icon={faMoon} style={{fontSize:'16px', verticalAlign:'text-top'}}/>
									:
										<FontAwesomeIcon icon={faSun} style={{fontSize:'16px', verticalAlign:'text-top'}}/>
									}
									<label className="switch" id="TooltipExample">
										<input type="checkbox" onChange={this.toggleSwitch} checked={this.state.isChecked} className={`${this.state.isChecked ? 'checked-switch' : ''}`} />
										<span className="slider round"></span>
									</label>
									<Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="TooltipExample" toggle={this.tooltipToggle}>
										{this.state.isChecked ? 'Switch to day mode' : 'Switch to night mode'}
									</Tooltip>
								</NavItem>
								{domain === "domain=newscout" || domain === undefined ?
									<React.Fragment>
										{is_loggedin ?
											<UncontrolledDropdown nav inNavbar className="d-none d-sm-block">
												<DropdownToggle nav caret className="login">
													{username}
												</DropdownToggle>
												<DropdownMenu right>
													<DropdownItem className="login" href="/news/bookmark/">
														<FontAwesomeIcon icon={faBookmark} /> My Bookmarks
													</DropdownItem>
													<DropdownItem divider />
													<DropdownItem className="login" href="/user/profile/">
														<FontAwesomeIcon icon={faUser} /> My Profile
													</DropdownItem>
													<DropdownItem divider />
													<DropdownItem className="login" href="/user/change-password/">
														<FontAwesomeIcon icon={faLock} /> Change Password
													</DropdownItem>
													<DropdownItem divider />
													<DropdownItem onClick={this.handleLogout} className="login"> <FontAwesomeIcon icon={faPowerOff} /> Logout</DropdownItem>
												</DropdownMenu>
											</UncontrolledDropdown>
										:
											<React.Fragment>
												<NavItem className="d-none d-sm-block">
													<NavLink onClick={this.toggleLogin} className="login"><FontAwesomeIcon icon={faSignInAlt} /> Login</NavLink>
												</NavItem>
											</React.Fragment>
										}
									</React.Fragment>
								:
									<UncontrolledDropdown nav inNavbar className="d-none d-sm-block">
										<DropdownToggle nav caret className="login">
											{username}
										</DropdownToggle>
										<DropdownMenu right>
											<DropdownItem className="login" href="/change-password/">Change Password</DropdownItem>
											<DropdownItem divider />
											<DropdownItem href="/logout/" className="login">Logout</DropdownItem>
										</DropdownMenu>
									</UncontrolledDropdown>
								}
							</Nav>
						</Collapse>
					</Navbar>
					{this.state.isNavbarFilter && domain !== "dashboard" ?
						<Navbar className="fixed-top navbar-filter d-block d-sm-none" expand="md">
							<div className="inner">
								<div className="filter-section">
									<div className="row">
										<div className="col-6">
											<Dropdown isOpen={dropdownOpen} toggle={this.toggleDropdown} className="py-1">
												<DropdownToggle caret className="btn-sm btn-block related-queries-btn">Related Queries</DropdownToggle>
												<DropdownMenu>
													<DropdownItem tag="a" href="http://newscout.in/news/search/?q=Ambani">Ambani</DropdownItem>
													<DropdownItem tag="a" href="http://newscout.in/news/search/?q=Money">Money</DropdownItem>
													<DropdownItem tag="a" href="http://newscout.in/news/search/?q=PM">PM</DropdownItem>
													<DropdownItem tag="a" href="http://newscout.in/news/search/?q=Corona">Corona</DropdownItem>
												</DropdownMenu>
											</Dropdown>
										</div>
										<div className="col-6">
											<div className="filter text-center py-1" style={{borderLeft: "1px solid #ddd"}} onClick={this.toggleFilter}>
												<FontAwesomeIcon icon={faFilter} /> Filter
											</div>
										</div>
									</div>
								</div>
							</div>
						</Navbar>
					: ""
					}
					<KeyboardEventHandler handleKeys={['shift']} onKeyEvent={this.handleAutoFocus} />
				</div>
			</React.Fragment>
		)
	}
}