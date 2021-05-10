import PropTypes from 'prop-types';

function Button(props){
    return (
        <button type="button" className="bg-blue-500 w-full h-12 rounded-lg text-white focus:outline-none hover:bg-blue-600" onClick={ props.Action }>{ props.Text }</button>
    )
}

Button.propTypes = {
    Text: PropTypes.string.isRequired,
    Action: PropTypes.func.isRequired
}

export default Button;