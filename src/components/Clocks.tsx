import DigitalClock from 'components/DigitalClock'
import AnalogClock from 'components/AnalogClock'
import { useTime } from 'hooks/useTime'

const Clocks: React.VFC = () => {
  const time = useTime(1000)
  return (
    <>
      <AnalogClock time={time} />
      <DigitalClock time={time} />
    </>
  )
}

export default Clocks
