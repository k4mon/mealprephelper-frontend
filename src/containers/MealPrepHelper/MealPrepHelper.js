import React, {Component} from "react";
import styleClasses from "./Layout.module.css";

class MealPrepHelper extends Component {
    render() {
        return (
            <React.Fragment>
                <main className={styleClasses.Content}>
                    {this.props.children}
                </main>
            </React.Fragment>
        );
    }
};

export default MealPrepHelper;