import React from 'react';
import {RouterBrowser as Router ,Switch,Route} from 'react-router-dom';
const Home = () => {
    return ( 
        // <div className="container bg-purple-500  flex justify-center items-center h-screen">
        // </div>
        <div>
            <ul class="flex">
                <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
                </li>
                <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
                </li>
                <li class="mr-6">
                    <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
                </li>
                <li class="mr-6">
                    <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
                </li>
            </ul>
        </div>
        
     );
};
 
export default Home;