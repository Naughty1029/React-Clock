import dayjs from 'dayjs'
import { ClockNum } from 'interfaces/ClockNum'
import styled from '@emotion/styled'

const DigitalClock: React.VFC<ClockNum> = ({ time }) => {
  return <SClockText>{dayjs(time).format('HH:mm:ss')}</SClockText>
}

const SClockText = styled.div`
  font-size: 50px;
  color: #ffffff;
  margin-top: 100px;
`

export default DigitalClock
