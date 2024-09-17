import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './scss/index.scss';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import 'dayjs/locale/fr';
import { lazy } from 'react';
import DataArray from './pages/DataArray.jsx';

const Home = lazy(() => import("./pages/Home.jsx") )
// const DataArray = lazy(() => import("./pages/DataArray.jsx") )

function App() {


  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="fr" >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/data" element={<DataArray />}></Route>
          <Route path="*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
