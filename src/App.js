import LayoutPage from './Pages/LayoutPage/LayoutPage';
import { router } from './Router';
import './style.css';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
