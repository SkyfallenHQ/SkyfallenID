import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MenuButton(props){
    return (
        <Link to={props.to} className="bg-gray-300 w-full text-center py-3 text-gray-600 focus:outline-none hover:bg-gray-400 block">{ props.Text }</Link>
    )
}

MenuButton.propTypes = {
    Text: PropTypes.string.isRequired,
    To: PropTypes.string.isRequired
}

export default MenuButton;