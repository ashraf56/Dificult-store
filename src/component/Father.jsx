import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

const Father = () => {
    return (
        <div>
            this is main
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Father;