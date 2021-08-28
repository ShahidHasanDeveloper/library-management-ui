import React from 'react';

const SearchUser = () => {

    return (
        <div style={{  marginTop: '10px' }}>
            <div className="ui  form">
                <h4 class="ui dividing header">Search User</h4>
                <div className="field">

                    <div className="eight wide field">
                        <input placeholder="Search a User..." type="text" />

                    </div>

                </div>
            </div>
        </div>

    );


}

export default SearchUser;