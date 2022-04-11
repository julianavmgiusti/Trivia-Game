import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Header from '../components/Header';
import './feedback.css';

class Feedbacks extends Component {
  componentDidMount() {
    this.setItems();
  }

  playAgain = () => {
    const { history } = this.props;
    history.push('/');
  }

  showRanking = () => {
    const { history } = this.props;
    history.push('/ranking');
  }

  setItems = () => {
    const { name, hash, score, assertions } = this.props;
    const src = `https://www.gravatar.com/avatar/${hash}`;
    let players = [];
    if (JSON.parse(localStorage.getItem('players'))) {
      players = JSON.parse(localStorage.getItem('players'));
    }
    players.push({ score, assertions, name, img: src });
    const stringArray = JSON.stringify(players);
    localStorage.setItem('players', stringArray);
  }

  render() {
    const correctAnswers = 3;
    const { assertions, score } = this.props;
    console.log(assertions, typeof (assertions));
    return (
      <section>
        {assertions !== undefined && (
          <div className="container">
            <Header />
            <div className="container-feedback gameSheet">
              <div className="resultContainer">
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
                  cclassName="button buttonFeed"
                  type="button"
                  data-testid="btn-play-again"
                  onClick={ this.playAgain }
                >
                  Jogar Novamente
                </button>
                <button
                  className="button buttonFeed"
                  type="button"
                  data-testid="btn-ranking"
                  onClick={ this.showRanking }
                >
                  Ranking
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  }
}

Feedbacks.propTypes = {
  score: PropTypes.number,
  history: PropTypes.object }.isRequired;

const mapStateToProps = (state) => ({
  score: state.player.score,
  assertions: state.player.assertions,
  name: state.player.name,
  hash: state.questions.hash,
});

export default connect(mapStateToProps)(Feedbacks);
