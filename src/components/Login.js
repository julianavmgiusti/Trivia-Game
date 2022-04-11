import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchTokenThunk, login } from '../redux/actions';
import trivia from '../trivia.png';

class Login extends Component {
  state = {
    name: '',
    email: '',
    isDisabled: true,
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    }, this.validate);
  }

  validate = () => {
    const { name, email } = this.state;
    this.setState({ isDisabled: !(name.length > 0 && email.length > 0) });
  }

  render() {
    const { name, email, isDisabled } = this.state;
    const { getToken, history: { push }, user } = this.props;
    return (

      <div className="Login_Container">
        <div className="Form_Container">
          <img src={ trivia } alt="logo" className="logoLogin" />
          <label htmlFor="nameId">
            <input
              className="nameId"
              type="text"
              data-testid="input-player-name"
              value={ name }
              name="name"
              onChange={ this.handleChange }
              placeholder="Nome"
            />
          </label>
          <label htmlFor="emailId">
            <input
              id="emailId"
              className="emailId"
              type="email"
              data-testid="input-gravatar-email"
              value={ email }
              name="email"
              onChange={ this.handleChange }
              placeholder="Email"
            />
          </label>
          <button
            className="buttonLogin"
            type="button"
            data-testid="btn-play"
            disabled={ isDisabled }
            onClick={ () => {
              getToken();
              user(name, email);
              push('/play');
            } }
          >
            Play
          </button>
          <Link to="/settings">
            <button
              className="buttonConfig"
              data-testid="btn-settings"
              type="button"
            >
              Configuração
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  getToken: PropTypes.func,
  history: PropTypes.shape,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(fetchTokenThunk()),
  user: (name, email) => dispatch(login(name, email)),
});

export default connect(null, mapDispatchToProps)(Login);
