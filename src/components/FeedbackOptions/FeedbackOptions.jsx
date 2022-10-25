import PropTypes from 'prop-types'
import { FeedbackBtn } from "./FeedbackOptions.styled";


export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => (
        <FeedbackBtn
          type='button'
          key={option}
          onClick={onLeaveFeedback}>{option}</FeedbackBtn>
      ))}
    </>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired,).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}