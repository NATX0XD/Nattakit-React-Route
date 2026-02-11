import Activity from "../pages/Activity"
import Contact from "../pages/Contact"
import Education from "../pages/Education"
import Home from "../pages/Home"

const NavItems = [
    { name: 'Home', href: '#hero', path: '/', icon: 'fa-solid fa-house', element: <Home /> },
    { name: 'Activity', href: '#activity', path: '/activity', icon: 'fa-solid fa-user', element: <Activity /> },
    { name: 'Education', href: '#education', path: '/education', icon: 'fa-solid fa-graduation-cap', element: <Education /> },
    { name: 'Contact', href: '#contact', path: '/contact', icon: 'fa-solid fa-envelope', element: <Contact /> }
]
export default NavItems