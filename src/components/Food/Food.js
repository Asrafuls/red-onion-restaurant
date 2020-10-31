import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import { useAuth } from '../SignUp/useAuth';
import './Food.css';

const Food = () => {
    const [foodProduct, foodProductSet] = useState([]);

    const auth = useAuth();
    const { cartItem } = auth;

    function lunchFunctionDefault(e) {
        const filteredData = fakeData.filter(food => food.catagories === 'lunch')
        foodProductSet(filteredData);
    }

    useEffect(() => {
        lunchFunctionDefault()
    }, [])

    const breakfastFunction = () => {
        const filteredData = fakeData.filter(food => food.catagories === 'breakfast')
        foodProductSet(filteredData)
        document.querySelector('.foodBreakfast').classList.add('foodItemsActive')
        document.querySelector('.foodLunch').classList.remove('foodItemsActive')
        document.querySelector('.foodDinner').classList.remove('foodItemsActive')
        document.querySelector('.foodMenuItemBorder1').classList.add('foodMenuItemBorderActive')
        document.querySelector('.foodMenuItemBorder2').classList.remove('foodMenuItemBorderActive')
        document.querySelector('.foodMenuItemBorder3').classList.remove('foodMenuItemBorderActive')
    }
    const lunchFunction = () => {
        const filteredData = fakeData.filter(food => food.catagories === 'lunch')
        foodProductSet(filteredData)
        document.querySelector('.foodBreakfast').classList.remove('foodItemsActive')
        document.querySelector('.foodLunch').classList.add('foodItemsActive')
        document.querySelector('.foodDinner').classList.remove('foodItemsActive')
        document.querySelector('.foodMenuItemBorder1').classList.remove('foodMenuItemBorderActive')
        document.querySelector('.foodMenuItemBorder2').classList.add('foodMenuItemBorderActive')
        document.querySelector('.foodMenuItemBorder3').classList.remove('foodMenuItemBorderActive')
    }
    const dinnerFunction = () => {
        const filteredData = fakeData.filter(food => food.catagories === 'dinner')
        foodProductSet(filteredData)
        document.querySelector('.foodBreakfast').classList.remove('foodItemsActive')
        document.querySelector('.foodLunch').classList.remove('foodItemsActive')
        document.querySelector('.foodDinner').classList.add('foodItemsActive')
        document.querySelector('.foodMenuItemBorder1').classList.remove('foodMenuItemBorderActive')
        document.querySelector('.foodMenuItemBorder2').classList.remove('foodMenuItemBorderActive')
        document.querySelector('.foodMenuItemBorder3').classList.add('foodMenuItemBorderActive')
    }

    return (
        <section className='containerFull foodSection' id='food'>
            <div className="containerMain">
                <div className="foodMenu">
                    <span onClick={breakfastFunction} className="foodBreakfast ">Breakfast</span>
                    <span onClick={lunchFunction} className="foodLunch foodItemsActive">Lunch</span>
                    <span onClick={dinnerFunction} className="foodDinner ">Dinner</span>
                    <div className="foodMenuItemBorder1 "></div>
                    <div className="foodMenuItemBorder2 foodMenuItemBorderActive"></div>
                    <div className="foodMenuItemBorder3 "></div>
                </div>
                <div className="foodProductSection" style={{ width: '90%', margin: '0 auto' }}>
                    {
                        foodProduct.map(food =>
                            <Product food={food} />
                        )
                    }
                </div>
                <div style={{
                    width: '223px',
                    margin: '50px auto'
                }}>
                    {
                        cartItem.length >= 1 ?
                        <a href='/cart' className="btn btn-danger" style={{padding: '10px 39px'}} >Checkout Your Food</a>:
                        <button disabled className="btn btn-danger" style={{padding: '10px 39px'}} >Checkout Your Food</button>
                    }
                </div>
            </div>
        </section>
    );

};

export default Food;