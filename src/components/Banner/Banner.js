import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <section className='containerFull bannerMain' id='banner'>
            <div className="containerMain banner">
                <div className="bannerContent">
                    <h2 className="bannerText">Best food waiting for your belly</h2>
                    <form action="" className="bannerSearch">
                        <input type="text" placeholder='Search food items'/>
                        <input type="submit" value='Search'/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Banner;