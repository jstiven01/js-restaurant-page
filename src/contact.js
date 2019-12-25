const contact = () => {
    const contactClasses = 'img-background-contact';
  
    const contactContent = `
        <div class="container">
            <div class="row">
                <div class="col-12 subnav"></div>
                <h1 class="col-12 my-4">CONTACT</h1>
                <div class="col-12 background-content">
                    <form class="form">
                        <div class="form-group">
                            <label for="name"><h4 class="my-3">Your Name</h4></label>
                            <input type="text" id="name" class="form-control" placeholder="Enter your name">
                        </div>
                        <div class="form-group">
                            <label for="email"><h4 class="my-3">Your Email</h4></label>
                            <input type="email" class="form-control" id="email" placeholder="Enter your email">
                        </div>
                        <div class="form-group">
                            <label for="message"><h4 class="my-3">Your Message</h4></label>
                            <textarea class="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" class="btn btn-light my-4">Send</button>
                    </form>
                </div>
            </div>
        </div>
      `;
  
    return [contactContent, contactClasses]
  };
  
export default contact;