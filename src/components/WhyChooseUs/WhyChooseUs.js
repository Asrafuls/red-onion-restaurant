import React from 'react';
import blogData from '../../blogData';
import WhyChooseUsInfo from '../WhyChooseUsInfo/WhyChooseUsInfo';
import './WhyChooseUs.css';

const WhyChooseUs = () => {

    return (
        <section style={{ padding: '50px 0' }} className='WhyChooseUsMain containerFull'>
            <div className="containerMain">
                <div className="whyChooseUsHeader">
                    <h2 className="WhyChooseUsTitle">
                        Why You Choose Us
                    </h2>
                    <span style={{
                        width: '50%',
                        fontFamily: 'Open Sans',
                        fontSize: '13px'
                    }} className="WhyChooseUsMainSubTitle">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </span>
                    <br />
                    <br />
                    <br />
                </div>

                <div style={{display: 'flex'}} className='fromBlog'>
                    {
                        blogData.map(data => <WhyChooseUsInfo blogData={data} />)
                    }
                </div>
            </div>
        </section >
    );
};

export default WhyChooseUs;