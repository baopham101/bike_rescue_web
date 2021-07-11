import Starter from '../views/starter/starter.jsx';
// ui components
import User from "../components/dashboard-components/user_board/user";

var ThemeRoutes = [
    {
        path: '/shop',
        name: 'Cửa hàng',
        icon: 'fa fa-motorcycle',
        component: Starter
    },
    {
        path: '/user',
        name: 'Khách hàng',
        icon: 'fa fa-user-circle',
        component: User
    },
    {path: '/', pathTo: '/shop', name: 'Cửa hàng', redirect: true},
    // {path: '/', pathTo: '/user', name: 'Khách hàng', redirect: false},
    // {path: '/', pathTo: '/login', name: 'Login', redirect: true}
];
export default ThemeRoutes;
