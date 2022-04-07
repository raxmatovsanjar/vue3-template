export const routes = [
  {
    path: "/:pathMatch(.*)*",
    meta: { title: "Error", layout: "empty" },
    component: () => import("~/pages/error.vue"),
  },
  {
    path: "/",
    meta: { title: "Home" },
    component: () => import("~/pages/index.vue"),
  },
];
if (import.meta.env.DEV) {
  routes.push({
    path: "/assets",
    meta: { title: "Assets" },
    component: () => import("~/pages/assets.vue"),
  });
}
