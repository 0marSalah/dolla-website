import styled from "styled-components"

export const Servicescontainer = styled.div`
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #010606;
  padding: 0 0 50px 0;
`
export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  margin: 70px 0;
`
export const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  width: 80vw;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  align-items: center;
  border-radius: 10px;
  padding: 30px 25px;
  color: #010606;
  transition: all 0.2s ease-in-out;
  text-align: center;
  img {
    width: 150px;
    height: 100px;
  }
  h3 {
    margin: 20px 0;
    font-weight: 700;
    font-size: 22px;
  }
  p {
    margin: 0 0 15px 0;
    font-size: 17px;
    font-weight: 400;
  }
  &:hover {
    transition: all 0.2s ease-in-out;
    transform: scale(1.05);
  }
`
