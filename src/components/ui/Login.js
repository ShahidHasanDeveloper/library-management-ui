import React from 'react';
import '../../style/library-style.css';
import HeaderLogo from './HeaderLogo';
import { libraryApi } from '../../api/libraryApi';
import books from '../../static/images/books.jpg'

class Login extends React.Component {

    state = { username: "", password: "" };


    onFormSubmit = (event) => {
        event.preventDefault();

     
//dummy authentications start

        if(this.state.username==='admin' && this.state.password==='admin'){
            this.props.setLoggedIn(true);
        }
        else{
            this.props.setLoggedIn(false);
        }
//ends
        // define user athentication  - left for now 

        /*  libraryApi.get("/users/login")
                       .then(
                           (response)=>{
                                   console.log(response);
                           }
                       ) */


    }


    render() {

        return (
            <div className="lib_login_background">
                <div className="center">
                    <div className="ui card"  >
                        <div className="ui segment" style={{ backgroundColor: '#FEFEF4' }}>
                            <HeaderLogo logo={books} />
                            <form className="ui form" onSubmit={this.onFormSubmit} >
                                <div className="field">
                                    <label htmlFor="username" style={{ color: 'red' }}>Username:</label>
                                    <input id="username" type="text" onChange={e => this.setState({ username: e.target.value })} />
                                    <label htmlFor="password" style={{ color: 'red' }}>Password:</label>
                                    <input id="password" type="password" onChange={e => this.setState({ password: e.target.value })} />
                                </div>
                                <button className="ui primary button" type="Submit" style={{ color: 'white', backgroundColor: '#ff6936', position: 'relative', left: '30%' }} >Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        )




    }
}

export default Login;