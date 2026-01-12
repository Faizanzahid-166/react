import {createBrowserRouter, createHashRouter} from 'react-router'
import App from './App.jsx'
import ThreeScene from './components/3D Canvas/ThreeCube.jsx'
import Solarsystem from './components/3D Canvas/Solarsystem.jsx'
import ProductScene from './components/3D Canvas/ProductScene.jsx'
import GlobeWithMoon from './components/3D Canvas/GlobeWithMoon.jsx'
import Home from './pages/Home.jsx'


const routers = createHashRouter([  
    {  
    path: "/",
    element: <App />,
    children: [
        { path:"", element:<Home /> },
        { path:"/ThreeScene", element: <ThreeScene />},
        { path:"/Solarsystem", element: <Solarsystem />},
        { path:"/ProductScene", element: <ProductScene />},
         { path:"/GlobeWithMoon", element: <GlobeWithMoon />}
    ]
    }])

export default routers;