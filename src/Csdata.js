import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

const csdata = {
  routes: [
    {
      path: '/',
      exact: true,
      title: 'Home',
      navTitle: 'Home',
      contentClass: 'home',
      Component: Home
    },
    {
      path: '/about',
      exact: true,
      title: 'About',
      navTitle: 'About',
      contentClass: 'about',
      Component: About
    },
    {
      path: '/contact',
      exact: true,
      title: 'Contact',
      navTitle: 'Contact',
      contentClass: 'contact',
      Component: Contact
    }
  ]
}

export default csdata