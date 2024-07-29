import styled from 'styled-components'

export const ListItem = styled.li`
  width: 49%;
  list-style-type: none;
  @media screen and (min-width: 768px) {
    width: 24%;
  }
`
export const DirectionButton = styled.button`
  text-align: center;
  color: ${props => (props.isActive ? '#334155' : '#1e293b')};
  background-color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 14px;
  width: 100%;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 12px 24px;
  margin-bottom: 10px;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
