import React, { Component } from 'react';
import { libraryApi } from '../../../api/libraryApi';

class SearchBook extends Component {

    state = {
        bookId: '',
        id: '',
        bookname: '',
        authorname: '',
        category: '',
        description: '',
        publishYear: ''

    }

    onSearchSubmit = async () => {
        this.setState({
            id: '',
            bookname: '',
            authorname: '',
            category: '',
            description: '',
            publishYear: ''

        });
        if (this.state.bookId) {
            try {
                const { data } = await libraryApi.get("/books/" + this.state.bookId);
                if (data) {
                    this.setState({
                        id: data.id,
                        bookname: data.bookname,
                        authorname: data.authorname,
                        category: data.category,
                        description: data.description,
                        publishYear: data.publishYear
                    });
                }

            } catch (e) {
                console.error(e.response);
                if (e.response && e.response.status == '404') {
                    alert('Book is not found');
                }
                else {
                    alert('Something went wrong , please try later');
                }

            }
        } else {
            alert('provide book id')
        }

    }

    showSearchResult = () => {
        if (this.state.id && this.state.id == this.state.bookId) {
            return (
                <div style={{ marginTop: '50px' }}>
                    <div class="ui form">
                        <div className="inline fields">
                            <div className="six wide field">
                                <label>Book Id</label>
                                <div>{this.state.id}</div>
                            </div>
                            <div className="six wide field">
                                <label>Book Name</label>
                                <div>{this.state.bookname}</div>
                            </div>

                        </div>
                        <div className="inline fields">
                            <div className="six wide field">
                                <label>Author Name</label>
                                <div>{this.state.authorname}</div>
                            </div>
                            <div className="five wide field">
                                <label>Category</label>
                                <div>{this.state.category}</div>
                            </div>

                        </div>
                        <div className="inline fields">
                            <div className="six wide field">
                                <label>Description</label>
                                <div>{this.state.description}</div>
                            </div>
                            <div className="six wide field">
                                <label>Publish Year</label>
                                <div>{this.state.publishYear}</div>
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
                    <h4 class="ui dividing header">Search Book</h4>
                    <div className="two fields">
                        <div className="field">
                            <input placeholder="Book Id" type="text" onChange={e => this.setState({ bookId: e.target.value })} />
                        </div>
                        <div className="field">
                            <div className="ui submit button" style={{backgroundColor: '#ff6936', color: 'white'}}  onClick={this.onSearchSubmit}>Search Book</div>
                        </div>
                    </div>
                </div>

                {this.showSearchResult()}

            </div>

        );


    }





}

export default SearchBook;