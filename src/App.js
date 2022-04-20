import {Route, Routes} from 'react-router-dom';
import Home from './routes/home/Home.component';
import SideBar from './routes/sidebar/SideBar.component';
import Page1 from './routes/pages/page1/Page1.component';
import Page2 from './routes/pages/page2/Page2.component';
import Page3 from './routes/pages/page3/Page3.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<SideBar/>}>
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page2' element={<Page2 />}/>
        <Route path='/page3' element={<Page3 />}/>
        <Route index element={<Home/>} />
      </Route>
    </Routes>
  );
}

export default App;
