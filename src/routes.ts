export const routes: any = [
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
// @ts-ignore: Unreachable code error
if (import.meta.env.DEV) {
  routes.push({
    path: "/assets",
    meta: { title: "Assets" },
    component: () => import("~/pages/assets.vue"),
  });
}
