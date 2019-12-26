const home = () => {
  const parentElement = document.createElement('div');
  parentElement.setAttribute('class', 'img-background-home');

  const divContainer = document.createElement('div');
  divContainer.setAttribute('class', 'container');

  const divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');

  const rowChildren = [];
  const divSubNav = document.createElement('div');
  divSubNav.setAttribute('class', 'col-12 subnav');
  rowChildren.push(divSubNav);

  const h1Webpack = document.createElement('h1');
  h1Webpack.setAttribute('class', 'col-12 home-logo');
  h1Webpack.innerHTML = 'WEBPACK';
  rowChildren.push(h1Webpack);

  const h1Veggie = document.createElement('h1');
  h1Veggie.setAttribute('class', 'col-12 my-4 home-logo');
  h1Veggie.innerHTML = 'Veggie Restaurant';
  rowChildren.push(h1Veggie);

  const divContent = document.createElement('div');
  const contClass = 'col-5 mx-auto d-flex flex-column justify-content-center background-content-home';
  divContent.setAttribute('class', contClass);

  const h4FirstText = document.createElement('h4');
  h4FirstText.setAttribute('class', 'align-self-center');
  h4FirstText.innerHTML = 'Let Webpack Restaurant';

  const h4SecondText = document.createElement('h4');
  h4SecondText.setAttribute('class', 'align-self-center');
  h4SecondText.innerHTML = 'cater your next private event!';

  divContent.appendChild(h4FirstText);
  divContent.appendChild(h4SecondText);
  rowChildren.push(divContent);
  for (let i = 0; i < rowChildren.length; i += 1) {
    divRow.appendChild(rowChildren[i]);
  }
  divContainer.appendChild(divRow);
  parentElement.appendChild(divContainer);

  return parentElement;
};

export default home;