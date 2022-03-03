import React from 'react';
import MenuButton from './MenuButton';
import { AiOutlineUser } from "react-icons/ai";

class MenuBar extends React.Component {



    render() {
        return (
            <div className="h-full w-32 bg-gray-200 hover:w-64 transition-width absolute top-0 left-0">
               <p className="text-center bg-gradient-to-r from-blue-500 to-red-800 p-2 pb-10 pt-10 text-transparent bg-clip-text text-lg font-extrabold">Skyfallen ID</p>
               <MenuButton Text="Accounts" to="/dashboard/accounts" Icon={AiOutlineUser} />
            </div>
        );
    }
}

export default MenuBar;