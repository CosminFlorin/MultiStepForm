import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Succes extends Component {
    continue =e =>{
        e.preventDefault();

        // send data to api
        this.props.nextStep();
    }
    back = e =>{
        e.preventDefault();
        this.props.prevStep()
    };
    render() {
       

        return ( 
            <MuiThemeProvider>
                <React.Fragment >

                    <AppBar title="Succes" />
                   <h1>Thank you for your submition</h1>
                   <p>You will get an email with further instructions</p>
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const styles= {
    button:{
        margin:15
    }
}
export default Succes;
