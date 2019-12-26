const contact = () => {
  const parentElement = document.createElement('div');
  parentElement.setAttribute('class', 'img-background-contact');

  const divContainer = document.createElement('div');
  divContainer.setAttribute('class', 'container');

  const divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');
  const rowChildren = [];

  const divSubNav = document.createElement('div');
  divSubNav.setAttribute('class', 'col-12 subnav');
  rowChildren.push(divSubNav);

  const h1Contact = document.createElement('h1');
  h1Contact.setAttribute('class', 'col-12 my-4');
  h1Contact.innerHTML = 'CONTACT';
  rowChildren.push(h1Contact);

  const divContent = document.createElement('div');
  divContent.setAttribute('class', 'col-12 background-content');

  const formElement = document.createElement('form');
  formElement.setAttribute('class', 'form');
  const formContact = [
    {
      name: 'name', label: 'Your Name', input: 'input', type: 'text', placeholder: 'Enter your name',
    },
    {
      name: 'email', label: 'Your Email', input: 'input', type: 'email', placeholder: 'Enter your email',
    },
    {
      name: 'message', label: 'Your Message', input: 'textarea', type: '', placeholder: '',
    },
  ];
  for (let i = 0; i < formContact.length; i += 1) {
    const div = document.createElement('div');
    div.setAttribute('class', 'form-group');
    const label = document.createElement('label');
    label.setAttribute('for', formContact[i].name);
    const h4 = document.createElement('h4');
    h4.setAttribute('class', 'my-3');
    h4.innerHTML = formContact[i].label;
    const input = document.createElement(formContact[i].input);
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', formContact[i].name);
    if (formContact[i].type !== '') {
      input.setAttribute('type', formContact[i].type);
      input.setAttribute('placeholder', formContact[i].placeholder);
    } else {
      input.setAttribute('rows', '3');
    }
    label.appendChild(h4);
    div.appendChild(label);
    div.appendChild(input);
    formElement.appendChild(div);
  }
  const buttonSubmit = document.createElement('button');
  buttonSubmit.setAttribute('type', 'submit');
  buttonSubmit.setAttribute('class', 'btn btn-light my-4');
  buttonSubmit.innerHTML = 'Send';
  formElement.appendChild(buttonSubmit);
  divContent.appendChild(formElement);
  rowChildren.push(divContent);

  for (let j = 0; j < rowChildren.length; j += 1) {
    divRow.appendChild(rowChildren[j]);
  }

  divContainer.appendChild(divRow);
  parentElement.appendChild(divContainer);

  return parentElement;
};

export default contact;