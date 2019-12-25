import './style.css';
import nav from './navbar';


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
    const renderPage = ()=>{
        const parentElement = document.querySelector('#content');
        const divElement = makeElementChild(parentElement, 'div','','img-background');
        makeElementChild(divElement,'h1','WebPack Restaurant');
        makeElementChild(divElement,'h3','Let Webpack Restaurant cater your next private event!');
        console.log("hello page.js");
        const [navContent, classesNav] = nav();
        makeElementChild(parentElement, 'nav', navContent, classesNav);
        return document.body.appendChild(parentElement);
    };
    return {
        renderPage
    }
}
)();

export default Page;