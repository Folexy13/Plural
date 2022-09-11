import React from 'react'
import './Aside.scss' 
import { BsArrowRight } from "react-icons/bs";

const Aside = () => {
    return (
        <div className='aside_post'>
            <h4>Related Posts</h4>
            <div className="img-text_container">
                <div className="img1"></div>
                <div className="texts">
                    <p>Ensure that you receive a safe, caring and responsive service.</p>
                    <BsArrowRight id='arrow-right' />
                </div>
            </div>
            <div className="img-text_container">
                <div className="img2"></div>
                <div className="texts">
                    <p>Ensure that you receive a safe, caring and responsive service.</p>
                    <BsArrowRight id='arrow-right' />
                </div>
            </div>
            <div className="img-text_container">
                <div className="img3"></div>
                <div className="texts">
                    <p>Ensure that you receive a safe, caring and responsive service.</p>
                    <BsArrowRight id='arrow-right' />
                </div>
            </div>
            <div className="img-text_container">
                <div className="img4"></div>
                <div className="texts">
                    <p>Ensure that you receive a safe, caring and responsive service.</p>
                    <BsArrowRight id='arrow-right' />
                </div>
            </div>
            <div className="img-text_container">
                <div className="img2"></div>
                <div className="texts">
                    <p>Ensure that you receive a safe, caring and responsive service.</p>
                    <BsArrowRight id='arrow-right' />
                </div>
            </div>
        </div>
    )
}

export default Aside