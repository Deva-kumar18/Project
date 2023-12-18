import {createBrowserRouter} from 'react-router-dom'
import LayoutPage from './Pages/LayoutPage/LayoutPage'
import Home from './Pages/Home/Home'
import ProfessionalBranding from './Pages/ProfessionalBranding/ProfessionalBranding'



export const router = createBrowserRouter([{
    path:"/",
    element:<LayoutPage/>,
    children:[{
        path:"home",
        element:<Home/>
    },{
        path:"professionalbranding",
        element:<ProfessionalBranding/>
    }]
}])