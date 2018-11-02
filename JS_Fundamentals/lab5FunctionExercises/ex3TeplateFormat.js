function template(array) {

    console.log('<?xml version="1.0" encoding="UTF-8"?>')
    console.log('<quiz>')
    for (let i = 0; i < array.length; i += 2) {
        let question = array[i]
        let answer = array[i + 1]

        console.log(`  <question>
    ${question}
  </question>
  <answer>
    ${answer}
  </answer>`)
    }
    console.log('</quiz>')
}
template(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]

)