const express=require('express');
const router=express.Router();
const authRoute=require('./auth.route');
const homeRoute=require("./home.route");

const Routes=[
    {
        path:"/",
        route:homeRoute
    },
    {
        path:"/auth",
        route:authRoute
    },
];
Routes.forEach((route)=>{
    router.use(route.path, route.route)
});

module.exports=router;
