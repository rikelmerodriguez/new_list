import styled from 'styled-components'
import { Colors } from '../../styles/theme'

export const ContainerMyContact = styled.div`
  max-width: 1024px;
  height: 100%;
  margin: 80px auto;
  padding: 32px 40px;
  background-color: ${Colors.blue};
  border-radius: 10px;
`

export const ContainerContacts = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`

export const Title = styled.h3`
  font-size: 20px;
  font-weight: bold;
  color: ${Colors.blue100};
`
