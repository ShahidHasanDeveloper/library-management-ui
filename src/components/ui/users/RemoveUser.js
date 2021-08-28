import React from 'react';

const RemoveUser = () => {

    return (

        <div style={{width: '50%', marginTop: '10px'}}>
            <div className="ui  form">
                <h4 class="ui dividing header">Remove User</h4>
                <div className="two fields">
                    <div className="field">
                        <label>User Id</label>
                        <input placeholder="Book Id" type="text" />
                    </div>
                    <div className="field">
                        <label>User Name</label>
                        <input placeholder="Book Name" type="text" disabled />
                    </div>
                </div>
               
                <div className="ui submit button">Remove User</div>
            </div>
        </div>



    );

}
export default RemoveUser;