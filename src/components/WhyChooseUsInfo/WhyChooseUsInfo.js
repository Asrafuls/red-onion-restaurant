import React, { useState } from 'react';

const WhyChooseUsInfo = (props) => {

    const [isCollapse, setIsCollapse] = useState(false)

    const isCollapseFalse = () => {
        setIsCollapse(false)
    }
    const isCollapseTrue = () => {
        setIsCollapse(true)
    }

    const { img, icon, title, fullContent } = props.blogData

    return (
            <div className="blogSection">
                <div className="blogImgSection">
                    <img src={img} alt="" className="blogImg" />
                </div>
                <div style={{ display: 'flex' }} className="blogTitleAndEtc">
                    <div style={{ width: '12%' }} className="blogTitleImg">
                        <img src={icon} alt=''/>
                    </div>
                    <div style={{ width: '88%' }} className="blogTitleContent">
                        <h3>{title}</h3>
                        <span>{
                            isCollapse ? fullContent :
                                fullContent.substr(0, 75) + '...'
                        }</span>
                        <br />
                        <br />
                        {
                            isCollapse ?
                                <span onClick={isCollapseFalse} className="blogSectionSeeMore">See less
                                        <svg style={{
                                        margin: '-7px 10px',
                                        color: '#19E270',
                                    }} width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z" />
                                    </svg>
                                </span> :
                                <span onClick={isCollapseTrue} className="blogSectionSeeMore">See more
                                        <svg style={{
                                        margin: '-7px 10px',
                                        color: '#19E270',
                                    }} width="1.8em" height="1.8em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z" />
                                    </svg>
                                </span>

                        }
                    </div>
                </div>
                <br /><br />
            </div>
    );
};

export default WhyChooseUsInfo;