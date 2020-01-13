import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Foo from "../posts/2019/foo.md";
import Test from "../posts/2020/we-did-it.md";

Vue.use(VueRouter);

import BlogEntries from "../data/blogs.json";

const blogRoutes = Object.keys(BlogEntries).map(section => {
  const children = BlogEntries[section].map(child => ({
    path: child.id,
    name: child.id,
    component: () => import(`../posts/${section}/${child.id}.md`)
  }));
  return {
    path: `/${section}`,
    name: section,
    component: () => import("../views/Blog.vue"),
    children
  };
});

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/links",
    name: "links",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Links.vue")
  },
  {
    path: "/posts",
    name: "posts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Posts.vue")
  },
  {
    path: "/foo",
    name: "foo",
    component: Foo
  },
  {
    path: "/test",
    name: "test",
    component: Test
  },
  ...blogRoutes
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
