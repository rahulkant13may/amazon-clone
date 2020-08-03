import React from 'react'
import "./Home.css"
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            />
            <div className="home__row">
                <Product
                    id="1223232"
                    title="Do It Today: Overcome Procrastination, Improve Productivity, and Achieve More Meaningful Things Kindle Edition"
                    price={14}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41-G7AIOZyL.jpg"
                />
                <Product
                    id="2343432"
                    title="(Renewed) Samsung Galaxy A31 (Prism Crush Blue, 6GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={400}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/61IAJ-z9rLL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                    id="543454"
                    title="Prestige Mixer Grinder, 550W, 3 Jars (Blue)"
                    price={300}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/51ukLK7j-JL._AC_UY218_.jpg"
                />
                <Product
                    id="4343434"
                    title="Apple Watch Series 3 (GPS, 42mm) - Space Grey Aluminium Case with Black Sport Band"
                    price={500}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71EoGntO5bL._AC_UL320_.jpg"
                />
                <Product
                    id="2343432"
                    title="Maniac Men's Slim Fit T-Shirt"
                    price={14}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/718XqtJBcrL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">

                <Product
                    id="2343432"
                    title="Mi TV 4X 125.7 cm (50 Inches) 4K Ultra HD Android LED TV (Black)"
                    price={14}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/71el-PAu1IL._AC_UY218_.jpg"
                />
            </div>

        </div>
    )
}

export default Home
