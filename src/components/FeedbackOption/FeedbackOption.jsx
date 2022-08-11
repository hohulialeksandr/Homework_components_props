import React from 'react';

const FeedbackOption = ({option, onLeaveFeedback}) => {

    return (
        <div>
            {
                option.map((e, id) => <button key={id} onClick={() => onLeaveFeedback(e)}>{e}</button>)
            }
        </div>
    )
}

export default FeedbackOption