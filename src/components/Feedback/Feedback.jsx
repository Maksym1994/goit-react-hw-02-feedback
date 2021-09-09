import React, { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOption';
import Statistic from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  totalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return Math.round((good * 100) / this.totalFeedback());
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement} />
        {this.totalFeedback() > 0 ? (
          <Section title="Statistics">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.totalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

export default Feedback;
