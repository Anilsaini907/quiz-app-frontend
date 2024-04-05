
import '../styles/App.css';
import{createBrowserRouter,RouterProvider} from 'react-router-dom';
import Main from './Main';
import Quiz from './Quiz';
import Result from './Result';
import Login from './Login';

const router= createBrowserRouter([
{
  path:'/main',
  element:<Main></Main>
},
{
  path:'/quiz',
  element:<Quiz></Quiz>
},
{
  path:'/result',
  element:<Result></Result>
},
{
  path:'/',
  element:<Login></Login>
},
{
  path:'/register',
  element:<div>Register</div>
},


]);
function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
