import React, { useState } from 'react';
import '../css/admin.css';
import firebase from '../../firebase';
import BookList from './BookList';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

function Admin() {
    const history = useHistory();
    const [name, setName] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("");
    const [price, setPrice] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);

    const saveBook = (e) => {
        e.preventDefault();
        setLoading(true);
        firebase.postData(name, author, status, price, phone, address)
        .then(() => {
            setLoading(false);
            toast.success("Saved Successfully");
            history.push("/admin/panel");
        })
        .catch((err) => {
            setLoading(false);
            toast.error("Something went wrong");
        })
    }

    return (
        <React.Fragment>    
            <div className="container mb-4">
                <div className="container mt-4 mb-3">
                    <h2>Admin Panel</h2>
                    <hr style={{border: '1px solid'}} />
                    { (loading) ? <center><h4 className="mt-5">Loading...</h4></center>
                        :   
                        <div className="row">
                            <div className="col-lg-6">
                                <h4>New Book</h4>
                                <hr />
                                <form onSubmit={(e) => saveBook(e)}>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="bookName" onChange={(e) => setName(e.target.value)} placeholder="Book Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="bookAuthor" onChange={(e) => setAuthor(e.target.value)} placeholder="Author" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="bookStatus" onChange={(e) => setStatus(e.target.value)} placeholder="How old the book is ?" />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="bookPrice" onChange={(e) => setPrice(e.target.value)} placeholder="Price in rupees" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="ownerPhone" onChange={(e) => setPhone(e.target.value)} placeholder="Owner Phone" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="ownerAddress" onChange={(e) => setAddress(e.target.value)} placeholder="Owner Address" />
                                    </div>
                                    <button type="submit" className="btn btn-success btn-block">Add Book</button>
                                </form>
                                <hr style={{border: '1px solid'}} />
                            </div>

                            <div className="col-lg-6">
                                <h4>Book List</h4>
                                <hr />
                                <BookList />
                            </div>             
                        </div>
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Admin;
