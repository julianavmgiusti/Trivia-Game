import React, { Component } from 'react';
import Header from '../components/Header';

export default class Feedbacks extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div data-testid="feedback-text">
          Feedbacks
        </div>
      </div>
    );
  }
}
