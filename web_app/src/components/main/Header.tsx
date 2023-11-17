import styled from "styled-components"
import { mainBgImage, mainHeading } from "../../assets/images"

export const Header = () => {
  

  return (
    <Wrapper>
      <HeaderWrapper>
        <h2>GLAMPING RESORT</h2>
        <img src={mainHeading} alt="" />
      </HeaderWrapper>
      <ButtonsWrapper>
        <button>ЗАБРОНИРОВАТЬ ДОМИК</button>
        <button>УСЛУГИ BRIVILLAGE</button>
      </ButtonsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding-top: 74px;
  height: 420px;
  background-image: url(${mainBgImage});
  background-repeat: no-repeat;
  background-size: 100% 100%;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: fit-content;
  align-items: center;
  color: black;
  
  h2 {
    font-size: 20px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 6px;
  }
  img {
    width: 90vw;
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
  z-index: 1;

  & > button {
    background: linear-gradient(278.04deg, rgba(93, 82, 64, 0.2) 9.48%, rgba(0, 0, 0, 0) 95.42%),
                linear-gradient(273.4deg, rgba(201, 181, 157, 0.15) 9.01%, rgba(255, 255, 255, 0.15) 100.22%),
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