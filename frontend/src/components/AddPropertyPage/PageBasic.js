import Sidenav from "../Dashboard/Sidenav";
import UpperNav from "../Dashboard/UpperNav";
import BasicInfo from "../PropertyComponent/BasicInfo";
import Menubar from "../PropertyComponent/Menubar";

function PageBasic(){
return (
    <div className="home">
        <div className="side-nav">
            <Sidenav/>
        </div>
        <div className="display">
            <UpperNav/>
            <div className='dashboard'>
            <Menubar/>
            <BasicInfo/>
            </div>
        </div>

    </div>

)
}
export default PageBasic;