import React, { Component } from 'react';
import { connect } from 'react-redux';
import md5 from 'crypto-js/md5';
import propTypes from 'prop-types';
import { getHash } from '../redux/actions/index';

class Header extends Component {
  componentDidMount() {
    this.cryptoEmail();
  }

cryptoEmail = () => {
  const { user: { email }, fetchGravatar } = this.props;
  const crypto = md5(email).toString();
  fetchGravatar(crypto);
}

render() {
  const { user: { name }, hash } = this.props;
  console.log(md5('email@pessoa.com').toString());
  return (
    <section>
      <img src={ `https://www.gravatar.com/avatar/${hash}` } alt="user-gravatar" data-testid="header-profile-picture" />
      <p data-testid="header-player-name">{name}</p>
      <p data-testid="header-score">0</p>
    </section>
  );
}
}

const mapDispatchToProps = (dispatch) => ({
  fetchGravatar: (code) => dispatch(getHash(code)),
});

const mapStateToProps = (state) => ({
  user: state.login,
  hash: state.questions.hash,
});

Header.propTypes = {
  user: propTypes.shape({
    name: propTypes.string,
  }),
  hash: propTypes.string,
  fetchGravatar: propTypes.func,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
