import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';

import router from './app-routing';

export default function App() {

  return (
    <RouterProvider router={router} />
  );
}