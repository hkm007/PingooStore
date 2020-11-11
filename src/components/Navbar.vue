<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a class="navbar-brand text-white">Pingoo</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/">Home</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/store">Store</router-link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"><router-link to="/contact">Contact</router-link></a>
                    </li>
                    </ul>
                    <button class="btn btn-danger my-2 my-sm-0" type="button"><router-link to="/admin/login">Admin</router-link></button>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>

export default {
  data() {
    return {
      title: "Pingoo"
    }
  }
}
</script>

<style scoped>
.navbar {
    background-color: #239023;
}

a {
    text-decoration: none !important;
    color: white !important;
}

a:hover {
    color: #000000 !important;
}
</style>