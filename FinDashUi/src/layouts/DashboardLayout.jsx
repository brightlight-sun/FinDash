import Header from "./Header";
import Sidebar from './SideBar';
const DashboardLayout = ({children}) =>  {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3 p-0">
                    <Sidebar/>
                </div>
                <div className="col-9 p-0">
                    <Header/>

                    <div className="p-4">
                    {children}
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default DashboardLayout;