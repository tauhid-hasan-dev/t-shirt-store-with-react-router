import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';

function App() {
  const router = createBrowserRouter([
    {path: "/", 
    element: <Main></Main>,
    children: [
      {path:'/home', 
      loader: ()=> fetch('data.json'), 
      element: <Home></Home>}, 
      {path:'/orders', element: <Orders></Orders>}, 
    ] 
  }
  ])
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
