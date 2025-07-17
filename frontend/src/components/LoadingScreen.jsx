import React, { useEffect } from 'react';
import loading from '../assets/loading.mp4'
import { useNavigate } from 'react-router-dom';


const LoadingScreen = ({ redirectTo = "/register" }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(redirectTo);
        }, 8000);
        return () => clearTimeout(timer);
    }, [navigate, redirectTo]);
    return (
        <div className='main'>
            <video
                src={loading}
                autoPlay
                loop
                muted
                style={{ maxWidth: '100%', maxHeight: '100%' }}
            />
        </div>
    );
};

export default LoadingScreen
