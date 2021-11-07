import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Main from "../views/Main.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Main",
    component: Main,
    children:[
      {
        path:'/',
        name:'home',
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/Home/Home.vue"),
      }
    ]
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // 懒加载，会请为每个路由打包一个js文件，访问哪个路由才去加载对应的js文件
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/Main.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
