import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import MainDash from '@src/components/MainDash/MainDash';

const Dashboard = () => {
    return (
        <div className={'App'}>
            <div className="AppGlass">
                <Sidebar/>
                <MainDash/>
                <div></div>
            </div>
        </div>
    );
};

export default Dashboard;
