import styled from 'styled-components'
import { Colors } from '../../styles/theme'

export const ContainerBar = styled.div`
  width: 100%;
  height: 160px;
  padding: 12px;
  margin-bottom: 16px;
  display: flex;
  gap: 16px;
  background-color: ${Colors.white};
  border-radius: 10px;

  &:hover {
    box-shadow: 2px 2px 15px ${Colors.blue150};
  }
`

export const ContainerImage = styled.div`
  width: 15%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const ContainerInfo = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ContainerTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    font-size: 32px;
    color: ${Colors.yellow};
    cursor: pointer;
  }
`

export const ContainerEdit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 12px;
`
export const Text = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: ${Colors.blue100};

  span {
    font-weight: 300;
  }
`
