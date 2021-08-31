import React from 'react';
import { libraryApi } from '../../../api/libraryApi';
class AddBook extends React.Component {

    state={
        bookname : '',
        authorname: '',
        category: '',
        description: '',
        publishYear: ''


    }

 addBook=()=>{
        if(this.state.bookname && this.state.authorname && this.state.description && this.state.publishYear){

            libraryApi.post(
               
                '/books',
                   {
                    bookname : this.state.bookname,
                    authorname: this.state.authorname,
                    category: this.state.category,
                    description: this.state.description,
                    publishYear: this.state.publishYear
                   }
                
               
            ).then(
                response=>alert("Book Added Successfully")
                        
                
            ).catch(
                e=> alert("Something went wrong")
            )

           
        }
        else{
            alert('Please provide  all fields');
        }
}

    render(){

        return (

            <div style={{ width: '50%', marginTop: '10px' }}>
                <div className="ui  form">
                    <h4 class="ui dividing header">Add Book</h4>
                    <div className="three fields">
                        <div className="field">
                            <label>Book Name</label>
                            <input name="bookname" placeholder="Book Name" type="text" onChange={e=>this.setState({bookname : e.target.value})}/>
                        </div>
                        <div className="field">
                            <label>Author Name</label>
                            <input name="authorname" placeholder="Author Name" type="text" onChange={e=>this.setState({authorname : e.target.value})}/>
                        </div>
                        <div className="field">
                            <label>Category</label>
                            <input name="category" placeholder="Category" type="text" onChange={e=>this.setState({category : e.target.value})}/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="fields">
                            <div className="eight wide field">
                                <label>Description</label>
                                <input name="description" placeholder="Description" type="text" onChange={e=>this.setState({description : e.target.value})}/>
                            </div>
                            <div className="eight wide field">
                                <label>Publish Year</label>
                                <input name="publishYear" placeholder="YYYY" type="text" onChange={e=>this.setState({publishYear : e.target.value})}/>
                            </div>
                        </div>
    
                    </div>
                    <div className="ui submit button" style={{backgroundColor: '#ff6936', color: 'white'}}onClick={this.addBook}>Add Book</div>
                </div>
            </div>
    
    
    
        );

    }

   

}


export default AddBook;