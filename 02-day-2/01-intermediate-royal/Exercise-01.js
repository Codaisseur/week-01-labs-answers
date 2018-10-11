// The console.log() that are commented out, are my way of checking whether my function works!

const employer = {
  first_name: 'Charles',
  last_name: 'Peterson',
  title: 'Baron',
  gender: 'Male'
}

// console.log(employer.name, employer.title, employer.gender)

const findFormOfAddress = function(employer) {
  //  console.log(employer)
  if( employer.title === 'King' || employer.title === 'Queen') {
    // console.log('It is a king or a queen')
    console.log('Your Majesty')
  } else if (employer.title === 'Prince' || employer.title === 'Princess'){
    // console.log('It is a Prince/Princess')
    console.log('Your Royal Highness')
  } else if(employer.title === 'Duke' || employer.title === 'Duchess'){
    // console.log('It is a Duke/Duchess')
    console.log('Your Grace')
  } else if (employer.title === 'Baronet' || employer.title === 'Knight'){
    // console.log('It is a Baronet/Knight')
    console.log(`Sir ${employer.first_name}`)
  }else if(employer.title === 'Dame'){
    // console.log('It is a Dame')
    console.log(`Dame ${employer.first_name}`)
  } else {
    // console.log('It is a Marquess/Marchioness/Earl/Countess/Viscount/Viscountess/Baron/Baroness')
    if (employer.gender === 'female') {
      // console.log(employer.gender)
      console.log(`Lady ${employer.last_name}`)
    } else {
      // console.log(employer.gender)
      console.log(`Lord ${employer.last_name}`)
    }
  }

}


findFormOfAddress(employer)

const employer2 = {
  first_name: 'Elisabeth',
  last_name: 'the Second',
  title: 'Queen',
  gender: 'female'
}

const employer3 = {
  first_name: 'Elisabeth',
  last_name: 'the Third',
  title: 'Viscountess',
  gender: 'female'
}

findFormOfAddress(employer2)
findFormOfAddress(employer3)
