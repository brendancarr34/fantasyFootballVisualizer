import { createHashRouter } from "react-router-dom";
import App from '../components/App';
import NJFL from '../components/NJFL';
import EXFL from '../components/EXFL';
import ManagersPage from '../components/ManagersPage';
import ManagerRecordsPage from '../components/ManagerRecordsPage';
import ManagerRecordsByYearPage from '../components/ManagerRecordsByYearPage';
import TopThreeFinishes from "../components/TopThreeFinishes";

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
    path: "njfl/managerRecordsByYear",
    element: <ManagerRecordsByYearPage/>,
  },
  {
    path: "njfl/topThreeFinishes",
    element: <TopThreeFinishes/>
  },
  {
    path: "/exfl",
    element: <EXFL/>
  }
]);