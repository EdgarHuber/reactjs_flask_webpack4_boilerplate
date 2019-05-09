import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

let $ = require('jquery');

class CenteredGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
        this.getFlaskData = this.getFlaskData.bind(this);
    }

    getFlaskData(){
        $.get(window.location.href + 'backend', (data) => {
            data = JSON.parse(data);
            this.setFlaskData(data);
        });
    }

    setFlaskData(data) {
        this.setState({ value: data });
    }

    componentDidMount() {
        this.getFlaskData();
    }

    render() {
        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <img src={require('../images/header.jpg')} style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs= {12} sm={6}>
                        <Paper className="paperContent">Random number: { this.state.value }</Paper>
                    </Grid>
                    <Grid item xs= {12} sm={6}>
                        <Paper className="paperContent">xs=6</Paper>
                    </Grid>
                    <Grid item xs= {6} sm={3}>
                        <Paper className="paperContent">xs=3</Paper>
                    </Grid>
                    <Grid item xs= {6} sm={3}>
                        <Paper className="paperContent">xs=3</Paper>
                    </Grid>
                    <Grid item xs= {6} sm={3}>
                        <Paper className="paperContent">xs=3</Paper>
                    </Grid>
                    <Grid item xs= {6} sm={3}>
                        <Paper className="paperContent">xs=3</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default CenteredGrid;