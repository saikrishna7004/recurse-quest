import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const HomePage = () => {
    // Set your target date and time for the treasure hunt
    // const targetDate = new Date('2024-03-02T12:00:00').getTime();
    // const [countdown, setCountdown] = useState('');
    // const [startButtonDisabled, setStartButtonDisabled] = useState(true); // Initialize as disabled

    // useEffect(() => {
    //     const updateCountdown = () => {
    //         const now = new Date().getTime();
    //         const distance = targetDate - now;

    //         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //         const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //         const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    //         setCountdown(countdownString);

    //         if (distance <= 0) {
    //             setStartButtonDisabled(false);
    //         }
    //     };

    //     const countdownInterval = setInterval(updateCountdown, 1000);

    //     return () => clearInterval(countdownInterval);
    // }, [targetDate]);

    return (<>
            <Head>
                <title>CoinQuest - Recurse</title>
            </Head>
            <div className='container text-center' style={{ height: '90vh', display: 'flex', textAlign: 'center', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <img src="/coinquest logo.png" alt="Recurse Logo White" style={{width: '100%', marginTop: '50px', marginBottom: '30px'}} />
                <h3 style={{marginBottom: '10px', marginTop: '10px'}}>Are you excited for the Quest to begin?</h3>
                <h3 style={{marginTop: '10px', marginBottom: '10px', padding: '10px'}}>The quest has started</h3>
                <div className='buttons'>
                    <Link className={`button button1`} target='_blank' href="https://drive.google.com/file/d/1wsrBxEw2klM5bggsGhiyBHwaa3bAn3E-">Event Details</Link>
                    <Link className={`button`} target='_blank' href="https://recurse-coinquest.vercel.app/">Register/Login</Link>
                </div>
            </div>
        </>
    );
};

export default HomePage;
