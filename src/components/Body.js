import React from "react";
import DetailsContainer from "../containers/DetailsContainer.js";
import Layout from "./Layout.js";
import Menu from "./Menu.js";

const Body = () => {
    var style = {
        display: "flex",
        flexWrap:"nowrap",
        flexDirection:'row',
        alignItems:'strectch'
    };
    return (
        <div style={style} className='row'>
       
            <DetailsContainer />
            <Menu />
            <Layout />
        </div>
    );
};

export default Body;
