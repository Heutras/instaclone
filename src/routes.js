import PrivateRoute from "components/PrivateRoute";
import Home from "pages/Home";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import AuthLayout from "pages/auth";
import Layout from "pages/Layout";
import ProfileLayout from "pages/profile";
import ProfilePosts from "pages/profile/Posts";
import ProfileTagged from "pages/profile/Tagged";

const routes = [
	{
		path: '/',
		element: <Layout />,
		auth: true,
		children: [
			{
				index:true,
				element: <Home/>
			},
			{
				path:':username',
				element: <ProfileLayout/>,
				children: [
					{
						index: true,
						element: <ProfilePosts/>
					},
					{
						path:'tagged',
						element:<ProfileTagged/>
					}
				]
			}
		]
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
			},
			{
				path: 'register',
				element: <Register />
			}
		]
	}
]

const authCheck = routes => routes.map(route => {
	if (route?.auth) {
		route.element = <PrivateRoute>{route.element}</PrivateRoute>
	}
	if (route?.children) {
		route.children = authCheck(route.children)
	}
	return route
})

export default authCheck(routes)