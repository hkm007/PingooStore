<template>
    <div>
        <Navbar></Navbar>
        <div class="container mt-4 mb-3">
            <h2>Admin Panel</h2>
            <hr style="border: 1px solid;" />
            <div class="row">
                <div class="col-lg-6">
                    <h4>New Book</h4>
                    <hr />
                    <form>
                        <div class="form-group">
                            <label for="bookName">Name</label>
                            <input type="text" class="form-control" id="bookName" placeholder="Book Name" required>
                        </div>
                        <div class="form-group">
                            <label for="bookAuthor">Author</label>
                            <input type="text" class="form-control" id="bookAuthor" placeholder="Author" required>
                        </div>
                        <div class="form-group">
                            <label for="bookStatus">Status</label>
                            <input type="text" class="form-control" id="bookStatus" placeholder="How old the book is ?">
                        </div>
                        <div class="form-group">
                            <label for="bookPrice">Price</label>
                            <input type="text" class="form-control" id="bookPrice" placeholder="Price in rupees" required>
                        </div>
                        <div class="form-group">
                            <label for="ownerPhone">Phone</label>
                            <input type="text" class="form-control" id="ownerPhone" placeholder="Owner Phone" required>
                        </div>
                        <div class="form-group">
                            <label for="ownerEmail">Email</label>
                            <input type="email" class="form-control" id="ownerEmail" placeholder="Owner Email">
                        </div>
                        <div class="form-group">
                            <label for="ownerAddress">Address</label>
                            <input type="text" class="form-control" id="ownerAddress" placeholder="Owner Address">
                        </div>
                        <button type="submit" class="btn btn-success btn-block">Add Book</button>
                    </form>
                    <hr style="border: 1px solid;" />
                </div>

                <div class="col-lg-6">
                    <h4>Book List</h4>
                    <hr />
                    <div class="card mb-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-10">
                                    <p><b>Name</b>: </p>
                                    <p><b>Author</b>: </p>
                                    <p><b>Price</b>: </p>
                                </div>
                                <div class="col-lg-2 my-auto p-1">
                                    <button class="btn btn-outline-dark" type="button">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '../Footer';
import Navbar from '../Navbar';

export default {
    data() {
        return {

        }
    },
    components: {
      Footer,
      Navbar
    }
}
</script>

<style scoped>
.card {
    background-color: rgb(223, 239, 248);
    border-radius: 25px;
    box-shadow: 10px 10px grey;
}
</style>