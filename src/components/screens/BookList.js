import React, { useState, useEffect } from 'react';
import firebase from '../../firebase';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

function BookList() {
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        setLoading(true);
        let temp = []
        firebase.getData()
        .then((querySnapshot) => {
            const docSnapshots = querySnapshot.docs;
            for(let i in docSnapshots) {
                temp.push(docSnapshots[i].data());
            }
            setBooks(temp);
            setLoading(false);
        })
        .catch((err) => {
            setLoading(false);
            toast.error("Invalid Credentials");
        })
    }, [])

    const deleteBook = (bookId) => {
        alert('Are you sure ? You want to delete this book ?');
        setLoading(true);
        firebase.deleteData(bookId)
        .then(querySnapshot => {
            querySnapshot.docs[0].ref.delete();
            setLoading(false);
            toast.success("Deleted Successfully");
            history.push('/store')
        })
        .catch(err => {
            setLoading(false);
            toast.error("Something went wrong");
        })
    }

    return (
        <>
            { (loading) ? <center><h4 className="mt-5">Loading...</h4></center>
                :
                books.map(book => {
                    return (
                        <div className="card mb-3" key={book.bookId}>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-10">
                                        <p><b>Name</b>: {book.name}</p>
                                        <p><b>Author</b>: {book.author}</p>
                                        <p><b>Price</b>: Rs. {book.price}</p>
                                    </div>
                                    <div className="col-lg-2 my-auto p-1">
                                        <button className="btn btn-outline-dark" type="button" onClick={() => deleteBook(book.bookId)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default BookList
