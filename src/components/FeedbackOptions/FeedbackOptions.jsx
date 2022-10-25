import PropTypes from 'prop-types'


export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      {options.map(option => <button type='button' key={option} onClick={onLeaveFeedback}>{option}</button>)}
    </>
  )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired,).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}