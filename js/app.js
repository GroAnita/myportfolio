import home from './home.js';
import portfolio from './portfolio.js';
import contact from './contact.js';

const routes = {
    '/views/': home,
    '/portfolio': portfolio,
    '/views/contactme': contact,
};


class Router {
  constructor(routes) {
    this.routes = routes;
    this.app = document.getElementById("app");

    window.addEventListener("load", () => this.handleRoute());
    window.addEventListener("hashchange", () => this.handleRoute());
  }

  handleRoute() {
    const path = location.hash.slice(1) || "/";
    const route = this.routes[path];

    if (route) {
      this.app.innerHTML = route();
    } else {
      this.app.innerHTML = "<h1>404 – Page not found</h1>";
    }
  }
}

new Router(routes);