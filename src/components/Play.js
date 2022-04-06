import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from './Header';
import { requestApi, fetchTokenThunk } from '../redux/actions';

const numThree = 3;
class Play extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('entrou');
    this.verify();
  }

  verify = () => {
    const { token, gameApi, fetchToken } = this.props;
    console.log(token);
    gameApi(token);
    const { resultsApi } = this.props;
    if (resultsApi.response_code === numThree) {
      fetchToken();
      gameApi(token);
    }
  }

  // https://www.ngeeks.com/javascript-avanzado-desordenar-un-array/

  handleAlternatives = (count) => {
    const { resultsApi: { results } } = this.props;
    const meio = 0.5;
    const array = [...results[count].incorrect_answers, results[count].correct_answer];
    return array.map((answer, i) => {
      if (i === array.length - 1) {
        return (
          <button
            type="button"
            data-testid="correct-answer"
            key={ i }
          >
            { answer }
          </button>);
      }
      return (
        <button data-testid={ `incorrect-answer-${i}` } type="button" key={ i }>
          { answer }
        </button>
      );
    })
      .sort(() => Math.random() - meio);
  }

  render() {
    const { count } = this.state;
    const { resultsApi: { results } } = this.props;
    console.log(results);
    return (
      <div>
        <Header />
        { results !== undefined
        && (
          <section>
            <h1 data-testid="question-category">
              {
                results[count].category
              }

            </h1>
            <p data-testid="question-text">
              {
                results[count].question
              }

            </p>
            <section>
              <div data-testid="answer-options">
                { this.handleAlternatives(count) }
              </div>
            </section>
          </section>)}
      </div>
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
