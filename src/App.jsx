import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"
import RootLayout from "./Components/RootLayout"
import Home from "./pages/Home"
import NewAbout from "./pages/NewAbout"
import Service from "./pages/Service"
import TeamMain from "./pages/TeamMain"




let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path="NewAbout" element={<NewAbout/>}></Route>
    <Route path="Service" element={<Service/>}></Route>
    <Route path="TeamMain" element={<TeamMain/>}></Route>
    
    

  </Route>

))

function App() {
  

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
