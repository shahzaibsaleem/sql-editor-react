import React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Table = ({data, meta}) => {

    const headerRender = meta.map((item) => {
        return <Column field={item} header={item} style={{ minWidth: '200px' }}></Column>;
    })
    return (
        <div>
            <div className="card">
                <h5>Preloaded Data (100000 Rows)</h5>
                <DataTable value={data} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 46 }}>
                    {headerRender}
                </DataTable>
            </div>
        </div>
    );
}
export default Table;
