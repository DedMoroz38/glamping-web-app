import { brivilageIcon, locationIson, optionArrow, reviewsIcon } from "../../assets/images"
import styled from "styled-components"

export const MainMenu = () => {
  
  return (
      <MenuWrapper>
        <MenuItem>
          <img src={brivilageIcon} alt="лого" />
          <p>Отзывы</p>
          <img src={optionArrow} alt="" />
        </MenuItem>
        <MenuItem>
          <img src={locationIson} alt="местоположенте" />
          <p>Местоположение</p>
          <img src={optionArrow} alt="" />
          </MenuItem>
        <MenuItem>
          <img src={reviewsIcon} alt="отзывы" />
          <p>Отзывы</p>
          <img src={optionArrow} alt="" />
          </MenuItem>
      </MenuWrapper>
  )
}

const MenuWrapper = styled.div`
  margin-top: 28px;
  padding: 0 10px;
  display: grid;
  grid-template-columns: 1fr; /* Each block takes an equal fraction of the available width */
  grid-template-rows: repeat(3, 60px);
  row-gap: 6px;
  `

const MenuItem = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 10px;
  border: 0.5px solid #FFFFFF1A;
  background: linear-gradient(91.02deg, rgba(201, 181, 157, 0.2) 0%, rgba(234, 234, 234, 0.2) 100%),
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  display: flex;
  align-items: center;
  padding-left: 14px;
  &:nth-child(1) {
    p {
      margin-left: 14px;
    }
  }
  &:nth-child(2) {
    padding-left: 18px;
    p {
      margin-left: 17px;
    }
  }
  &:nth-child(3) {
    padding-left: 11px;
    p {
      margin-left: 12px;
    }
  }
  p {
    font-family: Jost;
    font-size: 24px;
    font-weight: 600;
    color: white;
  }
  img:last-child {
    position: absolute;
    right: 20px;
    transform: translate(-50%, -50%);
    top: 50%;
  }
`

