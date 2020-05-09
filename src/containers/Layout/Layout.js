import React, {Component} from "react";
import styleClasses from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";

class Layout extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styleClasses.Content}>
                    <Toolbar isAuth={this.props.isAuthenticated}/>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
};

export default Layout;