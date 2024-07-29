import styled from 'styled-components'

export const GradientGeneratorContainer = styled.div`
  display: flex;
  justify-content: center;
  background-image: linear-gradient(${props => props.gradientValue});
  min-height: 100vh;
`

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  max-width: 550px;
  @media screen and (min-width: 768px) {
    width: 85%;
    max-width: 1110px;
  }
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`
export const DirectionDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
`
export const GradientDirectionList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 60%;
    max-width: 425px;
  }
`

export const ColorPickersDescription = styled.p`
  color: #ededed;
  font-family: 'Roboto';
  font-size: 22px;
  font-weight: 500;
  line-height: 1.2;
`

export const ColorPickerContainer = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 320px;
`

export const CustomInputAndColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ColorValue = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`

export const CustomInput = styled.input`
  width: 100px;
  height: 50px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
`

export const GenerateButton = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  font-size: 14px;
  font-weight: 600;
  min-width: 25px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 12px 24px;
  margin-top: 25px;
  margin-bottom: 10px;
`
