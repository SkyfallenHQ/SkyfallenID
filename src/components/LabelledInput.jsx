import React from 'react';
import PropTypes from 'prop-types';

class LabelledInput extends React.Component {

    handleChange(event) {
      this.props.ChangeHandler(event.target.value)
    }
  
    render() {
        return (
            <div className="p-2">
                <label className="text-md block pl-2">{ this.props.Placeholder }:</label>
                <input onChange={this.handleChange.bind(this)} className="mt-2 h-10 focus:outline-none focus:border-blue-500 w-full border-2 p-2 text-md border-gray-300 rounded-lg" type={ this.props.Type } placeholder={ this.props.Placeholder } />
            </div>
        );
    }
}

LabelledInput.propTypes = {

  Type: PropTypes.string.isRequired,
  Placeholder: PropTypes.string.isRequired,
  ChangeHandler: PropTypes.func.isRequired,

}

export default LabelledInput;