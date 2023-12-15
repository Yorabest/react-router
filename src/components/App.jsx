import { AppNav } from "./AppNav";
import {Outlet} from 'react-router-dom'

export const App = () => {
  return (
    <div className="container">
      <AppNav/>
      <Outlet></Outlet>
    </div>
  );
};
