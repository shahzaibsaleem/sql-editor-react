import React from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const Table = ({data, meta}) => {

    const headerRender = meta.map((item, index) => {
        return <Column key={index} field={item} header={item} style={{ minWidth: '200px' }}></Column>;
    })
    return (
        <div>
            <div className="card">
                <DataTable value={data} scrollable scrollHeight="400px" virtualScrollerOptions={{ itemSize: 50 }}>
                    {headerRender}
                </DataTable>
            </div>
        </div>
    );
}
export default Table;
