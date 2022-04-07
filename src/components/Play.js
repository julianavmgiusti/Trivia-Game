import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from './Header';
import Game from './Game';
import { requestApi, fetchTokenThunk } from '../redux/actions';

class Play extends Component {
  render() {
    const { resultsApi: { results } } = this.props;

    return (
      <section>
        { results && (
          <div>
            <Header />
            <Game results={ results } />
          </div>)}
      </section>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  gameApi: (token) => dispatch(requestApi(token)),
  fetchToken: () => dispatch(fetchTokenThunk()),
});

const mapStateToProps = (state) => ({
  token: state.token,
  resultsApi: state.questions.question,
});

Play.propTypes = {
  gameApi: propTypes.func,
  token: propTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Play);
