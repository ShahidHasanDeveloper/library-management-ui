import React, { useState } from 'react';
import { libraryApi } from '../../../api/libraryApi';



const DeleteUser = () => {

    const [userId, setUserId] = useState('');
    const [username, setUsername] = useState('');

    const getUsername = async () => {

        setUsername('');
        if (userId) {
            try {
                const { data } = await libraryApi.get("/users/" + userId);
                if (data) {

                    setUsername(data.user.username);
                }

            } catch (e) {
                console.error(e.response);
                if (e.response.status == '404') {
                    alert('User is not found for id : ' + userId);
                }

            }
        }
    }


    const deleteUserById = async () => {
        if (userId) {
            try {
                const response = await libraryApi.delete("/users/" + userId);
                if (response.status == '200') {

                    alert('user for id ' + userId + " is deleted successfully");
                }

            } catch (e) {
                console.error(e.response);
                alert('Something went wrong');

            }
        } else {
            alert('provide user id')
        }
    }


    return (

        <div style={{ width: '50%', marginTop: '10px' }}>
            <div className="ui  form">
                <h4 class="ui dividing header">Delete User</h4>
                <div className="two fields">
                    <div className="field">
                        <label>User Id</label>
                        <input placeholder="User Id" type="text" onBlur={e => getUsername()} onChange={e => setUserId(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>User Name</label>
                        <input  type="text" value={username} disabled />
                    </div>
                </div>

                <div className="ui submit button" onClick={e => deleteUserById()}>Delete User</div>
            </div>
        </div>



    );

}
export default DeleteUser;