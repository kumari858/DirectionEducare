import './App.css';
import Sidebar from './components/sidebar/sidebar';
import React ,{useState} from 'react';
function App() {
    const [sidebarOpen, setSidebar] = useState(false);
   const openSidebar = () =>{
     setSidebar(true);
   };
   const closeSidebar = () => {
     setSidebar(false);
   };

  return (
    <div className="container">
        {/* <Navbar sidebarOpen = {sidebarOpen} openSidebar ={openSidebar}/ >
         <Main /> */}
         <Sidebar sidebarOpen = {sidebarOpen} closeSidebar={closeSidebar}/ >
   </div>

  );
}

export default App;
