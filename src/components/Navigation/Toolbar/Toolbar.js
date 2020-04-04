import React from "react";
import styleClasses from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = (props) => (
    <header className={styleClasses.Toolbar}>
        <div className={styleClasses.Logo}><Logo/></div>
        <nav className={styleClasses.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
);

export default Toolbar;