import React from 'react';

class AboutPage extends React.Component {


    render() {
        return (
            <div>
                <p style={{ fontSize: '96px', lineHeight: '0px' }} className="text-gray-600 font-extralight ml-16 mt-16">Skyfallen ID</p>
                <p style={{ fontSize: '72px' }} className="text-gray-800 font-extralight ml-16 mt-4">version 4.0.0 (beta)</p>
                <hr></hr>
                <p style={{ fontSize: '36px' }} className="text-indigo-600 font-extralight ml-16 mt-4">Designed and Developed by Skyfallen.</p>
                <br></br>
                <p style={{ fontSize: '20px' }} className="text-gray-800 font-light ml-16 mt-4">You are currently using the build SFR-XAABB1 (May 14, 2021).</p>
                <p style={{ fontSize: '20px', width: '50rem' }} className="text-red-600 font-light ml-16">Skyfallen software update server could not validate the integrity of this version. This may happen if you are using an internal development sample version (most build numbers that start with XAA are development samples) or your server is not able to connect to Skyfallen servers.</p>
                <p className="right-8 bottom-8 absolute text-gray-400">&copy; 2016-2021 - Skyfallen and its afilliates. All rights reserved.</p>
            </div>
        );
    }
}

export default AboutPage;