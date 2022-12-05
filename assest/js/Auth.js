class Auth {
    // setup the class and hide the body by default
   constructor() {
    const auth = localStorage.getItem("auth");
    this.validateAuth(auth);
    }
   // check to see if the localStorage item passed to the function is valid and set
   validateAuth(auth) {
    if (auth != 1) {
        window.location.replace("/");
    } 
    }
   // will remove the localStorage item and redirect to login  screen
    logOut() {
    localStorage.removeItem("auth");
    window.location.replace("/");
    }
}

