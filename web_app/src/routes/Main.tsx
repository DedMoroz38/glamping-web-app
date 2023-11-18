import styled from "styled-components"
import {MainMenu} from '../components/main/MainMenu'
import { ContactUs } from "../components/main/ContactUs"
import { Header } from "../components/main/Header"
import { NextPage } from "../components/NextPage"
import { mainScreenVM } from "../ViewModels/MainScreenViewModel"
import { useEffect, useState } from "react"

export const Main = () => {
  const [isRouting, setIsRouting] = useState(false)

  useEffect(() => {
    if(!isRouting) return
    mainScreenVM.scroll()
  }, [isRouting])

  return (
    <>
      <Wrapper>
        <Header 
          setIsRouting={setIsRouting}
        />
        <BottomWrapper>
          <MainMenu
            isRouting={isRouting}
          />
          <ContactUs />
          <TransitionBlur />
        </BottomWrapper>
      </Wrapper>
      <NextPage />
    </>
    
  )
}

const Wrapper = styled.div`
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