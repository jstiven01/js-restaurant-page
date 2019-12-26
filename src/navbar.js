const nav = () => {
  const parentElement = document.createElement('nav');
  const navClasses = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom navbar-custom-color';
  parentElement.setAttribute('class', navClasses);

  const divHead = document.createElement('div');
  divHead.setAttribute('class', 'd-flex w-50 order-0');

  const button = document.createElement('button');
  button.setAttribute('class', 'navbar-toggler');
  button.setAttribute('type', 'button');
  button.setAttribute('data-toggle', 'collapse');
  button.setAttribute('data-target', '#collapsingNavbar');

  const spanButton = document.createElement('span');
  spanButton.setAttribute('class', 'navbar-toggler-icon');

  button.appendChild(spanButton);
  divHead.appendChild(button);

  const divItems = document.createElement('div');
  divItems.setAttribute('class', 'navbar-collapse collapse justify-content-center order-2');
  divItems.setAttribute('id', 'collapsingNavbar');

  const ulItems = document.createElement('ul');
  ulItems.setAttribute('class', 'navbar-nav');
  const arrayLinks = ['Home', 'Menu', 'Contact'];

  for (let i = 0; i < arrayLinks.length; i += 1) {
    const li = document.createElement('li');
    li.setAttribute('class', 'nav-item');
    const a = document.createElement('a');
    a.setAttribute('class', 'nav-link');
    a.setAttribute('id', arrayLinks[i].toLowerCase());
    a.innerHTML = arrayLinks[i];
    li.appendChild(a);
    ulItems.appendChild(li);
  }

  divItems.appendChild(ulItems);
  const spanText = document.createElement('span');
  spanText.setAttribute('class', 'text-truncate mt-1 w-50 text-right order-1 order-md-last');

  parentElement.appendChild(divHead);
  parentElement.appendChild(divItems);
  parentElement.appendChild(spanText);

  return parentElement;
};

export default nav;