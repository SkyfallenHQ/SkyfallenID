import React from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

class AccountsPage extends React.Component {

    state = {
        accounts: []
    }

    componentDidMount(){
        let component = this
        const cookies = new Cookies();
        console.log(cookies.get("SkyfallenIDSession"))

        fetch(process.env.REACT_APP_BACKEND_URL+"/accounts/list", {
            method: "GET",
            cache: "no-cache",
            credentials: "same-origin",
            headers: new Headers({
                "X-Bearer": cookies.get("SkyfallenIDSession").Token
            })
        }).then(async function(resp){
            resp = await resp.json()
            var table = []
            if(resp.result == null){
                return
            }
            resp.result.forEach(row => {
                table.push(
                    <tr>
                        <td className="py-4 border-2 border-gray-400 text-center">{row.name}</td>
                        <td className="py-4 border-2 border-gray-400 text-center">{row.username}</td>
                        <td className="py-4 border-2 border-gray-400 text-center">{row.email}</td>
                        <td className="py-4 border-2 border-gray-400 text-center"><Link to={`/dashboard/accounts/edit/${row.username}`} className="hover:bg-gray-50 p-2 rounded-xl">&middot; &middot; &middot;</Link></td>
                    </tr>
                )
            });
            component.setState({accounts: table})
        })
    }

    render() {

        return (
            <div>
                <div className="w-3/4 m-auto mt-16 bg-gray-100 rounded-lg p-5">
                    <p className="text-3xl text-gray-600 pt-4 pl-2">Accounts</p>
                    <table className="w-full mt-4 border-2 border-gray-400 rounded-lg">
                        <thead className="bg-gray-200">
                            <th className="py-4 border-2 border-gray-400">Name</th>
                            <th className="py-4 border-2 border-gray-400">Username</th>
                            <th className="py-4 border-2 border-gray-400">Email</th>
                            <th className="py-4 border-2 border-gray-400">Actions</th>
                        </thead>
                        <tbody>
                            {this.state.accounts}
                        </tbody>
                    </table>
                </div>
                <p className="right-8 bottom-8 absolute text-gray-400">&copy; 2016-2021 - Skyfallen and its afilliates. All rights reserved.</p>
            </div>
        );
    }
}

export default AccountsPage;