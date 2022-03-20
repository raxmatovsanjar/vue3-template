const pages = import.meta.glob('./pages/**/*.vue');
const pagesModule = import.meta.globEager('./pages/**/*.vue');
const routeDefault = name => {
  if (name.includes('/index')) {
    return name.replace('/index', '/');
  } else if (name.includes('/error')) {
    return name.replace('/error', '/:pathMatch(.*)*');
  } else {
    return name;
  }
};
export const routes = Object.keys(pages).map(path => {
  const name = path.match(/\.\/pages(.*)\.vue$/)[1].toLowerCase();
  return {
    meta: {
      layout: pagesModule[path].default.layout || 'Default'
    },
    path: routeDefault(name),
    component: pages[path] // () => import('./pages/*.vue')
  };
});
console.log(routes);
