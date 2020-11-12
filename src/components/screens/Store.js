import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import '../css/store.css';
import { toast } from 'react-toastify';

function Store() {
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
            console.log(err)
        })
    }, [])

    const viewBook = () => {
        toast.error("Preview Unavailable")
    }

    return (
        <>
            <div className="container mt-4 mb-3">
                { (loading) ? <center><h4 className="mt-5">Loading...</h4></center>
                    :
                    <div className="row p-1">
                        {
                            books.map(book => {
                                return (
                                    <div className="col-lg-3" key={book.bookId}>
                                        <div className="card my-2">
                                            <div className="card-body">
                                                <h5 className="card-title">{book.name}</h5>
                                                <hr />
                                                <p className="card-text">
                                                    <b>Author</b>: {book.author}<br />
                                                    <b>Price:</b> Rs. {book.price}<br />
                                                    <b>Status:</b> {book.status}<br />
                                                    <b>Phone:</b> {book.phone}<br />
                                                    <b>Address:</b> {book.address}<br />
                                                </p>
                                                <button className="btn btn-outline-dark btn-block" onClick={() => viewBook()}>View</button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                }   
            </div>
        </>
    )
}

export default Store;
