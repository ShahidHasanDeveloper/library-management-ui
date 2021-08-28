import React from 'react';
import { libraryApi } from '../../../api/libraryApi';

class ReturnBook extends React.Component {


    state = {
        bookId: '',
        userId: ''
    }

    returnThisBook = async () => {
        try {
            console.log('called');
            if (this.state.bookId && this.state.userId) {
                const response = await libraryApi.delete('/users/' + this.state.userId + "/books/" + this.state.bookId);
                if (response.status == '200') {
                    alert('Book is returned');
                    return;
                }
            }
            else {
                alert('provide all fields');
                return;
            }
        } catch (e) {
            console.error(e.response);

        }

    }

    render(){
        return (

            <div style={{width: '50%', marginTop: '10px'}}>
                <div className="ui  form">
                    <h4 class="ui dividing header">Return Book</h4>
                    <div className="two fields">
                    <div className="field">
                            <label>Book Id</label>
                            <input placeholder="Book Id" type="text" onChange={e => this.setState({ bookId: e.target.value })} />
                        </div>
                        <div className="field">
                            <label>User Id</label>
                            <input placeholder="User Id" type="text" onChange={e => this.setState({ userId: e.target.value })} />
                        </div>
                        
                    </div>
                    <div className="ui submit button" onClick={this.returnThisBook}>Return Book</div>
                </div>
            </div>
    
    
    
        );
    }
   

}
export default ReturnBook;