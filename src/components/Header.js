import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <section>
        <img src="" alt="user-gravatar" data-testid="header-profile-picture" />
        <p data-testid="header-player-name">{}</p>
        <p data-testid="header-score">0</p>
      </section>
    );
  }
}
