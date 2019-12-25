import menu from './menu'
const Page = ( () => {

    const makeElementChild = (parentElement, TypeElement, textHtml, classCss = '') => {
        const element = document.createElement(TypeElement);
        if (classCss !== ''){
            element.setAttribute('class', classCss);
            //element.classList.add(classCss);
        }
        element.innerHTML = textHtml;
        parentElement.appendChild(element);
        return element;

    };

    const renderHomePage = ()=> {
        const parentElement = document.querySelector('#content');
        const divElement = makeElementChild(parentElement, 'div','','img-background-home');
        makeElementChild(divElement,'h1','WebPack Restaurant');
        makeElementChild(divElement,'h3','Let Webpack Restaurant cater your next private event!');
        return document.body.appendChild(parentElement);
    };

    const renderMenuPage = () => {
        const parentElement = document.querySelector('#content');
        parentElement.innerHTML = '';
        const [menuContent, menuClasses] = menu();
        makeElementChild(parentElement, 'div', menuContent, menuClasses);
        return document.body.appendChild(parentElement);
    }
    return {
        renderHomePage, renderMenuPage
    }
}
)();

export default Page;