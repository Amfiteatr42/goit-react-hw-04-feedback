import { Component } from 'react'
import { Section } from './Section/Section'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification'


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  addFeedback = (e) => {
    const targetBtnValue = e.target.textContent; 
    this.setState((prevState) => {
      return {
        [targetBtnValue]: prevState[targetBtnValue] + 1
      }
    })
  }
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad
  }

  countpositiveFeedback = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100)
  }

  render() {
    const { good, neutral, bad } = this.state

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback}></FeedbackOptions>
        </Section>
      
        <Section title="Statistics">
          {this.countTotalFeedback() ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countpositiveFeedback()}>
          </Statistics>
            : <Notification message="There is no feedback"></Notification>} 
        </Section>
      </>
    )
  }
}

export default App
