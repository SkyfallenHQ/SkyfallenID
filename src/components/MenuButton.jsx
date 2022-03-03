import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MenuButton(props){
    return (
        <Link to={props.to} className="bg-gray-300 w-full text-center py-3 text-gray-600 focus:outline-none hover:bg-gray-400 flex flex-row">{props.Icon ? <props.Icon className="w-6 h-6 p-1 rounded-2xl bg-blue-600 text-white my-auto ml-auto mr-1" /> : <></>}<span className="my-auto mr-auto">{ props.Text }</span></Link>
    )
}

MenuButton.propTypes = {
    Text: PropTypes.string.isRequired,
    To: PropTypes.string.isRequired,
    Icon: PropTypes.func,
}

export default MenuButton;