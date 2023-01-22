import React from 'react';
// background image credit: https://unsplash.com/photos/DvrTk5En9eM Artist: Devin Berko
import background from "../images/hero_background.jpg";
import '../App.css';


const Hero = () => {
    return (
        <header style={{ paddingLeft: 0 }}>
            <div
                className='p-5 text-center bg-image'
                style={{ backgroundImage: `url(${background})`, height: '100vh', width: '100vw', backgroundPosition: 'center', backgroundSize: 'cover' }}
            >
                <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                        <div className='text-white'>
                            <h1 className='mb-3'>8-Bit Gaming</h1>
                            <h4 className='mb-3'>where classics live</h4>
                            <a className='btn btn-outline-light btn-lg' href='/store' role='button'>
                                Take a Look Around
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Hero;