import React, { Component } from 'react';
import styles from './FeedbackSetup.module.css';

export class FeedbackSetup extends Component {
  render() {
    return (
      <div className={styles.btnContainer}>
        {this.props.options.map((option, index) => (
          <button
            key={index}
            onClick={this.props.onLeaveFeedback}
            type="button"
            id={option}
            className="btn main-btn"
          >
            {option}
          </button>
        ))}
      </div>
    );
  }
}