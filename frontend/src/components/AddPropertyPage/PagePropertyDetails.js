import Sidenav from "../Dashboard/Sidenav";
import UpperNav from "../Dashboard/UpperNav";
import Menubar from "../PropertyComponent/Menubar";
import PropertyDetails from "../PropertyComponent/propertyDetails";

const  PagePropertyDetails= () => {
    return (
        <div className="home">
            <div className="side-nav">
                <Sidenav/>
            </div>
            <div className="display">
                <UpperNav/>
                <div className='dashboard'>

                <Menubar/>
                <PropertyDetails/>
                </div>
            </div>

        </div>

    )
}
export default PagePropertyDetails;
