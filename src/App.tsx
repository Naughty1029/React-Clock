import styled from '@emotion/styled'
import Clocks from 'components/Clocks'

function App() {
  return (
    <SBackGround>
      <Clocks />
    </SBackGround>
  )
}

const SBackGround = styled.div`
  background-color: #333333;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default App
