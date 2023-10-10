import $ from 'jquery';

// import { fmt } from '@/components/libs/fmt';
import 'datatables.net';
// import {makeRoundedBar} from "../javascripts/roundedBarChar.js";

let _tables = {};
export function makeTable(id, data) {
    var table = _tables[id];
    if (table) {
        table.clear();
        table.rows.add(data);
        table.draw();
    }
}

export function setupTable(id, lenght) {
    let table = id;
    const cls = [
        { data: "proyecto"},
        { data: "activos"},
        { data: "inactivos" },
        { data: "total"},
    ];

    if (_tables[table]) {
        _tables[table].destroy();
    }

    _tables[table] = $("#" + table).DataTable({
        responsive: true,
        "bLengthChange": true, //thought this line could hide the LengthMenu
        "bInfo": true,
        "paging": true, // Para desactivar la paginación
        "searching": true,
        "pageLength": lenght,
        columns: cls,
    });
    console.log(_tables);
}