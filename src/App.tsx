import { BrowserRouter,Route, Routes  } from 'react-router-dom';
import { Admin } from "./pages/admin";
import { Dashboard } from "./pages/dashboard";
import { Companies } from "./pages/companies";
import { Jobs } from './pages/job';
import { Licenses } from './pages/licenses';
import { Products } from './pages/products';
import { NavApi } from './components/context/navApi';
import { Compaigns } from './pages/compaigns';
import { Settings } from './pages/settings';
import { EditJob } from './pages/editjob';


export function App()
{
    return(
        <>
       <NavApi>
       <BrowserRouter>
       <Routes >
        <Route element={<Admin/>}>
            <Route path="/" element={<Dashboard/>}/>
            <Route  path="/companies" element={<Companies/>}/>
             <Route path="/jobs" element={<Jobs/>}/>
            <Route  path="/products" element={<Products/>}/>
             <Route path="/Licenses" element={<Licenses/>}/>
            <Route  path="/compaign" element={<Compaigns/>}/>
             <Route  path="/Setting" element={<Settings/>}/>
               <Route  path="/jobs/jobedit" element={<EditJob/>}/>
            <Route />
        </Route>
       </Routes>
       </BrowserRouter>
       </NavApi>
        </>
    )
}
export default App;