import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import { v4 as uuidv4 } from 'uuid';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_MD8217Akg1hAHaW8JKmJBh9_M4xVypQ",
    authDomain: "pingoo-6d44e.firebaseapp.com",
    databaseURL: "https://pingoo-6d44e.firebaseio.com",
    projectId: "pingoo-6d44e",
    storageBucket: "pingoo-6d44e.appspot.com",
    messagingSenderId: "934610442923",
    appId: "1:934610442923:web:53e8f623f427bba55235ee"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.firestore();
    }

    isInit() {
        return new Promise(resolve => {
            app.auth().onAuthStateChanged(resolve);
        })
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        this.auth.signOut();
    }

    isAdmin() {
        return this.auth.currentUser;
    }

    postData(name, author, status, price, phone, address) {
        return this.db.collection('books').add({
            name,
            author,
            status,
            price,
            phone,
            address,
            bookId: uuidv4()
        })
    }

    getData() {
        return this.db.collection("books").get();
    }

    deleteData(bookId) {
        return this.db.collection("books").where("bookId", "==", bookId).get()
    }
}

export default new Firebase();