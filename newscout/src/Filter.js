import React from 'react';
import Fade from 'react-reveal/Fade';
import { Collapse, Label } from 'reactstrap';

var query_array = [];

export class Filter extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			isOpen: false,
			selectedtem: [],
		};
	}

	togglecol = () => {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	toggleFilter = (data) => {
		this.props.toggleFilter(data)
	}

	handleChange = (e) => {
		var cat_type = e.target.dataset.cat.toLowerCase();
		var cat_val = e.target.value;
		var cat_checked = e.target.checked;
		if(cat_type === "hash tags"){
			cat_type = "tag";
		}
		var query = cat_type+"="+cat_val;
		if(cat_checked === true){
			query_array.push(cat_val);
		} else {
			query_array.splice(query_array.indexOf(cat_val), 1);
		}
		this.setState({
			selectedtem: query_array
		})
		this.props.query(query, cat_checked)
	}

	render(){
		var { selectedtem } = this.state;
		var collapse = this.props.filters.map((item, index) => {
			return (
				<React.Fragment key={index}>
					<div className="fltr-section">
						<div onClick={this.togglecol}>{item.catitems}</div>
						<ul className="list-unstyled">
							{item.subitem.map((subitem, subindex) => {
								return (
									<li key={subindex}>
										<Label check>
											<React.Fragment>
												<input type="checkbox" value={subitem.label} onClick={this.handleChange} data-cat={item.catitems} checked={selectedtem.indexOf(subitem.label) > -1 ? true : false} /> {subitem.label}
											</React.Fragment>
										</Label>
									</li>
								)
							})}
						</ul>
					</div>
				</React.Fragment>
			)
		})

		return(
			<Fade right when={this.props.isFilterOpen} duration={500}>
				<div className={`filter-container ${this.props.isFilterOpen === false ? 'd-none' : ''}`}>
					<div className="filter-box">
						<div className="clearfix">
							<div className="float-left">
								<h6>Filters</h6>
							</div>
							<div className="float-right">
								<div className="closefilter" onClick={this.toggleFilter}>X</div>
							</div>
						</div>
						<hr/>
						<div className="row">
							<div className="col-lg-12">{collapse}</div>
						</div>
					</div>
				</div>
			</Fade>
		)
	}
}