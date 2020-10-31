import React, { useEffect } from 'react';
import './Cart.css'
import CartProduct from './CartProduct';
import fakeData from './../../fakeData';
import { Link } from 'react-router-dom';
import { getDatabaseCart } from '../../utilits/databseManager';
import { useAuth } from '../SignUp/useAuth';
import { useForm } from "react-hook-form";

const Cart = () => {

    const auth = useAuth();

    const { cartItem, setCartItem, removeFromCart, cOrder } = auth;

    useEffect(() => {
        const cartItems = getDatabaseCart()
        const cartId = Object.keys(cartItems);
        const mspId = cartId.map(pd => {
            const product = fakeData.find(id => id.id === pd)
            product.quantity = cartItems[pd]
            return product;
        })
        setCartItem(mspId)
    }, [setCartItem])

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    const orderTotalPrice = cartItem.reduce((orderTotal, product) => orderTotal + product.price * product.quantity, 0)
    let orderDeliveryCharge = 0;
        if(orderTotalPrice < 20){
            orderDeliveryCharge = 2;
        }
        else if(orderTotalPrice < 40){
            orderDeliveryCharge = 4;
        }
        else if(orderTotalPrice < 60){
            orderDeliveryCharge = 6;
        }
        else if(orderTotalPrice < 90){
            orderDeliveryCharge = 7;
        }
        else if(orderTotalPrice < 100){
            orderDeliveryCharge = 8;
        }else{
            orderDeliveryCharge = 1;
        }
    const orderTax = 1;
    const orderTotalPriceWithDelAndTax = orderTotalPrice+orderDeliveryCharge+orderTax;

    return (
        <section className='cartMain containerFull'>
            <div style={{ display: 'flex', paddingBottom: '80px' }} className="cart containerMain">
                <div style={{ width: '35%', marginRight: '9%', marginLeft: '13.5%' }} className="cartLeftSection">
                    <br /><br /><br />
                    {
                        auth.user ?
                            <>
                                <h3>Edit Delivery Details</h3>
                                <hr />
                                <br />
                                <form id='checkOutForm' onSubmit={handleSubmit(onSubmit)}>
                                    <input style={{ background: '#F5F5F5' }} type='text' placeholder='Delivery Option' class="form-control" name="DelOpt" defaultValue="" ref={register({ required: true })} />
                                    {errors.DelOpt && <span className="text-danger">This field is required</span>}
                                    <br />
                                    <input style={{ background: '#F5F5F5' }} type='text' placeholder='Delivery Address' class="form-control" name="DelAdr" ref={register({ required: true })} />
                                    {errors.DelAdr && <span className="text-danger">This field is required</span>}
                                    <br />
                                    <input style={{ background: '#F5F5F5' }} type='text' placeholder='Business Name' class="form-control" name="BussN" ref={register({ required: true })} />
                                    {errors.BussN && <span className="text-danger">This field is required</span>}
                                    <br />
                                    <input style={{ background: '#F5F5F5' }} type='text' placeholder='Flat , Suite & Flor' class="form-control" name="FluFlo" ref={register({ required: true })} />
                                    {errors.FluFlo && <span className="text-danger">This field is required</span>}
                                    <br />
                                    <textarea style={{ background: '#F5F5F5' }} type='text' placeholder='Add Delivery Instruction' class="form-control" name="DelIns" ></textarea>
                                    <br />
                                    <input type="submit" class="btn btn-danger w-100" value='Save & Continue' />
                                    <br />
                                </form>
                            </> :
                            <>
                                <h3>You are not Singed In</h3>
                                <hr />
                                <div className="text-center d-flex">
                                    <Link className='btn btn-danger' to='./../../login'>Login</Link>
                                    <span style={{ margin: '10px 0 0 14px' }}> Or </span>
                                    <Link className='nav-link' to='./../../signup'>Sign Up</Link>
                                </div>
                            </>
                    }

                </div>
                <div style={{ width: '29%', marginRight: '13.5%' }} className="cartRightSection">
                    <br /><br /><br />

                    {
                        auth.user ?
                            <>
                                {/* <h6 className="cartRestaurantAddress">From <strong>Gulshan Plaza Restaura GPR</strong></h6>
                                <h6 className="wettingTime">Arriving in 20-30 min</h6>
                                <span className='deliveryAddress'>107 Rd No 8</span> */}
                            </>
                            :
                            <>
                            </>
                    }
                    <h4>Your Cart Item's</h4>
                    <hr />
                    <div className="cartProductList">
                        {
                            cartItem.map(cartPd =>
                                <CartProduct cartData={cartPd} removeCart={removeFromCart} />
                            )
                        }
                    </div>
                    {
                        cartItem.length >= 1 ?
                        <div className="orderAmountAndDetails">
                            <br />
                            <div style={{ width: '100%' }} className="d-flex">
                                <h6 style={{ width: '80%' }} className="">Subtotal {cartItem.length} items: </h6>
                                <h6 style={{ width: '20%' }} className="text-right">{cartItem.price} $ {orderTotalPrice}</h6>
                            </div>
                            <div style={{ width: '100%' }} className="d-flex">
                                <h6 style={{ width: '80%' }} className="">Delivery : </h6>
                                <h6 style={{ width: '20%' }} className="text-right">{cartItem.price} $ {orderDeliveryCharge}</h6>
                            </div>
                            <div style={{ width: '100%' }} className="d-flex">
                                <h6 style={{ width: '80%' }} className="">Tax: </h6>
                                <h6 style={{ width: '20%' }} className="text-right">$ {orderTax}</h6>
                            </div>
                            <div style={{ width: '100%' }} className="d-flex">
                                <h4 style={{ width: '80%' }} className="">Total: </h4>
                                <h4 style={{ width: '20%' }} className="text-right">$ {orderTotalPriceWithDelAndTax}</h4>
                            </div>
                        </div>:
                        <></>
                    }
                    <br />
                    {
                        cartItem.length >= 1 ?
                            <Link to='/cOrder' onClick={cOrder} style={{ width: "100%" }} className="btn btn-danger" disabled='true'>
                                Place Order
                            </Link> :
                            <button style={{ width: "100%" }} className="btn btn-danger" disabled='true'>
                                Place Order
                        </button>
                    }
                </div>
            </div>
        </section>
    );
};

export default Cart;