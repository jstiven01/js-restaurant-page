import './style.css';
import Page from './page';
import nav from './navbar';

Page.renderHomePage();
document.body.appendChild(nav());

const homeTab = document.querySelector('#home');
const menuTab = document.querySelector('#menu');
const contactTab = document.querySelector('#contact');

homeTab.addEventListener('click', Page.renderHomePage);
menuTab.addEventListener('click', Page.renderMenuPage);
contactTab.addEventListener('click', Page.renderContactPage);
