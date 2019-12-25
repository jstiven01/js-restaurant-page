const home = () => {
    const homeClasses = 'img-background-home';
  
    const homeContent = `
        <div class="container">
            <div class="row">
                <div class="col-12 subnav"></div>
                <h1 class="col-12 home-logo">WEBPACK</h1>
                <h1 class="col-12 my-4 home-logo">Veggie Restaurant</h1>
                <div class="col-5 mx-auto d-flex flex-column justify-content-center background-content-home">
                    <h4 class="align-self-center">Let Webpack Restaurant</h4>
                    <h4 class="align-self-center">cater your next private event!</h4>
                </div>
            </div>
        </div>
      `;
  
    return [homeContent, homeClasses]
  };
  
export default home;