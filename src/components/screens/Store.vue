<template>
    <div>
        <Navbar></Navbar>
        <div class="container mt-4 mb-3">
            <div class="row p-1">
                <div class="col-lg-3">
                    <div class="card my-2">
                        <img :src="source" class="card-img-top" id="bookImg" />
                        <div class="card-body">
                            <h5 class="card-title">Concepts of Physics</h5>
                            <p class="card-text">
                                <b>Author</b>: H C Verma<br>
                                <b>Price:</b> Rs. 150
                            </p>
                            <button class="btn btn-outline-dark btn-block">View</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card my-2">
                        <img :src="source" class="card-img-top" id="bookImg" />
                        <div class="card-body">
                            <h5 class="card-title">Concepts of Physics</h5>
                            <p class="card-text">
                                <b>Author</b>: H C Verma<br>
                                <b>Price:</b> Rs. 150
                            </p>
                            <button class="btn btn-outline-dark btn-block">View</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card my-2">
                        <img :src="source" class="card-img-top" id="bookImg" />
                        <div class="card-body">
                            <h5 class="card-title">Concepts of Physics</h5>
                            <p class="card-text">
                                <b>Author</b>: H C Verma<br>
                                <b>Price:</b> Rs. 150
                            </p>
                            <button class="btn btn-outline-dark btn-block">View</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card my-2">
                        <img :src="source" class="card-img-top" id="bookImg" />
                        <div class="card-body">
                            <h5 class="card-title">Concepts of Physics</h5>
                            <p class="card-text">
                                <b>Author</b>: H C Verma<br>
                                <b>Price:</b> Rs. 150
                            </p>
                            <button class="btn btn-outline-dark btn-block">View</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="card my-2">
                        <img :src="source" class="card-img-top" id="bookImg" />
                        <div class="card-body">
                            <h5 class="card-title">Concepts of Physics</h5>
                            <p class="card-text">
                                <b>Author</b>: H C Verma<br>
                                <b>Price:</b> Rs. 150
                            </p>
                            <button class="btn btn-outline-dark btn-block">View</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '../Navbar';
import Footer from '../Footer';

export default {
    data() {
        return {
            source: require('../../assets/images.png')
        }
    },
    components: {
      Navbar,
      Footer
    }
}
</script>

<style scoped>
.card-img-top {
    width: 100%;
    height: 250px;
}
.card {
    border-radius: 25px;
    box-shadow: 10px 10px grey;
}
</style>