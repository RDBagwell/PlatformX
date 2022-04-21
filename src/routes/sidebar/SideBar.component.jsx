import {Fragment} from 'react';
import { Outlet, NavLink } from "react-router-dom";

import './sidebar.style.scss';

const SideBar = ()=>{
    return (
        <Fragment>
            <div className="sideBar">
                <div className='sidebar-title-contaner'>
                    <div className='sidebar-title'>Platform X</div>
                </div>
                <div className="sidebar-links">
                    <NavLink className="sidebar-link" to={"/page1"} ><div className='link-number'>1</div>Page 1</NavLink>
                    <NavLink className="sidebar-link" to={"/page2"} ><div className='link-number'>2</div>Page 2</NavLink>
                    <NavLink className="sidebar-link" to={"/page3"} ><div className='link-number'>3</div>Page 3</NavLink>                   
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default SideBar