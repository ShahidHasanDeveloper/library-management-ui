import React, { Component } from 'react';
import { libraryApi } from '../../../api/libraryApi';

class SearchUser extends Component {

    state = {
        userId: '',
        id: '',
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        role: '',
        ssn: ''

    }

    onSearchSubmit = async () => {
        this.setState({
            id: '',
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            role: '',
            ssn: '',
            issuedBooks: ''

        });
        if (this.state.userId) {
            try {
                const { data } = await libraryApi.get("/users/" + this.state.userId);
                const { user, issuedBooks } = data;
                if (user) {

                    this.setState({
                        id: user.id,
                        username: user.username,
                        firstname: user.firstname,
                        lastname: user.lastname,
                        email: user.email,
                        role: user.role,
                        ssn: user.ssn
                    });
                }
                if (issuedBooks) {
                    const allissuedBooks= issuedBooks.map( book=>book.id) + " ";
                    this.setState({ issuedBooks: allissuedBooks})

                }

            } catch (e) {
                console.error(e.response);
                if (e.response && e.response.status == '404') {
                    alert('User is not found');
                }
                else {
                    alert('Something went wrong , please try later');
                }

            }
        } else {
            alert('provide User id')
        }

    }

    showSearchResult = () => {
        if (this.state.id && this.state.id == this.state.userId) {
            return (
                <div style={{ marginTop: '50px' }}>
                    <div class="ui form">
                        <div className="inline fields">
                            <div className="six wide field">
                                <label>User Id</label>
                                <div>{this.state.id}</div>
                            </div>
                            <div className="six wide field">
                                <label>User Name</label>
                                <div>{this.state.username}</div>
                            </div>

                        </div>
                        <div className="inline fields">
                            <div className="six wide field">
                                <label>First Name</label>
                                <div>{this.state.firstname}</div>
                            </div>
                            <div className="five wide field">
                                <label>Last Name</label>
                                <div>{this.state.lastname}</div>
                            </div>

                        </div>
                        <div className="inline fields">
                            <div className="six wide field">
                                <label>Email</label>
                                <div>{this.state.email}</div>
                            </div>
                            <div className="six wide field">
                                <label>Role</label>
                                <div>{this.state.role}</div>
                            </div>

                        </div>
                        <div className="inline fields">
                            <div className="six wide field">
                                <label>Social Security Number</label>
                                <div>{this.state.ssn}</div>
                            </div>
                            <div className="six wide field">
                                <label>Issued Books</label>
                                <div>{this.state.issuedBooks}</div>
                            </div>

                        </div>
                    </div>

                </div>
            )
        }
    }


    render() {

        return (

            <div style={{ marginTop: '10px' }}>
                <div className="ui  form">
                    <h4 class="ui dividing header">Search User</h4>
                    <div className="two fields">
                        <div className="field">
                            <input placeholder="User Id" type="text" onChange={e => this.setState({ userId: e.target.value })} />
                        </div>
                        <div className="field">
                            <div className="ui submit button" onClick={this.onSearchSubmit}>Search User</div>
                        </div>
                    </div>
                </div>

                {this.showSearchResult()}

            </div>

        );


    }





}

export default SearchUser;