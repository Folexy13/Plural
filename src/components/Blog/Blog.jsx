import React from 'react'
import './Blog.scss'
import { BsArrowRight } from "react-icons/bs";

const Blog = () => {
    return (
        <div id='blog'>
            <div className="intro">
                <h2>OUR BLOG</h2>
                <p>Always check here for updates on our activities and that of our associates and other <br /> tech related articles and updates</p>
            </div>

            <div className="blog_wt">
                <div className="wt">
                    <div className="img"></div>
                    <p id="topic">Health</p>
                    <p>Caring and responsive service</p>
                    <p>Ensure that you receive a safe, caring and responsive service, that our carers understand</p>
                    <BsArrowRight id='arrow-right' />
                </div>
                <div className="wt">
                    <div className="img"></div>
                    <p id="topic">Health</p>
                    <p>Caring and responsive service</p>
                    <p>Ensure that you receive a safe, caring and responsive service, that our carers understand</p>
                    <BsArrowRight id='arrow-right' />
                </div>
                <div className="wt">
                    <div className="img"></div>
                    <p id="topic">Health</p>
                    <p>Caring and responsive service</p>
                    <p>Ensure that you receive a safe, caring and responsive service, that our carers understand</p>
                    <BsArrowRight id='arrow-right' />
                </div>
                <div className="wt">
                    <div className="img"></div>
                    <p id="topic">Health</p>
                    <p>Caring and responsive service</p>
                    <p>Ensure that you receive a safe, caring and responsive service, that our carers understand</p>
                    <BsArrowRight id='arrow-right' />
                </div>
                <div className="wt">
                    <div className="img"></div>
                    <p id="topic">Health</p>
                    <p>Caring and responsive service</p>
                    <p>Ensure that you receive a safe, caring and responsive service, that our carers understand</p>
                </div>
                <div className="wt">
                    <div className="img"></div>
                    <p id="topic">Health</p>
                    <p>Caring and responsive service</p>
                    <p>Ensure that you receive a safe, caring and responsive service, that our carers understand</p>
                    <BsArrowRight id='arrow-right' />
                </div>
                <div className="wt">
                    <div className="img"></div>
                    <p id="topic">Health</p>
                    <p>Caring and responsive service</p>
                    <p>Ensure that you receive a safe, caring and responsive service, that our carers understand</p>
                    <BsArrowRight id='arrow-right' />
                </div>
                <div className="wt">
                    <div className="img"></div>
                    <p id="topic">Health</p>
                    <p>Caring and responsive service</p>
                    <p>Ensure that you receive a safe, caring and responsive service, that our carers understand</p>
                    <BsArrowRight id='arrow-right' />
                </div>
            </div>

            <div className="btn">
                <button>Previous Page</button>
                <button>Next Page</button>
            </div>
        </div>
    )
}

export default Blog