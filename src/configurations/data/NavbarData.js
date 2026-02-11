
import Home from '../../pages/Home'
import Activity from '../../pages/Activity'
import Education from '../../pages/Education'
import Contact from '../../pages/Contact'

export const NavbarData = [
    { name: 'Home', href: '#hero', path: '/', icon: 'fa-solid fa-house', element: <Home /> },
    { name: 'Activity', href: '#activity', path: '/activity', icon: 'fa-solid fa-bolt', element: <Activity /> },
    { name: 'Education', href: '#education', path: '/education', icon: 'fa-solid fa-graduation-cap', element: <Education /> },
    { name: 'Contact', href: '#contact', path: '/contact', icon: 'fa-solid fa-envelope', element: <Contact /> }
]
