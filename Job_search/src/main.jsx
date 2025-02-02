import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App'
import WatchList from './Component/WatchList'
import JobList from './Component/JobList'
import ApplicationList from './Component/ApplicationList'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        index: true,
        element: <JobList />
      },
      {
        path: "/watch-list",
        element: <WatchList />
      },
      {
        path: "/applied",
        element: <ApplicationList />
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
