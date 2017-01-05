import { PropTypes } from 'react';
import { connect } from 'react-redux';

import ACTIONS from '../actions/index';
import AddForm from '../components/AddForm';

const mapStateToProps = (state, ownProps) => ({
  label: ownProps.label,
  heading: ownProps.heading
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: (value) => {
    dispatch(ACTIONS[ownProps.action](value));
  }
});

const AddValue = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddForm);

AddValue.propTypes = {
  label: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};

export default AddValue;
