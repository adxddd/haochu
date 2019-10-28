import Vue from "vue";
import VueRouter from "vue-router";
import home from "../components/home/home.vue"
import menu from "../components/menu/menu.vue"
import food from "../components/food/food.vue"
import says from "../components/say/say.vue"
import videos from "../components/video/video.vue"

Vue.use(VueRouter);

var routes=[
	{
		path:"/",
		redirect:home
	},
	{
		path:"/home",
		component:home
	},
	{
		path:"/menu",
		component:menu
	},
	{
		path:"/food",
		component:food
	},
	{
		path:"/says",
		component:says
	},
	{
		path:"/videos",
		component:videos
	},
	{
		path:"*",
		redirect:home
	}
]

var router=new VueRouter({
	routes
})

export default router;