import React from 'react';
import Login from './ui/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './ui/Home';
import Authenticated from './ui/Authenticated';
class App extends React.Component {

    state={ loggedIn : false};

     setLoggedIn=(isLoggedIn)=>{
        this.setState({loggedIn : isLoggedIn});
    }

    render() {
       
        if(this.state.loggedIn){
          
            return <div> <Authenticated setLoggedIn={this.setLoggedIn}/> </div>
        }
        else {
            return <div> <Login  setLoggedIn={this.setLoggedIn} /> </div>
           
        
           
        }




        

    }



}

export default App;