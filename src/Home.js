import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://teknowifi.b-cdn.net/wp-content/uploads/2019/07/Amazon-Prime-Day-2019.gif" alt="" />
            </div>
            <div className="home__row">
            <Product
            id="101"
            title="Its testing title One"
            price={20.33}
            image="https://cicf1rp.weebly.com/uploads/1/1/5/9/115935633/second-hand-books-sale-2019_orig.jpg"
            rating={4}
            />
            <Product
            id="102"
            title="Its testing title Two"
            price={20.33}
            image="https://cicf1rp.weebly.com/uploads/1/1/5/9/115935633/second-hand-books-sale-2019_orig.jpg"
            rating={4}
            />
            </div>
            <div className="home__row">
            <Product
            id="103"
            title="Its testing title Three"
            price={20.33}
            image="https://cicf1rp.weebly.com/uploads/1/1/5/9/115935633/second-hand-books-sale-2019_orig.jpg"
            rating={4}
            />
            <Product
            id="104"
            title="Its testing title Four"
            price={20.33}
            image="https://cicf1rp.weebly.com/uploads/1/1/5/9/115935633/second-hand-books-sale-2019_orig.jpg"
            rating={4}
            />
            <Product
            id="105"
            title="Its testing title Five"
            price={20.33}
            image="https://cicf1rp.weebly.com/uploads/1/1/5/9/115935633/second-hand-books-sale-2019_orig.jpg"
            rating={4}
            />
            </div>
            <div className="home__row">
            <Product
            id="106"
            title="Its testing title Six"
            price={20.33}
            image="https://cicf1rp.weebly.com/uploads/1/1/5/9/115935633/second-hand-books-sale-2019_orig.jpg"
            rating={4}
            />
            </div>
        </div>
    )
}

export default Home
