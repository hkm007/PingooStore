<template>
    <footer className="page-footer font-small">
        <center><div className="footer-copyright text-center text-dark py-2">
            <p className="text-muted">Copyright © {{ dateStamp }}. All Rights Reserved.</p>
        </div></center>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            dateStamp: new Date().getFullYear()
        }
    }
}
</script>

<style scoped>

</style>