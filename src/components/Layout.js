import React from "react";
import TableButtonContainer from "../containers/TableButtonContainer.js";

const Layout = () => {
   

    var style = {
        flex: 3,
        display: 'flex',
        width: "100%",
        alignContent: "space-around",
        justifyContent: "center",
        flexWrap: "wrap",

    };
    var stylem = {
        display: 'flex',
        order: 2,
        width: "40%",
        height: 480,
        paddingTop: 20,
        flexDirection: 'column'


    }

    var stylehead = {
        flex: 1,
        display: "flex",
        justifyContent: 'center',
        alignItem: "center",

        width: "100%"
    }



    return (
        <div style={stylem}>
            <div styel={stylehead}><h2 style={{ textAlign: 'center', }} >Tables</h2></div>
            <div style={style}> 
          <TableButtonContainer tbname={0} id={0} />
            <TableButtonContainer tbname={1} id={1} />
            <TableButtonContainer tbname={2} id={2} />
            <TableButtonContainer tbname={3} id={3} />
            <TableButtonContainer tbname={4} id={4} />
            <TableButtonContainer tbname={5} id={5} />
            <TableButtonContainer tbname={6} id={6} />
            <TableButtonContainer tbname={7} id={7} />
            <TableButtonContainer tbname={8} id={8} />
            <TableButtonContainer tbname={9} id={9} />

            <TableButtonContainer tbname={11} id={10} />
            <TableButtonContainer tbname={12} id={11} />
            <TableButtonContainer tbname={13} id={12} />
            <TableButtonContainer tbname={14} id={13} />
            <TableButtonContainer tbname={15} id={14} />
            <TableButtonContainer tbname={16} id={15} />
        </div>
        </div>
    );
};

export default Layout;
