import React from 'react';

const Footer = () => {
    return (
        <div className=" bg-gray-200 pb-12">
                <div className="mx-auto container pt-20 lg:pt-30 flex flex-col items-center justify-center">
                    <div><h2 className='text-center text-5xl font-bold'>Valo<span className='text-secondary'>Phone</span></h2>
                    </div>
                    <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                        <h1 className="text-2xl font-black">Build. Review. Ship.</h1>
                        <div className="my-6 text-base text-color f-f-l">
                            <ul className="md:flex items-center">
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">About</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Business</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Partner</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Careers</li>
                                <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Help</li>
                                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="text-sm text-color mb-10 f-f-l">
                            <p> © 2022 ValoPhone. All rights reserved</p>
                        </div>
                    </div>
                    
                </div>
            </div>
    );
};

export default Footer;