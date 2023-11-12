import { mainBgImage, mainHeading } from "../assets/images"
import styled from "styled-components"
import {MainMenu} from '../components/main/MainMenu.tsx'
import { ContactUs } from "../components/main/ContactUs.tsx"

export const Main = () => {

  return (
    <Wrapper>
      <Header>
        <HeaderWrapper>
          <h2>GLAMPING RESORT</h2>
          <img src={mainHeading} alt="" />
        </HeaderWrapper>
        <ButtonsWrapper>
          <button>ЗАБРОНИРОВАТЬ ДОМИК</button>
          <button>УСЛУГИ BRIVILLAGE</button>
        </ButtonsWrapper>
      </Header>
      <MainMenu />
      <ContactUs />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 420px;
  margin: 0 auto; 
  `

const Header = styled.div`
  position: relative;
  padding-top: 74px;
  height: 468px;
  background-image: url(${mainBgImage});
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: fit-content;
  align-items: center;
  
  h2 {
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 6px;
  }
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top:  442px;

  & > button {
    border: 0.5px solid;
    background: linear-gradient(278.04deg, rgba(93, 82, 64, 0.2) 9.48%, rgba(0, 0, 0, 0) 95.42%),
      linear-gradient(133.44deg, rgba(216, 221, 233, 0.2) 20.85%, rgba(216, 221, 233, 0) 70.34%);
    border-radius: 33px;
    color: white;
    &:first-child {
      height: 64px;
      width: 320px;
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 29px;
    }
    &:last-child {
      font-size: 16px;
      height: 44px;
      width: 220px;
    }
  }
`