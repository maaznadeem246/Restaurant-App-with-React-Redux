import React from "react";
import OrderButtonContainer from "../containers/OrderButtonContainer.js";

const Menu = () => {
    var style = {
        flex:3,
        display: 'flex',
        width: "100%",
        alignContent: "space-around",
        justifyContent: "center",
        flexWrap: "wrap",

    };
    var stylem = {
        display:'flex',
        order: 2,
        width: "100%",
        height: 480,
        paddingTop: 20,
        flexDirection: 'column'
    }

    var stylehead = {
        flex:1,
        display:"flex",
        justifyContent: 'center',
        alignItem: "center",
 
        width:"100%"
    }
    return (
        <div style={stylem}>
            <div styel={stylehead}><h2 style={{ textAlign: 'center',}} >Menu</h2></div>
        <div style={style}> 
            
            <OrderButtonContainer name="Burger" price={5} />
            <OrderButtonContainer name="Pizza" price={3} />
            <OrderButtonContainer name="Fries" price={1} />
            <OrderButtonContainer name="Water" price={0} />
            <OrderButtonContainer name="Donut" price={1} />
            <OrderButtonContainer name="Tea" price={1} />
            <OrderButtonContainer name="Pork" price={4} />
            <OrderButtonContainer name="Steak" price={7} />
            <OrderButtonContainer name="Zinger Burger" price={4} />
            <OrderButtonContainer name="Milk" price={2} />
            <OrderButtonContainer name="Salad" price={3} />
            <OrderButtonContainer name="Fruit" price={2} />
            <OrderButtonContainer name="Eggs" price={1} />
            <OrderButtonContainer name="Sandwich" price={7} />
            <OrderButtonContainer name="Chiken Tikka" price={3} />
            <OrderButtonContainer name="Chiken Sandwich" price={3} />
            <OrderButtonContainer name="Pasta Sandwich" price={3} />
            <OrderButtonContainer name="Italian Sandwich" price={3} />
            <OrderButtonContainer name="Sandwich" price={3} />
            <OrderButtonContainer name="Sandwich with Mayo" price={3} />
            <OrderButtonContainer name="Fruit chat" price={2} />
        </div>
        </div>
    );
};

export default Menu;
