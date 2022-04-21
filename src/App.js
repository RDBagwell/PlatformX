import {Route, Routes} from 'react-router-dom';
import Home from './routes/home/Home.component';
import SideBar from './routes/sidebar/SideBar.component';
import Page from './routes/pages/Page.component';


function App() {
  return (
    <Routes>
      <Route path='/' element={<SideBar/>}>
        <Route path='/page:id' element={<Page />} />
        <Route index element={<Home/>} />
      </Route>
    </Routes>
  );
}

export default App;
