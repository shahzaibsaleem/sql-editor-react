import React, { useState } from 'react';
import Papa from 'papaparse';
import CodeEditor from '@uiw/react-textarea-code-editor';
import Table from "./components/Table";
import Sidebar from "./components/Sidebar";
import {predefinedQueries, csvPaths} from "./Constants";

const App = () => {
    const [code, setCode] = React.useState('');
    const [CSVData, setCSVData] = useState();
    const [CSVHeader, setCSVHeader] = useState([]);


    /* These queries are just for displaying in the UI, They are not correct in terms of accuracy */


    const commonConfig = { delimiter: "," };
    const fetchResults = () => {
        const path = csvPaths[Math.floor(Math.random() * csvPaths.length)] //randomly select a csv to render
        Papa.parse(
            `/data/${path}`,
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
            <div>
                <Sidebar />
            </div>
            <div>
                <h3>Select any query</h3>
                <select onChange={dropdownChange}>
                    {predefinedQueries.map((item, index) => {
                        return <option key={index} value={item.query}>{item.name}</option>;
                    })}
                </select>
                <h3>Input</h3>
                <CodeEditor
                    value={code}
                    language="sql"
                    placeholder="Please enter your query"
                    onChange={(evn) => setCode(evn.target.value)}
                    padding={15}
                    style={{
                        fontSize: 12,
                        backgroundColor: "#f5f5f5",
                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                    }}
                />
                <input onClick={fetchResults} disabled={code === ''} type='button' value='RUN' />
                {code !== '' ? <input onClick={() => setCode('')} type='button' value='Clear' /> : ''}
                <h3>Output</h3>
                <Table data={CSVData} meta={CSVHeader}/>
            </div>
        </>
    );
};
export default App

