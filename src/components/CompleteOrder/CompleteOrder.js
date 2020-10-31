import React from 'react';
import './CompleteOrder.css';
import deliveryMapImg from './../../images/ordercomplete_map.png';
import deliveryImg from './../../images/Group1.png';
import deliveryManImg from './../../images/Group2.png';

const CompleteOrder = () => {
    return (
        <section style={{padding: '80px 0'}} className="CompleteOrderSection containerFull">
            <div style={{ display: "flex" }} className="containerMain">
                <div style={{ width: '76%', marginRight: '7%' }} className="deliveryMap">
                    <img style={{ width: '100%' }} src={deliveryMapImg} alt="" className="" />
                </div>
                <div style={{ width: '28%' }} className="orderDetails">
                    <div className="orderDetailsSection1">
                        <img style={{ width: '40%' , marginLeft: '20px'}} src={deliveryImg} alt="" className="" />
                        <div className="orderLocation">
                            <h5 className="">Your Location</h5>
                            <span>107 Rd no 8</span>
                            <br/><br/>
                            <h5 className="">Shop Address</h5>
                            <span>Gulshan Plaza Restaurant</span>
                        </div>
                        <div className="orderRider">
                            <h2 className="time">09:30</h2>
                            <span>Estimated delivery time</span>
                            <div className="yourRider">
                                <div style={{ width: '20%' }} className="riderImg">
                                    <img style={{ width: '100%' }} src={deliveryManImg} alt="" />
                                </div>
                                <div style={{ width: '80%' , marginLeft: '20px'}} >
                                    <h5 className="riderName">Hamim</h5>
                                    <span>Your rider</span>
                                </div>
                            </div>
                            <br/>
                            <button className='btn btn-danger' style={{ width: '100%' }} >Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompleteOrder;