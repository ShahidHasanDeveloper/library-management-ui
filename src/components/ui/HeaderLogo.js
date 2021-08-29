import React from 'react';
import booksLogo from '../../static/images/books.jpg';
import '../../style/library-style.css';

 const HeaderLogo =(props) => {
    return (

        <div className="ui grid">
            <div className="seven wide column">
                <img src={props.logo} style={{ height: '100px' }} alt="books" />
            </div>
            <div className="nine wide column">
                <h3 style={{color: '#ff6936'}}><span style={{ fontSize: 'xx-large' }}>L</span>IBRARY MANAGEMENT SYSTEM</h3>
            </div>
        </div>

    )
}

export default HeaderLogo;