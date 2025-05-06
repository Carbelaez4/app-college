import Login from '../pages/Login';
import Menu from '../components/Menu'
export let enrutador =[
    {
        path: '/',
        element: <Menu />,
    },
    {
        path: '/login',
        element: <Login />,
    }
]