import React from "react";

const OrderButton = props => {
    var style = {

        width: 80,
        height: 80,
        
        margin: 15,
      
    };
    return (
        <div>
            <button
                disabled={
                    props.selectedTable === null ||
                    props.tableStatusData[props.selectedTable] === false
                }
                onClick={() =>
                    props.onAdd(props.name, props.price, props.selectedTable)
                }
                style={style}
            >
                {props.name} {props.price}rs
            </button>
        </div>
    );
};

export default OrderButton;
    