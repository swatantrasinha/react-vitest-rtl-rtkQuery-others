import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import {Provider} from 'react-redux'
import App from './App.tsx'
import './index.css'
import Layout from './components/layout/Layout.tsx';
import Home from './components/home/Home.tsx';
import SampleCoponents from './components/sample-components/SampleCoponents.tsx';
import { store } from './redux/store.ts';
import FetchUsingCustomHook from './components/fetch-using-custom-hook/FetchUsingCustomHook.tsx';

const router= createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/fetch-using-custom-hook" element={<FetchUsingCustomHook />} />
      <Route path="sample-components" element={<SampleCoponents />} />
     

      {/* <Route path="contact/" element={<Contact />} />
      
      
      <Route path="user/" element={<User />} >
        <Route path=":userId"  element={<User />} />
      </Route>
      <Route loader={usersListInfoLoader} path="usersList/" element={<UsersList />} />
     
      <Route path="products" element={<ProductsList />} /> */}

      <Route path="*" element={<div> Page Not Found </div>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />  
     </Provider>
  </React.StrictMode>,
)
