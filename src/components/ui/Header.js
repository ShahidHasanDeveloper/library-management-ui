import React from 'react';
import HeaderLogo from './HeaderLogo';
import books from '../../static/images/books2.jpg';
import '../../style/library-style.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {

    state = { openBook: 'none', openUser: 'none' };

    componentDidMount() {
        document.body.addEventListener('click', () => {
            this.setState({ openBook: 'none' });
            this.setState({ openUser: 'none' });
        })
    }

    onDropdownHover = (element) => {
        if (element === 'user') {
            this.setState({ openBook: 'none' });
            this.setState({ openUser: 'block' });

        }
        else if (element === 'book') {
            this.setState({ openUser: 'none' });
            this.setState({ openBook: 'block' });
        }
    }

    render() {
        return (
            <div>
                <div style={{ width: '250px' }}>
                    <HeaderLogo logo={books} />
                </div>
                <div className="ui large menu" style={{ backgroundColor: '#ff6936' }}>
                    <Link to="/" className="item active" style={{ color: 'white' }}>
                        Home
                    </Link>

                    <div className="ui dropdown item" style={{ color: 'white' }} onMouseOver={e => this.onDropdownHover('book')}>
                        Book Transaction <i className="dropdown icon"></i>
                        <div id="booktx" className="menu" style={{ display: this.state.openBook }} >
                            <Link to="/issueBook" className="item">Book Issue</Link>
                            <Link to="/returnBook" className="item">Book Return</Link>
                            <Link to="/removeBook" className="item">Remove Book</Link>
                            <Link to="/searchBook" className="item">Search Book</Link>
                            <Link to="/addBook" className="item">Add Book</Link>
                        </div>
                    </div>

                    <div className="ui dropdown item" style={{ color: 'white' }} onMouseOver={e => this.onDropdownHover('user')}>
                        User Transaction <i className="dropdown icon"></i>
                        <div id="usertx" className="menu" style={{ display: this.state.openUser }} >
                            <Link to="/addUser" className="item">Add User</Link>
                            <Link to="/UpdateUser" className="item">Update User</Link>
                            <Link to="/deleteUser" className="item">Delete User</Link>
                            <Link to="/searchUser" className="item">Search User</Link>
                        </div>
                    </div>
                    <div className="right menu" >
                        <a className="item" onClick={e => this.props.setLoggedIn(false)} style={{ color: 'white' }}>
                            Logout
                        </a>
                    </div>


                </div>


            </div>




        );
    }



}

export default Header;