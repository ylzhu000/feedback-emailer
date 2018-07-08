import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payment';

class Header extends Component {

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google">Login with Google</a></li>
        );
      default:
        console.log(this.props.auth);
        return [
          <li key="01"><Payments /></li>,
          <li key="02" style={{margin: "0 12px"}}>Credits: {this.props.auth.credits}</li>,
          <li key="03"><a href="/api/logout">Log out</a></li>
        ];
    }
  }

  render() {
    return(
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth ? '/surveys' : '/' } className="left brand-logo">Emailer</Link>
          <ul className="right">
            { this.renderContent() }
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}


export default connect(mapStateToProps)(Header);
