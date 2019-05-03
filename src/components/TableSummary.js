import React, { Component } from 'react';
import Table from 'react-bulma-components/lib/components/table';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import summary from '../data/checklist/summary.json'

let date_diff_indays = function(date1, date2) {
        let dt1 = new Date(date1);
        let dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
    }


class TableSummary extends Component {
    render() {
        let tableRow = Object.keys(summary["data"]).map(key => {
            let rowData = summary["data"][key]
            let pathWithId = "/sop-checklist/classes/" + rowData["class-id"]

            return (
                <tr>
                    <th>{rowData["class-id"]}</th>
                    <th>
                        <Link to={pathWithId}>
                            {rowData["class-name"]}
                        </Link>
                    </th>
                    <th>{rowData["class-type"]}</th>
                    <th>{rowData["class-topic"]}</th>
                    <th>{rowData["is-completed"]}</th>
                    <th>{rowData["class-date"]}</th>
                    <th>{rowData["current-state"]}</th>
                    <th>{rowData["status"]}</th>
                    <th>{date_diff_indays(new Date(), new Date(rowData["class-date"]))}</th>
                </tr>

            )
        })    

        return (
            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Judul Kelas</th>
                        <th>Tipe</th>
                        <th>Topik</th>
                        <th>Tuntas?</th>
                        <th>Tanggal Kelas</th>
                        <th>Status</th>
                        <th>Telat?</th>
                        <th>Sisa Hari</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRow}
                </tbody>
                <tfoot>
                    <tr>
                        <th>ID</th>
                        <th>Judul Kelas</th>
                        <th>Tipe</th>
                        <th>Topik</th>
                        <th>Tuntas?</th>
                        <th>Tanggal Kelas</th>
                        <th>Status</th>
                        <th>Telat?</th>
                        <th>Sisa Hari</th>
                    </tr>
                </tfoot>
            </Table>
        );
    }
}

export default TableSummary;