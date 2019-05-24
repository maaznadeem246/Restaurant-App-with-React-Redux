import { connect } from "react-redux"

import Overview from "../components/Overview.js"

const mapStateToProps = state =>{
    return {
        moneyEarned: state.moneyEarned,
        tableStatusData: state.tableStatusData
    };
}

const mapDispatchToProps = dispatch => {
    
}

const OverviewContaner = connect(mapStateToProps,null)(Overview);

export default OverviewContaner;

