// Dashboard.js
import React, { useState } from 'react';
import Header from './header';
import UsersContent from './users';
import CoursesContent from './courses';

const Dashboard = () => {
    const [selectedContent, setSelectedContent] = useState('users');

    const renderContent = () => {
        switch (selectedContent) {
            case 'users':
                return <UsersContent />;
            case 'courses':
                return <CoursesContent />;
            default:
                return null;
        }
    };

    return (
        <div>
            <Header onUsersClick={() => setSelectedContent('users')} onCoursesClick={() => setSelectedContent('courses')} />
            <div>
                {renderContent()}
            </div>
        </div>
    );
};

export default Dashboard;
