// SurveyFrom shows a form for a user to add inputs
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';


const FIELDS = [
	{ label: 'Survey Title', name: 'title' },
	{ label: 'Subject Title', name: 'subject' },
	{ label: 'Email Body', name: 'body' },
	{ label: 'Recipient List', name: 'recipients' }
]


class SurveyForm extends Component {
	renderFields() {
		return _.map(FIELDS, ({label, name}) => {
			return ( 
				<Field component={SurveyField} type="text" label={label} name={name} key={name}/>
			)
		})
			
		
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(values => console.log(values))}>
					{this.renderFields()}
					<Link to="/surveys" className="red btn">
						Cancel
						<i className="material-icons right">cancel</i>
					</Link>
					<button type="submit" className="btn waves-effect right waves-light">
						Next
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

const validate = (values) => {
	const errors = {};

	if (!values.title) {
		errors.title = 'You must provide a title';
	}

	return errors;
}

export default reduxForm({
	validate: validate,
	form: 'surveyForm'
})(SurveyForm);