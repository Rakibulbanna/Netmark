"use client"
import React from 'react';
import grid_image_1 from '../../../public/grid_img_1.svg';
import grid_image_2 from '../../../public/grid_img_2.svg';
import grid_image_3 from '../../../public/grid_img_3.svg';
import video_player from '../../../public/video_player.svg';
import video_player_2 from '../../../public/video_player_2.svg';
import brand_logo_1 from '../../../public/brand_logo_1.svg';
import brand_logo_2 from '../../../public/brand_logo_2.svg';
import brand_logo_3 from '../../../public/brand_logo_3.svg';
import brand_logo_4 from '../../../public/brand_logo_4.svg';

import { AiOutlineArrowRight } from 'react-icons/ai';
import Image from 'next/image';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

const LandingPage = () => {

    const navContContent = ['Products', 'Solutions', 'Service', 'Help Center', 'Pricing'];
    const footerContent = ['Terms', 'Privacy', 'Support', 'About', 'Resources', 'Contact']
    return (
        <div>
            <header className=' border-2 border-red-500 flex justify-between items-center px-4'>
                <a href='#' className=' font-sans font-bold text-2xl'>magnifico</a>

                <div className=' grid grid-cols-5 h-auto py-6 place-content-center'>
                    {
                        navContContent.map(nav =>
                            <a href='#' key={nav} className=''>
                                {nav}
                            </a>
                        )
                    }
                </div>

                <div className=' grid grid-cols-2 gap-2'>
                    <button className=' text-blue-500'>Log in</button>
                    <button className='rounded-full bg-blue-500 text-white p-3 flex'>Sign up Free <span className=' pt-1 pl-2'><AiOutlineArrowRight /></span></button>
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
                        <button className='rounded-lg bg-blue-500 text-white p-3 flex'>Sign up Free <span className=' pt-1 pl-2'><AiOutlineArrowRight /></span></button>
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

            <section className=' grid sm:grid-cols-2 grid-cols-1 gap-1 h-max p-12 border-2 border-red-500'>

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

                <div className=' flex items-center'>
                    <div className=' p-11 sm:h-2/3 h-auto flex flex-col justify-between items-start  border-2 border-red-500'>

                        <h1 className=' font-bold text-3xl'>Enjoy your time working</h1>
                        <p>
                            Etiam condimentum duis molestie malesuada volutpat pellentesque sed. Ornare suspendisse ut ac neque lobortis sed tincidunt. Mi tempus quis massa tellus imperdiet aenean nulla id.
                        </p>
                        <p className=' text-blue-700 flex'>
                            See how it helped others <span className=' pt-1 pl-4'><AiOutlineArrowRight /></span>
                        </p>
                    </div>
                </div>


            </section>


            <section className=' grid sm:grid-cols-2 grid-cols-1 gap-2 h-max p-12 border-2 border-red-500'>

                <div className=' flex items-center'>
                    <div className=' p-11 h-auto flex flex-col justify-between items-start  border-2 border-red-500'>

                        <h1 className=' font-bold text-3xl'>Get all the tools your team needs</h1>
                        <p>
                            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
                        </p>
                        <p className=' text-blue-700 flex'>
                            Check the tools <span className=' pt-1 pl-4'><AiOutlineArrowRight /></span>
                        </p>
                    </div>
                </div>

                <div className=' md:pl-16 flex items-center border-2 border-red-500'>
                    <RadarChart
                        captions={{
                            // columns
                            battery: "Battery Capacity",
                            design: "Design",
                            useful: "Usefulness",
                            speed: "Speed",
                            weight: "Weight",
                        }}
                        data={[
                            // data
                            {
                                data: {
                                    battery: 0.7,
                                    design: 1,
                                    useful: 0.9,
                                    speed: 0.67,
                                    weight: 0.8,
                                },
                                meta: { color: "#9333EA" },
                            },
                            {
                                data: {
                                    battery: 1,
                                    design: 0.6,
                                    useful: 0.8,
                                    speed: 0.9,
                                    weight: 0.7,
                                },
                                meta: { color: "#cc333f" },
                            },
                            {
                                data: {
                                    battery: 0.8,
                                    design: 0.7,
                                    useful: 0.6,
                                    speed: 0.8,
                                    weight: 0.6,
                                },
                                meta: { color: "#9333EA" },
                            },
                        ]}
                        options={{
                            dots: true,
                            axes: true
                        }}
                        size={450}

                    />
                </div>

            </section>

            <div className=' p-12 '>
                <section className='  border-2 border-red-500 bg-gradient-to-r from-indigo-500 via-purple-500 rounded-xl'
                    style={{
                        zIndex: -1,
                        background: `url("https://s3-alpha-sig.figma.com/img/1f80/6885/c15ddef9bdc406ecdc84d5a443ed8054?Expires=1691366400&Signature=TkNgzQMSjWQ-6XOLxq1ULXV-wO8W7NMqXOr1blwkHJpMjGFszqZkvi4jwRVYbb5E8UrtW27wCRPXjLzhjlaiXn-Ud2hNy06MtW4ndFrwzAbpOq0wpuiK6n8WLXNRoNHg4P60fYor7QpNXtomwUXehOg-nMAyd3Z5ouA0jBoRrp65GevQoUWQNiiszWXeIlpvUyP7MlcWy8Na0HWecPUP9wROo9QGS970t9eRdF8KxlMlLFnR5YlOome5sR9C34LPDixHHwOq6OTs8NrShX6rVhZAJsY2lN-72sFoMe3gVsm3wuuyoOm5qUyLlTuGeGiGMiMaLooBUOFT9GaFFGpJIA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4") 0 0 repeat`,
                        // transform: 'rotate(90deg)',
                        backgroundColor: 'purple',
                    }}>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-2 h-max p-12 bg-gradient-to-l from-indigo-500 via-purple-500 text-white'>
                        <div className=' flex items-center '>
                        </div>
                        <div className=' flex items-center '>


                            <div className=' p-11 h-auto flex flex-col justify-between items-start space-y-4  border-2 border-red-500'>

                                <h1 className=' font-bold text-3xl'>Problems come and get solved with ease</h1>
                                <p>
                                    Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
                                </p>
                                <p className=' flex'>
                                    See how it helped others <span className=' pt-1 pl-4'><AiOutlineArrowRight /></span>
                                </p>

                            </div>
                        </div>
                    </div>


                </section>
            </div>


            <section className=' grid sm:grid-cols-2 gap-6 grid-cols-1 h-max md:p-24 p-12 border-2 border-red-500'>
                <div className='border-2 border-red-500 flex flex-col space-y-4 justify-center p-4 gap-4'>

                    <div className=' flex gap-2 flex-col space-y-3'>
                        <h1 className=' font-bold text-5xl pr-24'>Improve workflow</h1>
                        <p>
                            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
                        </p>
                    </div>

                    <table className='border border-gray-300'>
                        <tr>
                            <td className=' border border-gray-300 text-center bg-gray-200'>Research</td>
                            <td className=' border border-gray-300 text-center'>Plan</td>
                            <td className=' border border-gray-300 text-center'>Design</td>
                        </tr>
                    </table>

                    <div className=' flex items-center '>
                        <div className=' h-auto flex flex-col justify-between items-start space-y-6 '>
                            <p>
                                Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
                            </p>
                            <p className=' flex text-blue-700'>
                                See how it helped others <span className=' pt-1 pl-4'><AiOutlineArrowRight /></span>
                            </p>

                        </div>
                    </div>

                </div>

                <div className=' pt-9 '>
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full rounded-2xl"
                            src="https://www.youtube.com/embed/SneCkM0bJq0"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>

                </div>

            </section>

            <div className=' p-12 '>
                <section className='  border-2 border-red-500 bg-gradient-to-r from-blue-800 via-purple-700 to-purple-900 rounded-xl text-center text-white flex flex-col items-center space-y-6 p-6'
                >

                    <h1 className='font-bold text-4xl '>Join the community today</h1>
                    <p>Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.</p>

                    <button className='rounded-lg bg-blue-500 text-white p-3 flex'>Sign up Free <span className=' pt-1 pl-2'><AiOutlineArrowRight /></span></button>


                </section>
            </div>

            <footer className=' grid grid-cols-1 md:grid-cols-2 border-2 border-red-500'>
                <div className=' flex flex-wrap h-auto place-content-center gap-x-4'>
                    <h1 className=' font-sans font-bold text-sm'>magnifico</h1>
                    <p className=' text-sm'>@ 2023. All rights reserved.</p>
                </div>
                <div className=' flex flex-wrap h-auto place-content-center'>
                    <div className=' grid grid-cols-6 h-24 place-content-center sm:space-x-2'>

                        {
                            footerContent.map(footer =>
                                <a href='#' key={footer} >
                                    {footer}
                                </a>
                            )
                        }
                    </div>

                </div>
            </footer>
        </div >
    );
};

export default LandingPage;