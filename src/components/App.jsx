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
    const targetBtnValue = e.target.textContent.toLowerCase();  // вероятно, это плохая практика надеятся на название кнопок, но не зря же они так названы, ну)
    this.setState((prevState) => {
      return {
        [targetBtnValue]: prevState[targetBtnValue] + 1
      }
    })
  }

  totalFeedback = 0;
  positiveFeedback = 0;
  
  countTotalFeedback = () => {
    return this.totalFeedback = this.state.good + this.state.neutral + this.state.bad
  }

  countpositiveFeedback = () => {
    return this.positiveFeedback = Math.round(this.state.good / this.totalFeedback * 100)
  }

  render() {
    const { good, neutral, bad } = this.state

    this.countTotalFeedback()
    if (this.totalFeedback) this.countpositiveFeedback()

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback}></FeedbackOptions>
        </Section>
      
        <Section title="Statistics">
          {this.totalFeedback ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.totalFeedback}
            positivePercentage={this.positiveFeedback}>
          </Statistics>
            : <Notification message="There is no feedback"></Notification>} 
        </Section>
      </>
    )
  }
}

export default App
