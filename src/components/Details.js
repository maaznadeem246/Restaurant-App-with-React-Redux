import React from "react";
import OrderListContainer from "../containers/OrderListContainer.js";
import ToggleTableContainer from "../containers/ToggleTableContainer.js";

const Details = props => {
    var style = {
        

    };

    var total = 0;
    if (props.selectedTable !== null) {
        for (let i = 0; i < props.items.length; i++) {
            total += props.items[i].price;
        }
    }
    return (
        <div className='detailscont' style={style}>
            <h1>Table Details</h1>
            <h3 className='tablencss' >Table : {props.selectedTable}</h3>
            <ToggleTableContainer />

            <h3>Bill Total: {total}</h3>
            <div className='orderlis'>
            <h3>Orders: </h3>
            <OrderListContainer />
            </div>
        </div>
    );
};

export default Details;
