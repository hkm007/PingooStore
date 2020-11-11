import Home from './components/screens/Home';
import Store from './components/screens/Store';
import Contact from './components/screens/Contact';
import Login from './components/screens/Login';

export default [
    { path: '/', component: Home },
    { path: '/store', component: Store },
    { path: '/contact', component: Contact },
    { path: '/admin/login', component: Login }
]