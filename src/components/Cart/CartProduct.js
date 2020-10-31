import React from 'react';

const CartProduct = (props) => {

    // onClick={() => quantity(quantity === 1 ? 1 : quantity - 1)} style={{ padding: '0px' }}
    // onClick={() => quantity(quantity + 1)} style={{ padding: '0px' }}

    const { title, price, quantity, img, id } = props.cartData;

    const removeFromCart = props.removeCart;

    return (
        <div style={{ display: 'flex', marginBottom: '10px' }} className="cartProduct">
            <div style={{ width: '30%' }}>
                <img style={{ width: '100%' }} src={img} alt="" className="cartProductImg" />
            </div>
            <div style={{ width: '70%', marginLeft: '10px' }}>
                <p className="cartProductTitle">{title.substr(0, 20) + '..'}</p>
                <h4 className="cartProductPrice text-danger">$ {price}</h4>
                <small style={{ margin: '10px 0 0 0' }} className="cartProductCharge">Delivery: $ 01.0</small>
                <div className="cartProductQuantity">
                    <button className="btn btn-outline-danger"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-dash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                    </svg></button>
                    <span style={{ fontSize: '30px', margin: '0px 0 0 3px', background: '#fff', padding: '0 5px' }} className="cartProductQuantityValue">{quantity}</span>
                    <button className="btn btn-outline-danger"><svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-plus" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg></button>
                </div>
                <br /><br />
                <button onClick={() => removeFromCart(id)} title='Remove from cart' id='removePdInCart' className="btn btn-outline-danger d-inline">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default CartProduct;