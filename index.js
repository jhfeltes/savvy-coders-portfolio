import Navigation from './components/Navigation';
import Contents from '.components/Contents';
import Footer from '.components/Footer';

let initialHTML = document.body.innerHTML;

document.body.innerHTML = `
  ${Navigatio}
  ${Content}
  ${Footer}
  ${initialHTML}
  `;
