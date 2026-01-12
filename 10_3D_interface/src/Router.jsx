import {createBrowserRouter, createHashRouter} from 'react-router'
import App from './App.jsx'
import ThreeScene from './components/3D Canvas/ThreeCube.jsx'
import Solarsystem from './components/3D Canvas/Solarsystem.jsx'
import RotatingCard from './components/3D Canvas/RotatingCard.jsx'
import GlobeWithMoon from './components/3D Canvas/GlobeWithMoon.jsx'
import TrayLines from './components/3D Canvas/TrayLines.jsx'
import CenterContent from './components/3D Canvas/CenterContent.jsx'
import Home from './pages/Home.jsx'


const routers = createHashRouter([  
    {  
    path: "/",
    element: <App />,
    children: [
        { path:"", element:<Home /> },
        { path:"/ThreeScene", element: <ThreeScene />},
        { path:"/Solarsystem", element: <Solarsystem />},
        { path:"/RotatingCard", element: <RotatingCard />},
         { path:"/GlobeWithMoon", element: <GlobeWithMoon />},
         { path:"/TrayLines", element: <TrayLines />},
          { path:"/CenterContent", element: <CenterContent />}
    ]
    }])

export default routers;