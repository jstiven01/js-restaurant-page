const menu = () => {
  const parentElement = document.createElement('div');
  parentElement.setAttribute('class', 'img-background-menu');

  const divContainer = document.createElement('div');
  divContainer.setAttribute('class', 'container');

  const divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');
  const rowChildren = [];

  const divSubNav = document.createElement('div');
  divSubNav.setAttribute('class', 'col-12 subnav');
  rowChildren.push(divSubNav);

  const h1Menu = document.createElement('h1');
  h1Menu.setAttribute('class', 'col-12 my-4');
  h1Menu.innerHTML = 'Menu';
  rowChildren.push(h1Menu);

  const divContent = document.createElement('div');
  divContent.setAttribute('class', 'col-12 background-content');

  const h3Veggies = document.createElement('h3');
  h3Veggies.setAttribute('class', 'mt-4 text-success');
  h3Veggies.innerHTML = 'Veggies';
  divContent.appendChild(h3Veggies);

  const menuDishes = [
    { h4: 'sautéed green beans', span: 'fish sauce vinaigrette . cashews' },
    { h4: 'pan fried shishito peppers', span: 'parmesan . sesame . miso' },
    { h4: 'roasted cauliflower', span: 'pickled peppers . pine nuts . mint' },
    { h4: 'kohlrabi salad', span: 'fennel . beemster . toasted almonds . roasted shiitake . nichols farm apples' },
    { h4: 'roasted beets', span: 'green beans . white anchovy . avocado crème fraîche . bread crumb' },
    { h4: 'wood grilled broccoli', span: 'rogue smokey bleu . spiced crispies' },
  ];
  const ulDishes = document.createElement('ul');

  for (let i = 0; i < menuDishes.length; i += 1) {
    const li = document.createElement('li');
    const h4 = document.createElement('h4');
    const span = document.createElement('span');
    h4.innerHTML = menuDishes[i].h4;
    span.innerHTML = menuDishes[i].span;
    li.appendChild(h4);
    li.appendChild(span);
    ulDishes.appendChild(li);
  }
  divContent.appendChild(ulDishes);
  rowChildren.push(divContent);

  for (let j = 0; j < rowChildren.length; j += 1) {
    divRow.appendChild(rowChildren[j]);
  }
  divContainer.appendChild(divRow);
  parentElement.appendChild(divContainer);

  return parentElement;
};

export default menu;