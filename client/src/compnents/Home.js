import React from "react";

import "./Home.css";
import Product from "./Product";
import Header from "./Header";

function Home() {
  let key1 = "511515152";
  let key2 = "511514656";
  let key3 = "556996552";
  let key4 = "949515152";
  let key5 = "515151562";
  let key6 = "514242422";
  let key7 = "515828362";
  let key8 = "514222462";
  let key9 = "156222462";
  return (
    <>
      <Header />
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="home_back"
          />

          <div className="home_row">
            <Product
              id={key1}
              image="https://images-na.ssl-images-amazon.com/images/I/41Ag4WE7uyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
              title="The Lean Startup:How Constant Innovation Creates Radically Successful Businesses Paperback"
              price={11.96}
              rating={4}
            />
            <Product
              id={key2}
              image="https://m.media-amazon.com/images/I/71TPda7cwUL._AC_SX522_.jpg"
              title="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver"
              price={698}
              rating={5}
            />
          </div>
          <div className="home_row">
            <Product
              id={key3}
              image="https://m.media-amazon.com/images/I/610sI+grqwL._AC_SY300_SX300_.jpg"
              title="Garmin Instinct 2 Solar, GPS Outdoor Watch, Solar Charging Capabilities, Multi-GNSS Support, Tracbak Routing, Graphite"
              price={449}
              rating={3}
            />
            <Product
              id={key4}
              image="https://m.media-amazon.com/images/I/71K3E887V+L._AC_SX679_.jpg"
              title="Samsung Galaxy S22 Ultra 5G 256GB 12GB RAM Factory Unlocked (GSM Only | No CDMA - not Compatible with Verizon/Sprint) Global Version - Green"
              price={112999}
              rating={5}
            />
            <Product
              id={key5}
              image="https://m.media-amazon.com/images/I/61F9C6Q6g6L._AC_SX679_.jpg"
              title="MUZII Gaming Office Chair Ergonomic Swivel Computer Chair Comfortable Padded Armrest Desk Chair with Wheels Adjustable Height Video Game Chairs for Teens Adults Red"
              price={102}
              rating={2}
            />
          </div>
          <div className="home_row">
            <Product
              id={key6}
              image="https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_SX679_.jpg"
              title="SAMSUNG 49 Odyssey Neo G9 G95NA Gaming Monitor, 4K UHD Mini LED Display, Curved Screen, 240Hz, 1ms, G-Sync and FreeSync Premium Pro, LS49AG952NNXZA, White & Black"
              price={1399}
              rating={4}
            />
          </div>
          <div className="home_row">
            <Product
              id={key7}
              image="https://m.media-amazon.com/images/I/61jMxzQcPjL._SL1500_.jpg"
              title="New Apple AirPods (3rd Generation)"
              price={17900}
              rating={4}
            />
            <Product
              id={key8}
              image="https://m.media-amazon.com/images/I/618hqM-yxtL._SL1500_.jpg"
              title="OnePlus 10 Pro 5G (Emerald Forest, 12GB RAM, 256GB Storage)"
              price={71999}
              rating={4}
            />
            <Product
              id={key9}
              image="https://m.media-amazon.com/images/I/815wDtBifdL._SL1500_.jpg"
              title="Cho-Cho Inflatable Bath Tubs® Swimming Pool Bathtub for Kids and Adults with Electric Pump (Multicolour, 8.5 ft)"
              price={4599}
              rating={2}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
