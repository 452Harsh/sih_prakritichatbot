import React from 'react'

const Question = (props) => {

  const options = props.options;

  const handler = (event) => {
    const next = props.next;
    props.actionProvider.optionMessage(event.target.value);
    props.actionProvider[next]();
  };

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} value={option.option} onClick={handler} class="m-1 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
      {option.option}
    </button>
  ));
  return (
    <div className="flex flex-wrap">{buttonsMarkup}</div>
  )
}

export default Question