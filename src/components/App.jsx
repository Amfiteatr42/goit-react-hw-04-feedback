import { Section } from './Section/Section'
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions'
import { Statistics } from './Statistics/Statistics'
import { Notification } from './Notification/Notification'
import { useState } from 'react'


function App() {
  const [ good, setGood] = useState(0)
  const [ neutral, setNeutral] = useState(0)
  const [ bad, setBad] = useState(0)
  
  const feedback = {good, neutral, bad}

  function addFeedback(e) {
    const targetBtnValue = e.target.textContent; 

    switch (targetBtnValue) {
      case 'good':
        setGood(good + 1)
        break;
      case 'neutral':
        setNeutral(neutral + 1)
        break;
      case 'bad':
        setBad(bad + 1)
        break;
      
      default:
        break;
    }
  }

  function countTotalFeedback() {
    return good + bad + neutral
  }

   function countpositiveFeedback() {
    return Math.round(good / countTotalFeedback() * 100)
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(feedback)} onLeaveFeedback={addFeedback}></FeedbackOptions>
      </Section>
    
      <Section title="Statistics">
        {countTotalFeedback()
          ? <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countpositiveFeedback()}
              >
            </Statistics>
          : <Notification message="There is no feedback"></Notification>} 
      </Section>
    </>
  )
}

export default App
