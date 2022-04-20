import {Fragment} from 'react';
import { Outlet, Link } from "react-router-dom";

import './sidebar.style.scss';

const SideBar = ()=>{
    return (
        <Fragment>
            <div className="sideBar">
                <div className='sidebar-title-contaner'>
                    <div className='sidebar-title'>Platform X</div>
                </div>
                <div className="sidebar-links">
                    <Link className="sidebar-link" to={"/page1"}><span className='link-number'>1</span>Page 1</Link>
                    <Link className="sidebar-link" to={"/page2"}><span className='link-number'>2</span>Page 2</Link>
                    <Link className="sidebar-link" to={"/page3"}><span className='link-number'>3</span>Page 3</Link>                   
                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default SideBar