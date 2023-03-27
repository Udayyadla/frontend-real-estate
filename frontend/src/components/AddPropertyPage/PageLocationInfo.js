import Sidenav from "../Dashboard/Sidenav";
import UpperNav from "../Dashboard/UpperNav";
import LocationInfo from "../PropertyComponent/LocationInfo";
import Menubar from "../PropertyComponent/Menubar";

function PageLocationInfo() {
  return (
    <div className="home">
      <div className="side-nav">
        <Sidenav/>
      </div>
      <div className="display">
        <UpperNav/>
   
        <div className="dashboard">
          <Menubar />
          <LocationInfo />
        </div>
      </div>
    </div>
  );
}
export default PageLocationInfo;
