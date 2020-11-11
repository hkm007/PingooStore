<template>
    <div>
        <Navbar></Navbar>
        <div class="container mt-4">
            <h2>Contact Us</h2>
            <hr style="border: 1px solid;" />
            <div class="row">
                <div class="col-lg-6">
                    <center>
                        <img :src="source" id="myImg" />
                        <h3>Pingoo</h3>
                    </center>
                    <p>Feel free to contact us anytime. Our team is available 24x7 to hear you all.</p>
                    <p>
                        Pingoo invites all of you to sell your books at your prices and make them available to the needy ones. Contact us via filling out the form with your book details such as Name, Author, Status, Price, your contact details and address.
                    </p>
                </div>

                <div class="col-lg-6">
                    <form>
                        <div class="form-group">
                            <label for="contactEmail">Email</label>
                            <input type="email" class="form-control" id="contactEmail" placeholder="name@example.com" required>
                        </div>
                        <div class="form-group">
                            <label for="contactMessage">Message</label>
                            <textarea class="form-control" id="contactMessage" rows="10"></textarea>
                        </div>
                        <button type="submit" class="btn btn-success btn-block">Submit</button>
                    </form>
                </div>
            </div>
            <hr style="border: 1px solid;" />
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

<style scoped>
#myImg {
    width: 250px;
    height: 250px;
}
</style>