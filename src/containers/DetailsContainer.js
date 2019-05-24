import {connect} from "react-redux";
import Details from "../components/Details.js"

const mapStateToPorps = state => {
    return {
        selectedTable : state.selectedTable,
        items: state.tableData[state.selectedTable]
    };
}

const DetailsContainer = connect(mapStateToPorps,null)(Details);

export default DetailsContainer;