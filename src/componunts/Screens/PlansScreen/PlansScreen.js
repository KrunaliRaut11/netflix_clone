// import React, { useEffect, useState } from 'react';
import React from 'react';
// import db from '../../config/Firebase';
import "./plans.css";

function PlansScreen() {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     db.collection("products")
    //       .where("active", "==", true)
    //       .get()
    //       .then((querySnapshot) =>{
    //           const products = {};
    //           querySnapshot.forEach(async (productDoc) => {
    //               products[productDoc.id].productDoc.data();
    //               const priceSnap
    //           })
    //       })

    // }, [])
    return (
        <div className="plansScreen">
            {/* {Object.entries(products).map(([productId, productData]) => { */}
            <div className="plansScreen_plan">
            <div className="plansScreen_info">
                {/* <h5>{productData.name}</h5>
                <h6>{productData.detail}</h6> */}
                <h5>Premium</h5>
                <h6>4K</h6>
            <button >Subscribe</button>
                <h5>Basic</h5>
                <h6>720p</h6>
            <button >Subscribe</button>

                <h5>Standard</h5>
                <h6>1080p</h6>
            <button >Subscribe</button>

            </div>
        </div>
            {/* })} */}
           
        </div>
    )
}

export default PlansScreen
