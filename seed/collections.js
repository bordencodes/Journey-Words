const db = require('..db')
const { Collection } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
  const collections = [
    {
      title: 'Greetings',
      description: 'An initial interaction',
      phrases: [
        'hello',
        'good morning',
        'good afternoon',
        'good evening',
        'good night',
        'goodbye'
      ]
    },
    {
      title: 'Colors',
      description: 'The hue, shade, or tone of an object',
      phrases: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
    },
    {
      title: 'Days',
      description: 'A 24-hour period of time that forms a week',
      phrases: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
    },
    {
      title: 'Months',
      description: 'Consisting of days, and makes a year',
      phrases: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ]
    },
    {
      title: 'Seasons',
      description: 'The time of year when the weather patterns change',
      phrases: ['Winter', 'Spring', 'Summer', 'Fall']
    }
  ]

  await Collection.insertMany(collections)
  console.log('Created collections!')
}

const collecItems = async () => {
  await main()
  db.close()
}

collecItems()
