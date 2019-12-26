import menu from './menu';
import contact from './contact';
import home from './home';

const Page = (() => {
  const renderHomePage = () => {
    const parentElement = document.querySelector('#content');
    parentElement.innerHTML = '';
    return document.body.appendChild(parentElement.appendChild(home()));
  };

  const renderMenuPage = () => {
    const parentElement = document.querySelector('#content');
    parentElement.innerHTML = '';
    return document.body.appendChild(parentElement.appendChild(menu()));
  };

  const renderContactPage = () => {
    const parentElement = document.querySelector('#content');
    parentElement.innerHTML = '';
    return document.body.appendChild(parentElement.appendChild(contact()));
  };

  return {
    renderHomePage, renderMenuPage, renderContactPage,
  };
}
)();

export default Page;