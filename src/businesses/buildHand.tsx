export const buildHand = () => {
  const timeFormatArray = [
    {
      format: 'h',
      separate: 12,
    },
    {
      format: 'm',
      separate: 60,
    },
    {
      format: 's',
      separate: 60,
    },
  ]

  return timeFormatArray.map((value) => {
    return {
      format: value.format,
      separate: 360 / value.separate,
    }
  })
}
