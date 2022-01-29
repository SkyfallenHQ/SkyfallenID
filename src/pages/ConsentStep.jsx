import React from 'react';
import Button from '../components/Button';

class ConsentStep extends React.Component {
    render() {
        return (
            <>
                <div className="w-96 m-auto mt-20 bg-gray-100 rounded-xl pt-10 p-4 text-center justify">
                    <h1 className="text-xl text-center font-semibold mb-16">Authorize [APP NAME] to sign in with your { process.env.REACT_APP_INSTANCE_NAME } account.</h1>
                    <p>This step is necessary to make sure you are logging in knowingly. This will only let [APP NAME] to fetch your read-only account information like your name, username, email and profile picture. Your passwords or any sensitive information is never shared on this transaction.</p>
                    <div className="mt-4">
                        <Button Text="Approve" className="bg-green-400" />
                    </div>
                    <div className="mt-4">
                        <Button Text="Abort" className="bg-red-600" />
                    </div>
                </div>

                <p className="absolute text-gray-200 bottom-2 right-2 text-small">You are securely authorizing with the CAS session server on { process.env.REACT_APP_BACKEND_URL }</p>
            </>
        );
    }
}

export default ConsentStep;