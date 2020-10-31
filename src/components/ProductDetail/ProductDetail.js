import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilits/databseManager';
import './ProductDetail.css'

const ProductDetail = () => {

    const [quantity, setQuantity] = useState(1)

    const { getUrlPath } = useParams();
    const findDataFromFakeData = fakeData.find(pd => pd.id === getUrlPath);
    const findDataCategory = fakeData.find(pd => pd.catagories === findDataFromFakeData.catagories);

    return (
        <section style={{ padding: '90px 0' }} className='productDetailMain containerFull'>
            <div style={{ display: 'flex' }} className="productDetail containerMain">
                <div style={{ width: '50%' }} className="productDetailLeft">
                    <h1>{findDataFromFakeData.title}</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="priceAndQuantity">
                        <h2>$ {findDataFromFakeData.price}</h2>
                        <div className="quantity">
                            <button onClick={() => setQuantity(quantity === 1 ? 1 : quantity - 1)} class='btn' id="quantityMinusBtn"><strong>-</strong></button>
                            <span className="quantityValue btn"><strong>{quantity}</strong></span>
                            <button onClick={() => setQuantity(quantity + 1)} class='btn' id="quantityPlusBtn"><strong>+</strong></button>
                        </div>
                    </div>
                    <button onClick={() => addToDatabaseCart(getUrlPath , quantity)} className="addToCartBtn">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                        </svg>
                        Add
                    </button>
                    <div style={{
                        width: '500px',
                        height: "160px",
                        marginTop: '60px'
                    }} id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                            <Link to={findDataCategory.id} class="carousel-item active">
                                <img style={{ height: '160px' }} src={findDataCategory.img} class="d-block" alt="..." />
                            </Link>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div style={{ width: '50%' }} className="productDetailRight">
                    <img style={{
                        width: '80%',
                        margin: '0 auto',
                        float: 'right'
                    }} src={findDataFromFakeData.img} alt="" />
                </div>
            </div>
        </section>
    );
};

export default ProductDetail;