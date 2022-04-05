import React, { Component } from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Header from './Header';
import { requestApi } from '../redux/actions';

const numThree = 3;
class Play extends Component {
  state = {
    count: 0,
  }

  componentDidMount() {
    this.verify();
  }

  verify = () => {
    const { token, gameApi } = this.props;
    gameApi(token);
    const { resultsApi } = this.props;
    if (resultsApi.response_code === numThree) gameApi('');
  }

  // https://www.ngeeks.com/javascript-avanzado-desordenar-un-array/

  handleAlternatives = () => {
    const { results } = this.props;
    const meio = 0.5;
    const array = [...results.incorrect_answer, results.correct_answer];
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
    return (
      <div>
        <Header />

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
            { this.handleAlternatives() }
          </div>
        </section>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  gameApi: (token) => dispatch(requestApi(token)),
});

const mapStateToProps = (state) => ({
  token: state.myReduce.token,
  resultsApi: state.myReduce.results,
});

Play.propTypes = {
  gameApi: propTypes.func,
  token: propTypes.string,
}.isRequired;

export default connect(mapStateToProps, mapDispatchToProps)(Play);
