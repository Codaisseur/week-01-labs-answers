const employers = [
  {
    first_name: 'Charles',
    last_name: 'Peterson',
    title: 'Baron',
    gender: 'Male'
  },
  {
    first_name: 'Elisabeth',
    last_name: 'the Second',
    title: 'Queen',
    gender: 'female'
  },
  {
    first_name: 'Elisabeth',
    last_name: 'the Third',
    title: 'Viscountess',
    gender: 'female'
  }
]

const findFormOfAddress = function (employer) {
  if (employer.title === 'King' || employer.title === 'Queen') {
    console.log('Your Majesty')
  } else if (employer.title === 'Prince' || employer.title === 'Princess') {
    console.log('Your Royal Highness')
  } else if (employer.title === 'Duke' || employer.title === 'Duchess') {
    console.log('Your Grace')
  } else if (employer.title === 'Baronet' || employer.title === 'Knight') {
    console.log(`Sir ${employer.first_name}`)
  } else if (employer.title === 'Dame') {
    console.log(`Dame ${employer.first_name}`)
  } else {
    if (employer.gender === 'female') {
      console.log(`Lady ${employer.last_name}`)
    } else {
      console.log(`Lord ${employer.last_name}`)
    }
  }
}

employers.forEach(function(employer) {
  findFormOfAddress(employer)
})
