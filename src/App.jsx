import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Nav from './components/Nav';
import Packages from './components/Packages';
import Information from './components/Information';
import Drinks from './components/Drinks';
import './App.scss';

export default function App() {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <Nav />
        <Routes path='/'>
          <Route path='tab-1' element={<Packages />} />
          <Route path='tab-2' element={<Information />} />
          <Route path='tab-3' element={<Drinks />} />
        </Routes>
      </MemoryRouter>
    </Provider>
  );
}
