import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    const correct = document.querySelector('.correct');
    const wrong = document.getElementsByClassName('wrong');
    correct.style.border = '3px solid rgb(6, 240, 15)';
    for (let i = 0; i < wrong.length; i += 1) {
      wrong[i].style.border = '3px solid rgb(255, 0, 0) ';
    }
  }

  handleAlternatives = (count) => {
    const { results } = this.props;
    const meio = 0.5;
    const array = [...results[count].incorrect_answers, results[count].correct_answer];
    return array.map((answer, i) => {
      if (i === array.length - 1) {
        return (
          <button
            type="button"
            data-testid="correct-answer"
            key={ i }
            className="correct"
            onClick={ this.handleClick }
          >
            { answer }
          </button>);
      }
      return (
        <button
          data-testid={ `wrong-answer-${i}` }
          type="button"
          key={ i }
          className="wrong"
          onClick={ this.handleClick }
        >
          { answer }
        </button>
      );
    })
      .sort(() => Math.random() - meio);
  }

  render() {
    const { count } = this.state;
    const { results } = this.props;
    return (
      <div>
        { results && (

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

Game.propTypes = {
  results: propTypes.arrayOf(propTypes.object),
}.isRequired;
