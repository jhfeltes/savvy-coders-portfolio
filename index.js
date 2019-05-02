import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

// Use innerHTML property as a GETTER
let initialHTML = document.body.innerHTML;

// Use innerHTML property as a SETTER
document.body.innerHTML = `
  ${Navigation}
  ${Content}
  ${Footer}
  ${initialHTML}
  `;
