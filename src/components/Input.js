import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {

    handleChange(event) {
      this.props.ChangeHandler(event.target.value)
    }
  
    render() {
      return (
        <input onChange={this.handleChange.bind(this)} className="h-10 focus:outline-none focus:border-blue-500 w-64 border-2 p-2 text-md border-gray-300 rounded-lg" type={ this.props.Type } placeholder={ this.props.Placeholder } />
      );
    }
}

Input.propTypes = {

  Type: PropTypes.string.isRequired,
  Placeholder: PropTypes.string.isRequired,
  ChangeHandler: PropTypes.func.isRequired,

}

export default Input;