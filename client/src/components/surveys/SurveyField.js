// SurveyField contains logic to render a single label and text input

import React from 'react';

const setErrorIcon = (error) => {
	if (error) {
		return (
			<i className="material-icons">warning</i>
		)
	} else {
		return error
	}
}

export default ({ input, label, meta: { error, touched } }) => {
	return (
		<div>
			<label>{label}</label>
			<input {...input} style={{ marginBottom: '5px'}} />
			<div className="red-text" style={{ marginBottom: '20px' }}>
				{touched && (error && <div><i className="tiny material-icons">warning</i>{error}</div>)}
			</div>
		</div>
	)
}