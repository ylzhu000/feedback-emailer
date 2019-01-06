import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

const thumbsStyle = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "flexStart"
}

const thumbsUpDownStyle = {
	display: "flex",
	flexDirection: "row",
	justifyContent: "spaceBetween",
	alignItems: "center",
}

class SurveyList extends Component {
    componentDidMount() {
		this.props.fetchSurveys();
    }

    renderSurveys() {
    	return this.props.surveys.reverse().map(survey => {
    		return (
				<div className="card blue-grey darken-1" key={survey.id}>
					<div className="card-content white-text">
						<span className="card-title">{survey.title}</span>
						<p>
							{survey.body}
						</p>
						<p className="right">
							Sent On: {new Date(survey.dateSent).toLocaleDateString()}
						</p>
					</div>
					<div className="card-action" style={thumbsStyle}>
						<a style={thumbsUpDownStyle}><i className="material-icons" style={{paddingRight: "5px"}}>thumb_up</i>{survey.yes}</a>
						<a style={thumbsUpDownStyle}><i className="material-icons" style={{paddingRight: "5px"}}>thumb_down</i>{survey.no}</a>
					</div>
				</div>
    		)
    	})
    }

	render() {
		return (
			<div>{this.renderSurveys()}</div>
		);
	}
}

function mapStateToProps(state) {
	return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);