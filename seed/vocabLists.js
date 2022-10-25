const db = require('../db')
const { Collection } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
  const vocabLists = [
    {
      title: 'Greetings',
      description: 'An initial interaction',
      phrases: [
        'hello', //6356f591e16a6c7de446741c
        'good morning', //6356f7a4e16a6c7de446741e
        'good afternoon', //6356f7d3e16a6c7de4467420
        'good evening', //6356f805e16a6c7de4467422
        'good night', //6356f81fe16a6c7de4467424
        'goodbye' //6357e05ae16a6c7de4467426
      ]
    },
    {
      title: 'Colors',
      description: 'The hue, shade, or tone of an object',
      phrases: [
        'red', //6357edf652a93dc35a24292b
        'orange', //6357ef300929c5c8303e7823
        'yellow', //6357f0c60929c5c8303e7825
        'green', //6357f1220929c5c8303e7827
        'blue', //6357f14a0929c5c8303e7829
        'indigo', //6357f2b00929c5c8303e782b
        'violet' //6357f3e20929c5c8303e782d
      ]
    },
    {
      title: 'Days',
      description: 'A 24-hour period of time that forms a week',
      phrases: [
        'Sunday', //6357f4980929c5c8303e782f
        'Monday', //6357f5990929c5c8303e7831
        'Tuesday', //6357f5fb0929c5c8303e7833
        'Wednesday', //6357f69c0929c5c8303e7835
        'Thursday', //6357f6dc0929c5c8303e7837
        'Friday', //6357f7210929c5c8303e7839
        'Saturday' //6357f76a0929c5c8303e783b
      ]
    },
    {
      title: 'Months',
      description: 'Consisting of days, and makes a year',
      phrases: [
        'January', //6357f854b4d715b05133a494
        'February', //6357f8aab4d715b05133a496
        'March', //6357f93db4d715b05133a498
        'April', //6357f9a3b4d715b05133a49a
        'May', //6357fa00b4d715b05133a49c
        'June', //6357fa66b4d715b05133a49e
        'July', //6357fad3b4d715b05133a4a0
        'August', //6357fb39b4d715b05133a4a2
        'September', //6357fb8ab4d715b05133a4a4
        'October', //6357fbbab4d715b05133a4a6
        'November', //6357fbe8b4d715b05133a4a8
        'December' //6357fc0eb4d715b05133a4aa
      ]
    },
    {
      title: 'Seasons',
      description: 'The time of year when the weather patterns change',
      phrases: [
        'winter', //6357fd2fd98c709ad2c2612d
        'spring', //6357fe6ad98c709ad2c2612f
        'summer', //6357feafd98c709ad2c26131
        'fall' //6357ffd5d98c709ad2c26133
      ]
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
