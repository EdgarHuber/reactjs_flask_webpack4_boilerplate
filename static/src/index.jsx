import React from "react";
import ReactDOM from "react-dom";

import CenteredGrid from './Components/Grid';
import './styles.css';

class App extends React.Component {
    render() {
        return(
            <div>
                <CenteredGrid />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("content"));