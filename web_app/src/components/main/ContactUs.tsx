import { email, inst, phone, whatsApp } from "../../assets/images"
import styled from "styled-components"

export const ContactUs = () => {

  return (
    <Wrapper>
      <h3>КОНТАКТЫ BRIVILLAGE</h3>
      <ContactIconsWrapper>
        <PhoneWrapper>
          <IconWrapper>
            <Icon src={phone} alt="" />
          </IconWrapper>
          <p>+7 995 383 16 16</p>
        </PhoneWrapper>
        <SocialMediaWrapper>
          <IconWrapper>
            <Icon src={whatsApp} alt="" />
          </IconWrapper>
          <IconWrapper>
            <Icon src={inst} alt="" />
          </IconWrapper>
          <IconWrapper>
            <Icon src={email} alt="" />
          </IconWrapper>
        </SocialMediaWrapper>
      </ContactIconsWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding-bottom: 20px;
  margin-top: 25px;
  h3 {
    margin-left: 21px;
    font-size: 18px;
    line-height: 18px;
    color: white;
  }
`

const ContactIconsWrapper = styled.div`
  padding: 19px 21px 0 21px;
  margin-top: 9px;
  padding-top: 19px;
  padding-left: 21px;
  display: flex;
  border-top: 1px solid #444444;
  align-items: center;
  justify-content: space-between;
`

const SocialMediaWrapper = styled.div`
  display: flex;
  div {
    margin-left: 10px;
  }
`

const PhoneWrapper = styled.div`
  margin-right: 40px;
  width: 167px;
  height: 40px;
  border-radius: 33px;
  background: #D8DEEA1A;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    padding-right: 15px;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    letter-spacing: -0.02em;
    color: white;
  }
`

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background: #D8DEEA1A;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.img`
  width: 17px;
  height: 17px;
`

