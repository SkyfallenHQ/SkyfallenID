import React from 'react';
import MenuButton from './MenuButton';

class MenuBar extends React.Component {



    render() {
        return (
            <div className="h-full w-32 bg-gray-200 hover:w-64 transition-width absolute top-0 left-0">
               <p className="text-center text-gray-500 p-2 pb-10 pt-10">Skyfallen ID</p>
               <MenuButton Text="Accounts" to="/dashboard/accounts" />
               <MenuButton Text="Clients" />
               <MenuButton Text="Logs" />
               <MenuButton Text="Options" />
               <MenuButton Text="About" to="/dashboard/about" />
               <p className="absolute bottom-4 left-2 text-small text-gray-300">&copy; 2016-2021 Skyfallen</p>
            </div>
        );
    }
}

export default MenuBar;