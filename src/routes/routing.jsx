import Starter from '../views/starter/starter.jsx';
// ui components
import SignUp from "../components/register-components";
import Login from "../components/login-components";

var ThemeRoutes = [
  { 
    path: '/dashboard', 
    name: 'Dashboard', 
    icon: 'ti-loop', 
    component: Starter 
  },
  {
    path: '/login',
    name: 'Login',
    icon: 'mdi mdi-comment-processing-outline',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    icon: 'mdi mdi-comment-processing-outline',
    component: SignUp
  },
  { path: '/', pathTo: '/dashboard', name: 'Dashboard', redirect: true }
];
export default ThemeRoutes;
