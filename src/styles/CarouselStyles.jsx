import styled from "styled-components";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs"


export const CarouselContainer = styled.div`
  width: 85%; 
  margin: auto;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`
export const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CarouselIMG = styled.img`
  min-width: 22%;
  margin-bottom: 60px;
  
  @media screen and (max-width: 1024px) {
    max-width: 95%;
  }

  @media screen and (max-width: 500px) {
    min-width: 60%;
    max-width: 75%;
  }
`
export const CarouselRightButton = styled(BsFillArrowRightCircleFill)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: #191919;
  border: none;
  font-size: 30px;
  ${(props) => (props.direction === 'next' ? 'right: 2px;' : 'left: 2px;')}

  &:hover{
    cursor: pointer;
  }
`
export const CarouselLeftButton = styled(BsFillArrowLeftCircleFill)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: #191919;
  border: none;
  font-size: 30px;
  ${(props) => (props.direction === 'next' ? 'right: 2px;' : 'left: 2px;')}

  &:hover{
    cursor: pointer;
  }
`