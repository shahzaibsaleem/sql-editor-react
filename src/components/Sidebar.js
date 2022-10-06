import { Tree } from 'primereact/tree';
import { tableInfo } from '../Constants'

const Sidebar = () => {
    return (
        <>
            <h3>Available Tables</h3>
            <Tree value={tableInfo} expandedKeys={['0','1','2']}/>
        </>
    );
}

export default  Sidebar;
