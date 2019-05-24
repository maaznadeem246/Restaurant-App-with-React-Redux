import React from "react";

const TableButton = props => {
    var style = {
        width: 62,
        height: 62,
        margin: 6,
        fontSize:25,
        justifyContent:"center",

 
        backgroundColor: props.tableStatusData[props.id] === true   ? "rgb(190, 209, 209)" :  null,
        border: props.selectedTable === props.id ? "5px solid black" : null,

    };
    console.log(props.tableStatusData)
    return (
        <div>
            <button onClick={() => props.onSelect(props.id)} style={style}>
                {props.tbname}

            </button>
        </div>
    );
};

export default TableButton;
