<template>
    <div>
        <Navbar></Navbar>
        <div class="jumbotron">
            <div class="container">
                <center><img :src="source" id="myImg" />
                <h1 class="display-4">Welcome to Pingoo</h1>
                <p class="lead">Final Destination for Bookish Keedas</p>
                <p>A unique store for all second hand world class books on your finger tips with cheapest price.</p></center>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '../Navbar';
import Footer from '../Footer';
const imgLink = require('../../assets/unnamed.gif');

export default {
  data() {
    return {
        source: imgLink
    }
  },
  components: {
      Navbar,
      Footer
  }
}
</script>

<style>
.jumbotron {
    padding-top: 10px;
    background-color: white;
}

#myImg {
    width: 250px;
    height: 250px;
}
</style>
