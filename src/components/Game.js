import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Game extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      isDisabled: true,
      timer: 30,
      rightAnswer: '',
      answers: [],
    };
  }

  componentDidMount = () => {
    const { count } = this.state;
    this.handleInterval();
    this.handleAlternatives(count);
    // const buttons = this.handleAlternatives(count);
    // console.log(buttons);
    // this.setState({ button: buttons }, () => {
    //   const { button } = this.state;
    //   console.log(button);
    // });
  }

  handleClick = () => {
    const correct = document.querySelector('.correct');
    const wrong = document.getElementsByClassName('wrong');
    correct.style.border = '3px solid rgb(6, 240, 15)';
    for (let i = 0; i < wrong.length; i += 1) {
      wrong[i].style.border = '3px solid rgb(255, 0, 0) ';
    }
  }

  handleInterval = () => {
    const fiveSeconds = 5000;
    const thirtySeconds = 30000;
    const one = 1000;
    setTimeout(() => {
      this.setState({ isDisabled: false });
    }, fiveSeconds);
    setTimeout(() => {
      this.setState({ isDisabled: true });
      this.handleClick();
    }, thirtySeconds);

    setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }));
    }, one);
  }

  handleAlternatives = (count) => {
    const { results } = this.props;
    console.log(results);
    const { isDisabled } = this.state;
    const meio = 0.5;
    const array = [...results[count].incorrect_answers, results[count].correct_answer];
    const answers = array.sort(() => Math.random() - meio);
    this.setState({
      rightAnswer: results[count].correct_answer,
      answers,
    });
  }

  teste = () => {

  }

  render() {
    const { count, timer, answers, rightAnswer } = this.state;
    // console.log(button);
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
                { answers
                  .map((answer, i) => {
                    if (answer === rightAnswer) {
                      return (
                        <button
                          type="button"
                          data-testid="correct-answer"
                          key={ i }
                          className="correct"
                          onClick={ this.handleClick }
                          disabled={ isDisabled }
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
                        disabled={ isDisabled }
                      >
                        { answer }
                      </button>
                    );
                  }) }
              </div>
            </section>
            <section>
              {timer}
            </section>
          </section>)}
      </div>
    );
  }
}

Game.propTypes = {
  results: propTypes.arrayOf(propTypes.object),
}.isRequired;
