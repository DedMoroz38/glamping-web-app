import { Route, Routes } from "react-router-dom";
import { Main } from "./routes/Main";

export const App = () => {

  return  (
    <Main/>
    // <Routes>
    //   <Route
    //     path="/*"
    //     element={<Main/>}
    //   />
    // </Routes>
  )
}