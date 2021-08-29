import React, { useState } from 'react';
import { libraryApi } from '../../../api/libraryApi';



const RemoveBook = () => {

    const [bookId, setBookId] = useState('');
    const [bookname, setBookname] = useState('');

    const getBookName = async () => {

        setBookname('');
        if (bookId) {
            try {
                const { data } = await libraryApi.get("/books/" + bookId);
                if (data) {

                    setBookname(data.bookname);
                }

            } catch (e) {
                console.error(e.response);
                if (e.response.status == '404') {
                    alert('Book is not found for id : ' + bookId);
                }

            }
        }
    }


    const removeBookById = async () => {
        if (bookId) {
            try {
                const response = await libraryApi.delete("/books/" + bookId);
                if (response.status == '200') {

                    alert('book for id ' + bookId + " is deleted successfully");
                }

            } catch (e) {
                console.error(e.response);
                alert('Something went wrong');

            }
        } else {
            alert('provide book id')
        }
    }


    return (

        <div style={{ width: '50%', marginTop: '10px' }}>
            <div className="ui  form">
                <h4 class="ui dividing header">Remove Book</h4>
                <div className="two fields">
                    <div className="field">
                        <label>Book Id</label>
                        <input placeholder="Book Id" type="text" onBlur={e => getBookName()} onChange={e => setBookId(e.target.value)} />
                    </div>
                    <div className="field">
                        <label>Book Name</label>
                        <input  type="text" value={bookname} disabled />
                    </div>
                </div>

                <div className="ui submit button" style={{backgroundColor: '#ff6936', color: 'white'}} onClick={e => removeBookById()}>Remove Book</div>
            </div>
        </div>



    );

}
export default RemoveBook;