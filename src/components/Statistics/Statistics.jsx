import PropTypes from 'prop-types'


export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <div><span>Good: {good}</span></div>
      <div><span>Neutral: {neutral}</span></div>
      <div><span>Bad: {bad}</span></div>
      <div><span>Total: {total}</span></div>
      <div><span>Positive: {positivePercentage}%</span></div>
    </>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
}