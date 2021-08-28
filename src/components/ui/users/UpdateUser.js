import React from 'react';

const UpdateUser = () => {

    return (

        <div style={{ width: '50%', marginTop: '10px' }}>
            <div className="ui  form">
                <h4 class="ui dividing header">Update User</h4>
                <div className="four fields">
                    <div className="field">
                        <label>User Id</label>
                        <input name="userId" placeholder="User Id" type="text" />
                    </div>
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
                <div className="ui submit button">Update User</div>
            </div>
        </div>

    );


}

export default UpdateUser;