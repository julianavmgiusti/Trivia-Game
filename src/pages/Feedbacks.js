import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';

class Feedbacks extends Component {
  playAgain = () => {
    const { history } = this.props;
    history.push('/');
  }

  render() {
    const correctAnswers = 3;
    const { assertions, score } = this.props;
    return (
      <div className="container">
        <div className="container-feedback">
          <Header />
          <div data-testid="feedback-text">
            { assertions < correctAnswers
              ? <p>Could be better...</p> : <h4>Well Done!</h4> }
          </div>
          <div>
            Correct Answers:
            <h3 data-testid="feedback-total-question">{assertions}</h3>
          </div>
          <span>
            Final Score:
            <p data-testid="feedback-total-score">{score}</p>
          </span>
          <button
            className="button"
            type="button"
            data-testid="btn-play-again"
            onClick={ this.playAgain }
          >
            Jogar Novamente
          </button>
        </div>
      </div>
    );
  }
}

Feedbacks.propTypes = {
  score: PropTypes.number,
  history: PropTypes.object }.isRequired;

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.questions.assertions,
});

export default connect(mapStateToProps)(Feedbacks);
