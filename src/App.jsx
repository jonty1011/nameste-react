
import { createBrowserRouter, RouterProvider ,Outlet } from 'react-router-dom';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './RestaurantMenu';
// Define your App component
const App = () => {
  return (
    <div className="App">
      
      <Header />
      <Outlet/> 
     
    </div>
  );
};

// Define your routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Body/>
      }
      ,{
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path:"/restaurant/:resId",
        element: <RestaurantMenu/>
      }
    ],
    errorElement: <Error /> // Optional: Define an error element for this route
  },
  
]);

// Export the RouterProvider with the defined routes
const AppRouter = () => {
  return <RouterProvider router={appRouter} />;
};

export default AppRouter;
