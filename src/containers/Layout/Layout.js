import React, {Component} from "react";
import styleClasses from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <main className={styleClasses.Content}>
                    <Toolbar/>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
};

export default Layout;