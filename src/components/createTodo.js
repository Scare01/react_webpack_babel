import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import actions from '../redux/user/actions';


const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: text => dispatch(actions.addTodo(text))
  };
};


class CreateFormClass extends React.Component {
  constructor() {
    super();
    this.state = {
      text: ''
    };
  }


  submitForm() {
    this.props.addTodo(this.state.text);
    this.setState({ text: '' });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.submitForm.bind(this)}>
        <input onChange={this.handleChange.bind(this)} />
        <button type="submit">
          Add
        </button>
      </form>
    );
  }
}
CreateFormClass.propTypes = { addTodo: PropTypes.func.isRequired };


const CreateForm = connect(null, mapDispatchToProps)(CreateFormClass);

export default CreateForm;
