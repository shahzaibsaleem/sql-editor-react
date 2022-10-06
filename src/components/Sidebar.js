import { Tree } from 'primereact/tree';
import { tableInfo } from '../Constants'

const Sidebar = () => {
    return <Tree value={tableInfo} expandedKeys={['0','1','2']}/>
}

export default  Sidebar;
