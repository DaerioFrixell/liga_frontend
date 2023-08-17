
const oneMin = 12
const oneHour = oneMin * 60
const durationStandard = 45
const durationLarge = 60
const countLessonsMin = 4
const countLessonsMax = 8

export const abonements = [
  {
    count: countLessonsMin,
    duration: durationStandard,
    amount: durationStandard * oneMin * countLessonsMin
  },
  {
    count: countLessonsMin,
    duration: durationLarge,
    amount: durationLarge * oneMin * countLessonsMin
  },
  {
    count: countLessonsMax,
    duration: durationStandard,
    amount: durationStandard * oneMin * countLessonsMax,
  },
  {
    count: countLessonsMax,
    duration: durationLarge,
    amount: durationLarge * oneMin * countLessonsMax,
  },
]