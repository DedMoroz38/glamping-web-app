import styled from "styled-components"
import {MainMenu} from '../components/main/MainMenu.tsx'
import { ContactUs } from "../components/main/ContactUs.tsx"
import { Header } from "../components/main/Header.tsx"

export const Main = () => {

  return (
    <Wrapper>
      <Header />
      <BottomWrapper>
        <MainMenu />
        <ContactUs />
        <TransitionBlur />
      </BottomWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 100vh;
  margin: 0 auto; 
  display: flex;
  flex-flow: column;
  `

const BottomWrapper = styled.div`
  position: relative;
  flex: 1;
  background: #171815;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TransitionBlur = styled.div`
  position: absolute;
  background-image: linear-gradient(to bottom, rgba(23,24,21,0), rgba(23,24,21,1));
  width: 100vw;
  top: -200px;
  height: 200px;
`