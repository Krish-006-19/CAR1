import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App1m from './miniproj1/App1m.jsx'
// import App1 from './proj1/App1.jsx'
// import App2 from './proj2/App2.jsx'
// import App3 from './proj3/App3.jsx'
// import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
// import Layout from './proj4/Layout.jsx'
// import HOME from './proj4/Components/Home.jsx'
// import About from './proj4/Components/Aboutus.jsx'
// import Contactus from './proj4/Components/Contactus.jsx'
// import User from './proj4/Components/User.jsx'
// import Github,{githubLoader} from './proj4/Components/Github.jsx'
// import Youtube, { youtubestuff } from './proj4/Components/Youtube.jsx'
// let router = createBrowserRouter(
//   [
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<HOME/>
//       },
//       {
//         path:'about',
//         element:<About/>
//       },
//       {
//         path:'contact',
//         element:<Contactus/>
//       },
//       {
//         path:'user/:userid',
//         element:<User/>
//       },
//       {
//         path:'github',
//         element:<Github/>,
//         loader:githubLoader
//       },
//       {
//         path:'youtube',
//         element:<Youtube/>,
//         loader:youtubestuff
//       }
//     ]
//   }
// ],
// { 
//   basename: '/CAR1' 
// }
// )
// import App5 from './proj5/App5'
// import App6 from './proj6/App6'
// import App7 from './proj7/App7'

import App8 from './proj8/App8'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    {/* <RouterProvider router={router} /> */}
    <App8/>
    </>
  </StrictMode>,
)
