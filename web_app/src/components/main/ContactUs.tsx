import { email, inst, phone, whatsApp } from "../../assets/images"
import styled from "styled-components"

export const ContactUs = () => {

  return (
    <Wrapper>
      <h3>СПОСОБЫ СВЯЗИ</h3>
      <ContactIconsWrapper>
        <img src={whatsApp} alt="" />
        <img src={inst} alt="" />
        <img src={phone} alt="" />
        <img src={email} alt="" />
      </ContactIconsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 0 10px;
  background: black;
  h3 {
    font-size: 18px;
    line-height: 18px;
    color: white;
  }
`

const ContactIconsWrapper = styled.div`
  margin-top: 12px;
  padding-top: 12px;
  padding-left: 7px;
  display: flex;
  border-top: 1px solid white;
  img {
    margin-right: 25px;
  }
`
