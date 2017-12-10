import React from 'react';
import createClass from 'create-react-class';
import PropTypes from 'prop-types';
import Select from 'react-select';
import fetch from 'isomorphic-fetch';
import axios from 'axios'
import serverPath from '../paths'

const PreviewSearch = createClass({
	displayName: 'YouTube Preview',
	propTypes: {
		label: PropTypes.string,
	},
	getInitialState () {
		return {
			backspaceRemoves: true,
			multi: false,
      createable: false
		};
	},
	onChange (value) {
		this.setState({
			value: value,
		});
	},
	switchToMulti () {
		this.setState({
			multi: true,
			value: [this.state.value],
		});
	},
	switchToSingle () {
		this.setState({
			multi: false,
			value: this.state.value ? this.state.value[0] : null
		});
	},
	getVideos (input) {
		if (!input) {
			return Promise.resolve({ options: [] });
		}

		return fetch(`${serverPath}/preview/search/${input}`)
		.then((response) => {

      return response.json()})
		.then((json) => {
			return { options: json };
		});
	},
	gotoUser (value, event) {
		window.open(value.html_url);
	},
	toggleBackspaceRemoves () {
		this.setState({
			backspaceRemoves: !this.state.backspaceRemoves
		});
	},
	toggleCreatable () {
		this.setState({
			creatable: !this.state.creatable
		});
	},
	render () {
		const AsyncComponent = this.state.creatable
			? Select.AsyncCreatable
			: Select.Async;
    console.log(this.state)
		return (
			<div className="section">
				<AsyncComponent multi={this.state.multi} value={this.state.value} onChange={this.onChange} onValueClick={this.gotoUser} valueKey="title" labelKey="id" placeholder="Type the name of a song, album or artist" loadOptions={this.getVideos} backspaceRemoves={this.state.backspaceRemoves} />
			</div>
		);
	}
});

export default PreviewSearch;
