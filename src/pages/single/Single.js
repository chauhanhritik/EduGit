import './single.css'
import Sidebar from "../../components/sidebar/Sidebar"
import Singlepost from '../../components/singlepost/Singlepost'

export default function single() {
    return (
        <div className='single' >
            
            <Singlepost/>
            <Sidebar/>
        </div>
    )
}
