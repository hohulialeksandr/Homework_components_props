import React from 'react'

const Statistics = ({ good, neutral, bad, total, countPositiveFeedbackPercentage }) => {
  return (
    <div>
      <h2>Statistics:</h2>
      {
        good === 0 && neutral === 0 && bad === 0 && total === 0
          ? 'No feedback given'
          : <section>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {countPositiveFeedbackPercentage}%</p>
          </section>
      }

    </div>
  )
}

export default Statistics