import React, { PropTypes } from 'react';

let AddForm = ({ heading, label, onSubmit }) => {
  let input

  return (
    <div>
      <h3>{heading}</h3>
      <form onSubmit={e => {
        e.preventDefault();

        const value = parseInt(input.value.trim(), 10);

        if (!value || isNaN(value)) {
          return;
        }

        onSubmit(value);

        input.value = '';
      }} >
        <input type="number" min="0" ref={node => {
          input = node
        }} />
        <button type="submit">
          {label}
        </button>
      </form>
    </div>
  )
}
AddForm.propTypes = {
  label: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
};

export default AddForm;