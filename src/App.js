import React, { useState } from 'react';
import Papa from 'papaparse';
import Table from "./components/table";
import CodeEditor from '@uiw/react-textarea-code-editor';

const App = () => {
    const [code, setCode] = React.useState('');
    const [CSVData, setCSVData] = useState();
    const [CSVHeader, setCSVHeader] = useState([]);
    //const [selectedQuery, setSelectedQuery] = useState(0);
    const predefinedQueries = [
        {
            name: 'All Users',
            query: 'Select * from Users;'
        },
        {
            name: 'All Orders',
            query: 'Select * from Orders;'
        },
        {
            name: 'Top 5 orders',
            query: 'Select * from Orders order by time desc limit 5;'
        }
    ]

    const commonConfig = { delimiter: "," };
    const fetchResults = () => {
        Papa.parse(
            "/data/orders.csv",
            {
                ...commonConfig,
                header: true,
                download: true,
                complete: (result) => {
                    setCSVData(result.data);
                    setCSVHeader(result.meta.fields);
                }
            }
        );
    }
    const dropdownChange = (event) => {
        setCode(event.target.value);
        fetchResults();
    }
    return (
        <>
            <select onChange={dropdownChange}>
                {predefinedQueries.map((item, index) => {
                    return <option key={index} value={item.query}>{item.name}</option>;
                })}
            </select>
            <CodeEditor
                value={code}
                language="sql"
                placeholder="Please enter SQL code."
                onChange={(evn) => setCode(evn.target.value)}
                padding={15}
                style={{
                    fontSize: 12,
                    backgroundColor: "#f5f5f5",
                    fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                }}
            />
            <input onClick={fetchResults} type='button' value='RUN' />
            <Table data={CSVData} meta={CSVHeader}/>
        </>
    );
};
export default App

