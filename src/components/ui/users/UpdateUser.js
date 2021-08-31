import React, { Component } from 'react';
import { libraryApi } from '../../../api/libraryApi';
class UpdateUser extends Component {

    state = {
        id: '',
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        role: '',
        ssn: ''
    }


    udpateThisUser = async () => {

        if(this.state.id && (this.state.username  || this.state.firstname ||  this.state.lastname ||  this.state.email
            || this.state.role || this.state.ssn)){
        try {
            const response = await libraryApi.put(
                "/users/"+this.state.id,
                {
                    username: this.state.username,
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    email: this.state.email,
                    role: this.state.role,
                    ssn: this.state.ssn
                }

            );
            if (response.status == '200') {
                alert('User is updated successfully');
            }

        } catch (e) {
            console.error(e.response);
            alert('Something went wrong');
        }
    } else {
        alert("please provide all fields");
        return;
    }

    }




    render() {

        return (

            <div style={{ width: '50%', marginTop: '10px' }}>
                <div className="ui  form">
                    <h4 class="ui dividing header">Update User</h4>
                    <div className="four fields">
                        <div className="field">
                            <label>User Id</label>
                            <input name="userId" placeholder="User Id" type="text" onChange={e=>this.setState({id: e.target.value})}/>
                        </div>
                        <div className="field">
                            <label>User Name</label>
                            <input name="username" placeholder="User Name" type="text" onChange={e=>this.setState({username: e.target.value})}/>
                        </div>
                        <div className="field">
                            <label>First Name</label>
                            <input name="firstname" placeholder="First Name" type="text" onChange={e=>this.setState({firstname: e.target.value})}/>
                        </div>
                        <div className="field">
                            <label>Last Name</label>
                            <input name="lastname" placeholder="Last Name" type="text" onChange={e=>this.setState({lastname: e.target.value})}/>
                        </div>
                    </div>
                    <div className="three fields">
                        <div className="field">
                            <label>Email</label>
                            <input name="email" placeholder="Email" type="text" onChange={e=>this.setState({email: e.target.value})}/>
                        </div>
                        <div className="field">
                            <label>Role</label>
                            <input name="role" placeholder="Role" type="text" onChange={e=>this.setState({role: e.target.value})}/>
                        </div>
                        <div className="field">
                            <label>Social Security Number</label>
                            <input name="ssn" placeholder="SSN" type="text" onChange={e=>this.setState({ssn: e.target.value})}/>
                        </div>
                    </div>
                    <div className="ui submit button" style={{backgroundColor: '#ff6936', color: 'white'}}  onClick={this.udpateThisUser}>Update User</div>
                </div>
            </div>

        );

    }


}

export default UpdateUser;