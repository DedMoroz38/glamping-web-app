import styled from "styled-components"
import { croppedMainBgImage, mainBgImage, mainHeading } from "../../assets/images"
import { Dispatch, SetStateAction, useRef } from "react"

type HeaderProps = {
  setIsRouting: Dispatch<SetStateAction<boolean>>
}

export const Header = ({setIsRouting}: HeaderProps) => {  
  const buttonsWrapperRef = useRef<HTMLDivElement>(null)
  const headerWrapperRef = useRef<HTMLDivElement>(null)

  const transitionOut = () => {
    setIsRouting(true)
    headerWrapperRef?.current?.classList.add('transitionOut')
    buttonsWrapperRef?.current?.classList.add('transitionOut')
  }

  return (
    <Wrapper>
      <HeaderWrapper ref={headerWrapperRef}>
        <h2>GLAMPING RESORT</h2>
        <img src={mainHeading} alt="" />
      </HeaderWrapper>
      <ButtonsWrapper
        ref={buttonsWrapperRef}
      >
        <button onClick={() => transitionOut()}>ЗАБРОНИРОВАТЬ ДОМИК</button>
        <button>УСЛУГИ BRIVILLAGE</button>
      </ButtonsWrapper>
      <CroppedBgImage src={croppedMainBgImage} alt="" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  padding-top: 74px;
  height: 550px;
  background: url(${mainBgImage}) no-repeat top center;
  background-size: 100% auto;
`

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: fit-content;
  align-items: center;
  color: black;
  position: relative;
  
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

const CroppedBgImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 100vw;
`

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  bottom: -15px;
  z-index: 1;

  & > button {
    background: linear-gradient(278.04deg, rgba(93, 82, 64, 0.2) 9.48%, rgba(0, 0, 0, 0) 95.42%),
      linear-gradient(133.44deg, rgba(216, 221, 233, 0.2) 20.85%, rgba(216, 221, 233, 0) 70.34%),
      linear-gradient(0deg, rgba(216, 222, 234, 0.1), rgba(216, 222, 234, 0.1));


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