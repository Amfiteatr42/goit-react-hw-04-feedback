import PropTypes from 'prop-types'
import { StatItem, StatResult } from './Statistics.styled'


export function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <StatItem>Good:<StatResult> {good}</StatResult></StatItem>
      <StatItem>Neutral:<StatResult> {neutral}</StatResult></StatItem>
      <StatItem>Bad:<StatResult> {bad}</StatResult></StatItem>
      <StatItem>Total:<StatResult> {total}</StatResult></StatItem>
      <StatItem>Positive:<StatResult> {positivePercentage}%</StatResult></StatItem>
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