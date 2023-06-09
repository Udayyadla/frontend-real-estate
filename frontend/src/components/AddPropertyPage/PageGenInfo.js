import Sidenav from "../Dashboard/Sidenav";
import UpperNav from "../Dashboard/UpperNav";
import GeneralInfo from "../PropertyComponent/GeneralInfo";
import Menubar from "../PropertyComponent/Menubar";

function PageGenInfo() {
  return (
    <div className="home">
      <div className="side-nav">
        <Sidenav/>
      </div>
      <div className="display">
        <UpperNav/>
        <div className="dashboard">
          <Menubar />
          <GeneralInfo />
        </div>
      </div>
    </div>
  );
}
export default PageGenInfo;
