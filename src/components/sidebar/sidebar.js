import PersonIcon from '@material-ui/icons/Person';
import LineStyleIcon from '@material-ui/icons/LineStyle';
import ClassIcon from '@material-ui/icons/Class';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
      <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
        <div className="sidebar__title">
          <div className="sidebar__img">
            <h1>KenDel</h1> 
            
          </div>
          <ArrowBackIosIcon  onClick={() => closeSidebar()}  id="sidebarIcon"/>
          
        </div>
  
        <div className="sidebar__menu">
           <div className ="sidebar__link">
         
             <a href = "/">  <PersonIcon className = "i_con" /> Profile</a>

           </div>
          <div className="sidebar__link active_menu_link " >
            <LineStyleIcon className = "i_con" />
            <a href="/">Dashboard</a>
          </div>
          <h2>Main</h2>
          <div className="sidebar__link">
          <ClassIcon className = "i_con" />
            <a href="/">Classes</a>
          </div>
          <div className="sidebar__link">
          <GroupIcon className = "i_con" />
            <a href="/">Staff</a>
          </div>
          <div className="sidebar__link">
          <PeopleAltIcon className = "i_con" />
            <a href="/">Student</a>
          </div>
          <div className="sidebar__link">
          <LibraryBooksIcon className = "i_con" />
            <a href="/">Exam</a>
          </div>
          <div className="sidebar__link">
          <FileCopyIcon className = "i_con" />
            <a href="#/">Curricullum</a>
          </div>
          <div className="sidebar__link">
          <AssignmentIcon className = "i_con" />
            <a href="/">Time Table</a>
          </div>
          <div className="sidebar__link">
          <RecentActorsIcon className = "i_con" />
            <a href="/">Attendance</a>
          </div>
          <h2>Others</h2>
          <div className="sidebar__link">
          <SettingsIcon className = "i_con" />
            <a href="/">Settings</a>
          </div>
          <div className="sidebar__link">
          <ExitToAppIcon className = "i_con" />
            <a href="/">LogOut</a>
          </div>
>
        </div>
      </div>
    );
  };
  
  export default Sidebar;