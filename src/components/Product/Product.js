import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {

    const { food } = props

    return (
        <Link to={'/food/' + food.id} style={{
            textAlign: 'center',
            width: '375px',
            fontFamily: 'Open Sans',
            margin: '12px 0 20px 0',
            display: "inline-block",
            color: '#000000',
        }}>
            <section style={{
                padding: '20px',
                width: '55%',
                marginLeft: '22.5%'
            }}>
                <img style={{
                    width: '70%',
                    margin: '0 auto'
                }} src={food.img} alt="" /><br />
                <h3 style={{
                    fontSize: '16px',
                    marginBottom: '0'
                }}>
                    {food.title}
                </h3>
                <span style={{ fontWeight: 'lighter', fontSize: '13px' }}>How we dream about your future</span>
                <p style={{
                    fontSize: '22px',
                    fontWeight: 'bold',
                    marginTop: '3px'
                }}>
                    $ {food.price}
                </p>
            </section>
        </Link>
    );
};

export default Product;