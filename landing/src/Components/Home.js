import React from 'react'
import './Home.css'
const Home = () => {
    return (
        <>
            <div className="parent-container">
                <div className="d-flex parts">
                    <div className="part1 d-flex flex-column justify-content-center align-items-center">
                        <h3 className='text-white p-4' data-aos="slide-right" >MERN Stack Developer</h3>
                        <div className="h-50">
                            <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_btyie10d.json" background="transparent" speed="1" loop autoplay></lottie-player>
                        </div>
                    </div>
                    <div className="part2 d-flex flex-column justify-content-center align-items-center">
                        <div className="h-50">
                            <lottie-player src="https://assets7.lottiefiles.com/private_files/lf30_8npirptd.json" 
                            background="transparent" 
                            speed="1" loop autoplay></lottie-player>
                            <h3 className='text-white mt-3' data-aos="slide-left">
                            Machine Learning Enthusiast</h3>
                        </div>
                    </div>

                </div>
                {/* <div className="seperator">
                    <span>HELLO</span>
                </div> */}
            </div>
        </>
    )
}

export default Home
