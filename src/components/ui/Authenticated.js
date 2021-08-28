import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import IssueBook from './books/IssueBook';
import ReturnBook from './books/ReturnBook';
import RemoveBook from './books/RemoveBook';
import SearchBook from './books/SearchBook';
import AddBook from './books/AddBook';
import AddUser from './users/AddUser';
import SearchUser from './users/SearchUser';
import RemoveUser from './users/RemoveUser';
import UpdateUser from './users/UpdateUser';

const Authenticated = (props) => {

    return (

        <div>
            <BrowserRouter>
                <div>
                    <Header setLoggedIn={props.setLoggedIn} />
                    <Route path="/" exact component={Home} />
                    <Route path="/issueBook" exact component={IssueBook}></Route>
                    <Route path="/returnBook" exact component={ReturnBook}></Route>
                    <Route path="/removeBook" exact component={RemoveBook}></Route>
                    <Route path="/searchBook" exact component={SearchBook}></Route>
                    <Route path="/addBook" exact component={AddBook}></Route>
                    <Route path="/addUser" exact component={AddUser}></Route>
                    <Route path="/searchUser" exact component={SearchUser}></Route>
                    <Route path="/removeUser" exact component={RemoveUser}></Route>
                    <Route path="/UpdateUser" exact component={UpdateUser}></Route>
                </div>
            </BrowserRouter>

        </div>

    );
}

export default Authenticated;