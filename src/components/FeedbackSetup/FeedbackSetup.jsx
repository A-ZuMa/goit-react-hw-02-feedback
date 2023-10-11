import React, { Component } from 'react';
import css from './FeedbackSetup.module.css';

export class FeedbackSetup extends Component {
  render() {
    return (
      <div className={css.buttonsContainer}>
        {this.props.options.map((option, index) => (
          <button
            key={index}
            onClick={this.props.onLeaveFeedback}
            type="button"
            id={option}
            className="btn btn-primary"
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}