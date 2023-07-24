"use client"
import React from 'react';
import grid_image_1 from '../../../public/grid_img_1.svg';
import grid_image_2 from '../../../public/grid_img_2.svg';
import grid_image_3 from '../../../public/grid_img_3.svg';
import video_player from '../../../public/video_player.svg';
import brand_logo_1 from '../../../public/brand_logo_1.svg';
import brand_logo_2 from '../../../public/brand_logo_2.svg';
import brand_logo_3 from '../../../public/brand_logo_3.svg';
import brand_logo_4 from '../../../public/brand_logo_4.svg';
import arrow_icon from '../../../public/arrow_icon.svg';
import Image from 'next/image';

const LandingPage = () => {

    const navContContent = ['Products', 'Solutions', 'Service', 'Help Center', 'Pricing'];
    return (
        <div>
            <header className=' border-2 border-red-500 flex justify-between items-center px-4'>
                <h1 className=' font-sans font-bold text-2xl'>magnifico</h1>

                <div className=' grid grid-cols-5 h-24 place-content-center'>
                    {
                        navContContent.map(nav =>
                            <div key={nav} className=''>
                                {nav}
                            </div>
                        )
                    }
                </div>

                <div className=' grid grid-cols-2 gap-2'>
                    <button className=' text-blue-500'>Log in</button>
                    <button className='rounded-full bg-blue-500 text-white p-3'>Sign up Free</button>
                </div>
            </header>

            <section className=' grid sm:grid-cols-2 ga grid-cols-1 h-max p-12 border-2 border-red-500'>
                <div className='border-2 border-red-500 flex flex-col space-y-4 justify-center p-4 gap-4'>

                    <div className=' flex gap-2 flex-col space-y-3'>
                        <h1 className=' font-bold text-5xl pr-24'>Team projects, done well</h1>
                        <p>
                            The only platform that gives your team all the tools needed to work together on their awesome projects.
                        </p>
                    </div>

                    <label className=' grid grid-cols-2 sm:flex justify-start gap-4'>

                        <input type="email" className=' block border border-gray-300'
                            placeholder='  Enter work email'
                        />
                        <button className='rounded-lg bg-blue-500 text-white p-3'>Sign up Free</button>
                    </label>

                    <div className=' sm:flex flex-wrap gap-2 space-x-2 grid grid-cols-2 bg-gray-300 rounded-md p-2'>
                        <Image src={brand_logo_1} alt='brand_logo_1' />
                        <Image src={brand_logo_2} alt='brand_logo_2' />
                        <Image src={brand_logo_3} alt='brand_logo_3' />
                        <Image src={brand_logo_4} alt='brand_logo_4' />
                    </div>

                </div>

                <div className=' h-auto'>
                    {/* <div className="aspect-video">
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/SneCkM0bJq0"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div> */}
                    <div>
                        <Image src={video_player} alt="video_player" />
                    </div>
                </div>

            </section>

            <section className=' grid sm:grid-cols-2 ga grid-cols-1 h-max p-12 border-2 border-red-500'>

                <div className=' grid grid-cols-3 border-2 border-red-500'>
                    <div className=' pt-20'>
                        <Image src={grid_image_1} alt="myImage" />
                    </div>
                    <div className=' pb-20'>
                        <Image src={grid_image_2} alt="myImage" />
                    </div>
                    <div className=' pt-20'>
                        <Image src={grid_image_3} alt="myImage" />
                    </div>
                </div>

                <div className=' p-11 sm:h-2/3 h-auto flex flex-col justify-between items-start  border-2 border-red-500'>

                    <h1 className=' font-bold text-3xl'>Enjoy your time working</h1>
                    <p>
                        Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.
                    </p>
                    <div>
                        <p className=' text-blue-700'>
                            See how it helped others
                        </p>
                        {/* <AiOutlineArrowRight/> */}
                    </div>


                </div>

            </section>


        </div>
    );
};

export default LandingPage;