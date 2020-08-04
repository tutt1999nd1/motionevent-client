import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div>
        {/* Bootstrap NavBar */}
        {/*<nav className="navbar navbar-expand-md navbar-dark bg-primary">*/}
        {/*  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">*/}
        {/*    <span className="navbar-toggler-icon" />*/}
        {/*  </button>*/}
        {/*  <a className="navbar-brand" href="#">*/}
        {/*    <img src="https://v4-alpha.getbootstrap.com/assets/brand/bootstrap-solid.svg" width={30} height={30} className="d-inline-block align-top" alt="" />*/}
        {/*    <span className="menu-collapsed">My Bar</span>*/}
        {/*  </a>*/}
        {/*  <div className="collapse navbar-collapse" id="navbarNavDropdown">*/}
        {/*    <ul className="navbar-nav">*/}
        {/*      <li className="nav-item active">*/}
        {/*        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>*/}
        {/*      </li>*/}
        {/*      <li className="nav-item">*/}
        {/*        <a className="nav-link" href="#">Features</a>*/}
        {/*      </li>*/}
        {/*      <li className="nav-item">*/}
        {/*        <a className="nav-link" href="#">Pricing</a>*/}
        {/*      </li>*/}
        {/*      /!* This menu is hidden in bigger devices with d-sm-none.*/}
        {/*   The sidebar isn't proper for smaller screens imo, so this dropdown menu can keep all the useful sidebar itens exclusively for smaller screens  *!/*/}
        {/*      <li className="nav-item dropdown d-sm-block d-md-none">*/}
        {/*        <a className="nav-link dropdown-toggle" href="#" id="smallerscreenmenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">*/}
        {/*          Menu*/}
        {/*        </a>*/}
        {/*        <div className="dropdown-menu" aria-labelledby="smallerscreenmenu">*/}
        {/*          <a className="dropdown-item" href="#">Dashboard</a>*/}
        {/*          <a className="dropdown-item" href="#">Profile</a>*/}
        {/*          <a className="dropdown-item" href="#">Tasks</a>*/}
        {/*          <a className="dropdown-item" href="#">Etc ...</a>*/}
        {/*        </div>*/}
        {/*      </li>/!* Smaller devices menu END *!/*/}
        {/*    </ul>*/}
        {/*  </div>*/}
        {/*</nav>/!* NavBar END *!/*/}
        {/*/!* Bootstrap row *!/*/}
        <div className="row" id="body-row">
          {/* Sidebar */}
          <div id="sidebar-container" className="sidebar-expanded d-none d-md-block">{/* d-* hiddens the Sidebar in smaller devices. Its itens can be kept on the Navbar 'Menu' */}
            {/* Bootstrap List Group */}
            <ul className="list-group">
              {/* Separator with title */}
              <li className="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
                <small>Bảng điều khiển</small>
              </li>
              {/* /END Separator */}
              {/* Menu with submenu */}
              <a href="#submenu1" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                <div className="d-flex w-100 justify-content-start align-items-center">
                  <span className="menu-collapsed">Quản lý sự kiện</span>
                  <span className="submenu-icon ml-auto" />
                </div>
              </a>
              {/* Submenu content */}
              <div id="submenu1" className="collapse sidebar-submenu">
                <a href="#" className="list-group-item list-group-item-action bg-dark text-white" >
                  <span className="menu-collapsed">Camera</span>
                </a>
                <a href="#" className="list-group-item list-group-item-action bg-dark text-white">
                  <span className="menu-collapsed">Hệ thống</span>
                </a>
                <a href="#submenu2" data-toggle="collapse" aria-expanded="false" className="bg-dark list-group-item list-group-item-action flex-column align-items-start">
                  <div className="d-flex w-100 justify-content-start align-items-center">
                    <span className="menu-collapsed">Sự kiện</span>
                    <span className="submenu-icon ml-auto" />
                  </div>
                </a>
              </div>
              <div id="submenu2" className="collapse sidebar-submenu" >

                <a id="1" href="#" className="list-group-item list-group-item-action bg-dark text-white" style={{paddingLeft: '40px'}}>
                  <span className="menu-collapsed">Motion detect</span>
                </a>
                <a id="1" href="#" className="list-group-item list-group-item-action bg-dark text-white" style={{paddingLeft: '40px'}}>
                  <span className="menu-collapsed">Face detect </span>
                </a>
                <a id="1" href="#" className="list-group-item list-group-item-action bg-dark text-white" style={{paddingLeft: '40px'}}>
                  <span className="menu-collapsed">Biển số detect</span>
                </a>
              </div>



            </ul>{/* List Group END*/}
          </div>{/* sidebar-container END */}
          {/* MAIN */}
          <div className="col">
          <div>
            <table
                id="table"
                data-toggle="table"
                data-search="true"
                data-show-columns="true"
                data-pagination="true"
            >

              <thead>
                <th >Thứ tự</th>
                <th >Thông tin camera</th>
                <th >Biển số xe</th>
                <th >Thời gian</th>
                <th >Hành động</th>
              </thead>
              <tbody>
              <tr>
                <th >1</th>
                <td>VTCAMERA1</td>
                <td>43F1-123.10</td>
                <td>04/08/2020 9:59:00</td>
                <td>Hành động</td>
              </tr>
              </tbody>
            </table>
          </div>


          </div>{/* Main Col END */}
        </div>{/* body-row END */}
      </div>
  );
}

export default App;
