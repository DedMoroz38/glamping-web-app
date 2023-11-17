import { Route, Routes } from "react-router-dom";
import { Main } from "./routes/Main";
import styled from "styled-components";

export const App = () => {

  return  (
    <Container>
      <Main/>
    </Container>
    // <Routes>
    //   <Route
    //     path="/*"
    //     element={<Main/>}
    //   />
    // </Routes>
  )
}

const Container = styled.div`
  width: 100vw;
`