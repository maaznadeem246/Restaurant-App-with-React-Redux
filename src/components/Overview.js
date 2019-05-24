import React, { Component } from 'react';
import '../index.css'

const Overview = props => {
    console.log(props);
    var style={

    };

    var numTables = 0;
    for (let i = 0; i < props.tableStatusData.length; i++) {
        numTables += props.tableStatusData[i];
        
    }
    return(
            <div style={style} className='row overviewcss'>
                <div className='col'>
                    <h1 className='reshead' >Restaurant</h1>
                    <h3>Tables Available : {numTables} /16</h3>
                    <h3>Money Earned : {props.moneyEarned}</h3>
                </div>
            </div>
        
    )

}

export default Overview;