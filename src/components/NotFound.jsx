import React from 'react';

function NotFound (props){
    return (
        <div className="rounded-xl w-full md:w-1/2 lg:w-1/3 bg-gray-100 p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">This page was not found.</p>
            <p className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-red-200 font-extrabold text-6xl mt-10">404</p>
            <p className="text-gray-300 text-md mt-10"><span className="text-gray-500">Skyfallen </span>ID</p>
        </div>
    )
}

export default NotFound;