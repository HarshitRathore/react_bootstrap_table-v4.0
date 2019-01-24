import React from 'react';
import './CompleteTable.css';
import TableRows from './TableRows.js';
import { test1, test2, test3, test4 } from './fakeData';

function Modal() {
    return (
        <div className="modal fade" id="detailModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content curve-edge-5">
                    <div className="modal-header">
                        <span className="modal-title my-modal-title" id="exampleModalLongTitle">Data</span>
                    </div>
                    <div className="modal-body" id="detail-body">
                        Row Data
                    </div>
                </div>
            </div>
        </div>
    );
}

var data_array = [test1, test2, test3, test4];
var choose = false;
var openToday = true;
var openYesterday = true;

class CompleteTable extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickCollapse = this.handleClickCollapse.bind(this);
    }
    handleClick(event) {
        choose = !(event.target.name === "open");
        this.forceUpdate();
    }
    handleClickCollapse(event) {
        if (event.target.name === "Today") {
            openToday = !openToday;
        }
        else {
            openYesterday = !openYesterday;
        }
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <div id="top_bar" className="row mb-4 theme-topbar">
                    <div className="align-self-left col-sm-6">
                        <button type="button" className="btn btn-outline-primary btn-lg hide-border" name="open" onClick={this.handleClick}>Open Incidents</button>
                        <button type="button" className="btn btn-outline-primary btn-lg hide-border" name="close" onClick={this.handleClick}>Closed Incidents</button>
                    </div>
                    <div className="input-group sm-3 col-sm-6">
                        <input type="text" className="form-control form-rounded show-border trans-back" placeholder="Search Incident box" aria-label="Search" aria-describedby="basic-addon2" />
                    </div>
                </div>
                <div className="table-responsive-sm mt-2 mb-2 ml-3 mr-3">
                    <table className="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Serial No.</th>
                                <th scope="col">Reference No.</th>
                                <th scope="col">Created Time</th>
                                <th scope="col">Updated Time</th>
                                <th scope="col">Subject</th>
                                <th scope="col">Source</th>
                            </tr>
                        </thead>
                        <tbody id="my-tbody">
                            <tr className="table-active">
                                <th colSpan="6">
                                    <button type="button" name="Today" onClick={this.handleClickCollapse} className="btn btn-outline-dark btn-sm hide-border">
                                        {openToday
                                            ? <i className="fa fa-caret-up" aria-hidden="true"></i>
                                            : <i className="fa fa-caret-down" aria-hidden="true"></i>} Date: Today
                                    </button>
                                </th>
                            </tr>
                            {openToday
                                ? data_array[choose + 0].map((person, index) => <TableRows key={index} data={person} index={index} />)
                                : (<tr></tr>)}
                            <tr className="table-active">
                                <th colSpan="6">
                                    <button type="button" name="Yesterday" onClick={this.handleClickCollapse} className="btn btn-outline-dark btn-sm hide-border">
                                        {openYesterday
                                            ? <i className="fa fa-caret-up" aria-hidden="true"></i>
                                            : <i className="fa fa-caret-down" aria-hidden="true"></i>} Date: Yesterday
                                    </button>
                                </th>
                            </tr>
                            {openYesterday
                                ? data_array[choose + 2].map((person, index) => <TableRows key={index} data={person} index={index} />)
                                : (<tr></tr>)}
                        </tbody>
                    </table>
                </div>
                <Modal />
            </div>
        );
    }
}

export default CompleteTable;
