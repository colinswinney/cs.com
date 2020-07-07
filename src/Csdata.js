import Home from "./Components/Home"
import About from "./Components/About"
import MyWork from "./Components/MyWork"
import Contact from "./Components/Contact"

const csdata = {
  routes: [
    {
      path: '/',
      exact: true,
      title: 'Colin Swinney',
      navTitle: 'Colin Swinney',
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
      path: '/my-work',
      exact: true,
      title: 'What Have I Done?!',
      navTitle: 'My Work',
      contentClass: 'my-work',
      Component: MyWork
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