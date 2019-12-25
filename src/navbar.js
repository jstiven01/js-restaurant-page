const nav = () => {
  const element = document.createElement('nav');
  const navClasses = 'navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom navbar-custom-color';

  const navContent = `
        <div class="d-flex w-50 order-0">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" id="home">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="menu">Menu</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="contact">Contact</a>
                </li>
            </ul>
        </div>
        <span class="text-truncate mt-1 w-50 text-right order-1 order-md-last"></span>
      `;


  element.setAttribute('class', navClasses);
  element.innerHTML = navContent;
  return element;
};

export default nav;