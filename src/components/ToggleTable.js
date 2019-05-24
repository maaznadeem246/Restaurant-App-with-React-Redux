import React from "react";

const ToggleTable = props => {
    var style = {
        backgroundColor: props.selectedTable !== null ? "rgb(190, 209, 209)" : null
    }
    return (
        <div>
            <button className='toggletablebutton'
                style={style}
                disabled={props.selectedTable === null}
                onClick={() => props.onToggle(props.selectedTable, props.tableData)}
            >

                {props.tableStatus ? "Check Out" : "Check In"}
            </button>
        </div>
    );
};


export default ToggleTable;
