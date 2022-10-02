import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createHashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Prints } from './pages/Prints';
import { PrintEdit } from './pages/PrintsEdit';

const router = createHashRouter([ // Hash roote because we don't want a page refresh
  {
    path: "/edit/:id",
    element: <PrintEdit/>,
  },
  {
    path: "/",
    element: <Prints />,
  },
]);

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
