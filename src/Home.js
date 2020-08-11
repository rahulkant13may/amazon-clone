import React from 'react'
import "./Home.css"
import Product from './Product';
import RecomendationCard from './RecomendationCard';
import MoreCategoryCard from './MoreCategoryCard';

function Home() {
    return (
        <div className="home">
            <img
                className="home__image"
                // src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"/>
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg"/>
            <div className="home__white_banner_row">
        	    <button className = "rahul_kant_button" type="button" >
                    <a href="http://www.rahulkant.com/">
                        By Rahul Kant
                    </a>
                </button>
            </div>
            <div className="home__white_banner_row">

               <h2  className="home__white_banner">You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery. Click here to go to amazon.in</h2>
            </div>

            <div className="home__row">
                <RecomendationCard
                    id="543454"
                    title="Prestige Mixer Grinder, 550W, 3 Jars (Blue)"
                    price={300}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/51ukLK7j-JL._AC_UY218_.jpg"
                />
                <MoreCategoryCard
                    id="3200221323"
                    heading="Electronics"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"                    
                    anchorTitle="Shop now"               />
                <MoreCategoryCard
                    id="3232221323"
                    heading="AmazonBasics"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                    anchorTitle="See more"               />
                <MoreCategoryCard
                    id="3200221323"
                    heading="Electronics"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Electronics_1x._SY304_CB432774322_.jpg"                    
                    anchorTitle="See more"               />
            </div>
            <div className="home__row">
                <MoreCategoryCard
                        id="9797937493"
                        heading="Get fit at home"
                        image="https://images-na.ssl-images-amazon.com/images/G/01/events/GFAH/GWDesktop_SingleImageCard_fitathome_1x._SY304_CB434924743_.jpg"
                        anchorTitle="See more"               />
                <MoreCategoryCard
                    id="54635434"
                    heading="Computer & Accesories"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"                    
                    anchorTitle="Shop now"               />
                <MoreCategoryCard
                    id="3323232"
                    heading="Beauty picks"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
                    anchorTitle="Shop now"               />
                <MoreCategoryCard
                    id="3232323"
                    heading="Easy returns"
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Returns_1x._SY304_CB432774714_.jpg"                    
                    anchorTitle="See more"               />
            </div>
            <div className="home__row">
                <Product
                    id="54311454"
                    title="Amazon Brand - Solimo 12-inch Wall Clock - Classic Roulette (Silent Movement, Black Frame)"
                    price={300}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/81XEPquUw3L._SX569_.jpg"
                />
                <Product
                    id="434113434"
                    title="Echo Plus (2nd Gen) – Premium sound, powered by Dolby, built-in Smart Home hub (Grey)"
                    price={1000}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61KMEKAkWyL._AC_UY218_.jpg"
                />
                <Product
                    id="234113432"
                    title="Casio G-Shock Analog-Digital Black Dial Men's Watch - GG-1000-1A3DR (G662)"
                    price={2000}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71mbIiIeuYL._UX679_.jpg"
                />
                <Product
                    id="2343432"
                    title="SBH-17 Terminator Full Face Graphic Helmet (Large 600 MM, Matt Black Fluo Red with Smoke Visor)"
                    price={1500}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61ze7hirORL._SX569_.jpg"
                />
            </div>
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
