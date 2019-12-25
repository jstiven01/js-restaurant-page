import menu from './menu';
import contact from './contact';
import home from './home';

const Page = (() => {
  const makeElementChild = (parentElement, TypeElement, textHtml, classCss = '') => {
    const element = document.createElement(TypeElement);
    if (classCss !== '') {
      element.setAttribute('class', classCss);
    }
    element.innerHTML = textHtml;
    parentElement.appendChild(element);
    return element;
  };

  const renderHomePage = () => {
    const parentElement = document.querySelector('#content');
    parentElement.innerHTML = '';
    const [homeContent, homeClasses] = home();
    makeElementChild(parentElement, 'div', homeContent, homeClasses);
    return document.body.appendChild(parentElement);
  };

  const renderMenuPage = () => {
    const parentElement = document.querySelector('#content');
    parentElement.innerHTML = '';
    const [menuContent, menuClasses] = menu();
    makeElementChild(parentElement, 'div', menuContent, menuClasses);
    return document.body.appendChild(parentElement);
  };

  const renderContactPage = () => {
    const parentElement = document.querySelector('#content');
    parentElement.innerHTML = '';
    const [contactContent, contactClasses] = contact();
    makeElementChild(parentElement, 'div', contactContent, contactClasses);
    return document.body.appendChild(parentElement);
  };

  return {
    renderHomePage, renderMenuPage, renderContactPage,
  };
}
)();

export default Page;