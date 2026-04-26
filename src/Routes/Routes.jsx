import { createBrowserRouter } from "react-router";


const router = createBrowserRouter(
    [
        {
            path:'/',
            element:<h2>Home Layer</h2>
        },
        {
            path:'/auth',
            element:<h2>Authentication</h2>
        },
        {
            path:'/news',
            element:<h2>news layout</h2>
        },
        {
            path:'/*',
            element:<h2>Error 404</h2>
        },
    ]
)

export default router;