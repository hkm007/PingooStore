<template>
    <div>
        <Navbar></Navbar>
        <div class="container col-lg-8 mt-5 mb-4">
            <h2>Contact Us</h2>
            <hr style="border: 1px solid;" />
            <form>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" autofocus>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button type="submit" class="btn btn-success btn-block">Submit</button>
                <hr style="border: 1px solid;" />
            </form>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Navbar from '../Navbar';
import Footer from '../Footer';

export default {
    components: {
      Navbar,
      Footer
    }
}
</script>

<style scoped>

</style>