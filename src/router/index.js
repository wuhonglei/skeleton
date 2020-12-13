import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: '/skeleton',
        name: 'Skeleton',
        component: () =>
            import ( /* webpackChunkName: "about" */ "../Skeleton.vue")
    }
];

const router = new VueRouter({
    routes,
});


router.beforeEach((to, from, next) => {
    let isRealRoute = (to.path !== 'title');
    next(isRealRoute);
})

export default router;