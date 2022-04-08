import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Ranking extends Component {
  state = {
    rank: [],
  }

  componentDidMount() {
    this.ratingPlayers();
  }

  goHome = () => {
    const { history } = this.props;
    history.push('/');
  }

  ratingPlayers = () => {
    const players = JSON.parse(localStorage.getItem('players'));
    const rankedPlayers = players.sort((a, b) => b.assertions - a.assertions);
    console.log(rankedPlayers);
    this.setState({
      rank: rankedPlayers,
    });
  }

  render() {
    const { rank } = this.state;
    return (
      <section>
        <div data-testid="ranking-title">Ranking</div>
        <button
          type="button"
          data-testid="btn-go-home"
          onClick={ this.goHome }
        >
          Tela Inicial
        </button>
        <table>
          <tbody>
            { rank.map((player, index) => (
              <tr key={ index }>
                <td>
                  <img
                    src={ player.img }
                    alt={ player.name }
                  />
                </td>
                <td data-testid={ `player-name-${index}` }>
                  {player.name}
                </td>
                <td data-testid={ `player-score-${index}` }>{player.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  playersScore: state.player,
  hash: state.questions.hash,
});

Ranking.propTypes = {
  history: PropTypes.object }.isRequired;

export default connect(mapStateToProps)(Ranking);
