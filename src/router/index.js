import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

const routes = [
  {
    path: "/busket",
    name: "Busket",
    component: () =>
      import(/* webpackChunkName: "showcase" */ "../views/Busket.vue")
  },
  {
    path: "/",
    name: "Showcase",
    component: () =>
      import(/* webpackChunkName: "showcase" */ "../views/Showcase.vue"),
    children: [
      {
        path: "/",
        name: "Products",
        component: () =>
          import(/* webpackChunkName: "showcase" */ "../views/Products.vue")
      },
      {
        path: "/:productid",
        name: "Product",
        component: () =>
          import(/* webpackChunkName: "busket" */ "../views/Product.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
