import React from 'react';
import Statistics from './components/Statistics/Statistics';
import './App.css';
import FeedbackOption from './components/FeedbackOption/FeedbackOption';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrement = (e) => {
    if (e === 'good') {
      this.setState(state => ({ good: state.good + 1 }))
    } else if (e === 'neutral') {
      this.setState(state => ({ neutral: state.neutral + 1 }))
    } else {
      this.setState(state => ({ bad: state.bad + 1 }))
    }
  }









  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good + this.state.neutral) / this.countTotalFeedback() * 100)
  }

  render() {
    const options = Object.keys(this.state)
    return (
      <div>
        <section>
          <h2>Please leave feedback</h2>
        </section>
        <section>
          <FeedbackOption
            option={options}
            onLeaveFeedback={this.handleIncrement}
          />
        </section>
        <section>
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </section>
      </div>
    )
  }
}

export default App;
