
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

import * as states from './store';

// Object Destructuring
import { capitalize } from 'lodash';

// capitalize 'Navigo' to make it clear that this is a Contructor function
import Navigo from 'navigo';

import axios from 'axios';

// origin is required to help our router handle localhost addresses
const router = new Navigo(window.location.origin);

const root = document.querySelector('#root');

// render receives an argument as a named parameter: 'state'
function render(state){
    // TODO: Use Shadow DOM and Virtual DOM 'diffing' to avoid re-rendering ALL of the components
    root.innerHTML = `
  ${Navigation(state)}
  ${Content(state)}
  ${Footer(state)}
  `;

    router.updatePageLinks();
}

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    // after call stack is all empty, JS can execute the 'then' to 'unwrap the Promise
    .then((response) => {
        // 'response.data is an array of 'post' objects
        // we need to get this into states.Blog.posts
        response.data.forEach((post) => states.Blog.posts.push(post));
        // if there was a requested route(eg /blog, /contact etc, then the 'params property will exist.
        // we will then check if the path inside of that was 'blog'
        if(router.lastRouteResolved().params && router.lastRouteResolved().params.path === 'blog'){
            render(states.Blog);
        }
    });

function handleRoutes(params){
    render(states[capitalize(params.path)]);
}

router
    .on(':path', handleRoutes)
    .on('/', () => render(states.Home))
    .resolve();


