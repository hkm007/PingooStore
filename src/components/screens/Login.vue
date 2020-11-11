<template>
    <div>
        <Navbar></Navbar>
        <div class="container">
            <div class="card mt-5 mb-4 col-lg-4 mx-auto">
                <div class="card-body">
                    <center><h2 class="card-title">Login</h2>
                    <h6 class="card-subtitle mb-2">Admin Panel</h6></center>
                    <hr style="border: 1px solid;" />
                    <form>
                        <div class="form-group">
                            <label for="exampleInputEmail1"><b>Email</b></label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" autofocus>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1"><b>Password</b></label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-danger btn-block">Login</button>
                    </form>
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
    components: {
      Footer,
      Navbar
    }
}
</script>

<style scoped>
.card {
    box-shadow: 10px 10px grey;
    background-color: #bfbfbf;
}
</style>