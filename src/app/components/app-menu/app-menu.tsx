import React from 'react';
import { NavLink } from "react-router-dom";


import './_app-menu.scss';

export default function AppMenu() {
    const applyNavClass =  (navData: any) => {
        return navData.isActive ? 'nav-item nav-link active menu-item' : 'nav-item nav-link menu-item'
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <a className="navbar-brand" href="!#">Navbar</a>*/}
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={applyNavClass} to="/home"
                             >Home</NavLink>
                        <NavLink  className={applyNavClass} to="/feature"
                             >Feature</NavLink>
                        <NavLink  className={applyNavClass} to="/counter"
                             >Counter</NavLink>
                        <NavLink className={applyNavClass} to="/user"
                             >User</NavLink>
                        <NavLink className={applyNavClass} to="/entryForm"
                        
                        >Form Validation</NavLink>
                        {/*<Link className="nav-item nav-link active menu-item" to="/todos" >To do</Link>*/}
                        <NavLink  className={applyNavClass}  to="/todos" >To do</NavLink>
                        <NavLink className={applyNavClass}  to="/topics"
                            
                        >Nested Routes</NavLink>
                        <NavLink className={applyNavClass}  to="/aiurea"
                           
                        >Aiurea</NavLink>
                        <NavLink className="nav-item nav-link active menu-item" to="/flipCard"
                           
                        >Flip Card</NavLink>
                        <NavLink className={applyNavClass}  to="/test/LiviuCornea"
                            
                        >test</NavLink>
                        <NavLink className={applyNavClass}  to="/posts/JhonSmith"
                            
                        >post</NavLink>
                        
                        {/* <a className="nav-item nav-link disabled menu-item" href="!#" aria-disabled="true">Disabled</a>*/}
                    </div>
                </div>
            </nav>
        </div>
    )
}
