import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

export function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}
