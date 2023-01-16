import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Complete from './Component/Complete';
import QuesInfo from './Component/QuesInfo';

const router = createBrowserRouter([
  {
    path: "/", element: <QuesInfo></QuesInfo>
  },
  {
    path: "/complete", element: <Complete></Complete>
  }
])

function App() {
  return (
    <div >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
