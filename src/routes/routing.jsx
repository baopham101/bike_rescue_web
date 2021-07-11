import Starter from '../views/starter/starter.jsx';
// ui components
import User from "../components/dashboard-components/user_board/user";
import Login from "../components/login-components";

var ThemeRoutes = [
    {
        path: '/shop',
        name: 'Cửa hàng',
        icon: 'ti-loop',
        component: Starter
    },
    {
        path: '/user',
        name: 'Khách hàng',
        icon: 'ti-loop',
        component: User
    },
    {path: '/', pathTo: '/shop', name: 'Cửa hàng', redirect: true},
    {path: '/', pathTo: '/user', name: 'Khách hàng', redirect: true},
    {path: '/', pathTo: '/login', name: 'Login', redirect: true}

];
export default ThemeRoutes;
