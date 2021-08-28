import React from 'react';

const AddUser =()=>{

    return (

        <div style={{ width: '50%', marginTop: '10px' }}>
        <div className="ui  form">
            <h4 class="ui dividing header">Add User</h4>
            <div className="three fields">
                <div className="field">
                    <label>User Name</label>
                    <input name="username" placeholder="User Name" type="text" />
                </div>
                <div className="field">
                    <label>First Name</label>
                    <input name="firstname" placeholder="First Name" type="text" />
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input name="category" placeholder="lastname" type="text" />
                </div>
            </div>
            <div className="three fields">
                <div className="field">
                    <label>Email</label>
                    <input name="email" placeholder="Email" type="text" />
                </div>
                <div className="field">
                    <label>Role</label>
                    <input name="role" placeholder="Role" type="text" />
                </div>
                <div className="field">
                    <label>Social Security Number</label>
                    <input name="ssn" placeholder="SSN" type="text" />
                </div>
            </div>
            <div className="ui submit button">Add User</div>
        </div>
    </div>

    );


}

export default AddUser;