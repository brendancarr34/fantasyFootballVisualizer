import { createHashRouter } from "react-router-dom";
import App from '../components/App';
import NJFL from '../components/NJFL';
import EXFL from '../components/EXFL';
import ManagersPage from '../components/ManagersPage';
import ManagerRecordsPage from '../components/ManagerRecordsPage';

export const router = createHashRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/njfl",
    element: <NJFL/>,
  },
  {
    path: "/njfl/managers",
    element: <ManagersPage/>,
  },
  {
    path: "njfl/managerRecords",
    element: <ManagerRecordsPage/>,
  },
  {
    path: "/exfl",
    element: <EXFL/>
  }
]);