import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import router from "./router";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// const queryClient = new QueryClient();

function App() {
  return (
    <div className="max-w-[1230px] mx-auto text-black">
      {/* <QueryClientProvider client={queryClient}> */}
      <RouterProvider router={router} />
      <Toaster />
      {/* </QueryClientProvider> */}
    </div>
  );
}

export default App;
