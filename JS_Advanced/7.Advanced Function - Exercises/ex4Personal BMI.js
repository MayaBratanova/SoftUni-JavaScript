function solve(name, age, weight, height) {
    let bmi = Math.round(weight / (height / 100) / (height / 100))

    let data = {
        name: name,
        personalInfo: {age: age, weight: weight, height: height},
        BMI: bmi,

    }

    let status = ''

    if (bmi < 18.5) {
        status = 'underweight'
    }
    else if (bmi < 25 && bmi >= 18.5) {
        status = 'normal'
    }
    else if (bmi < 30 && bmi >= 25) {
        status = 'overweight'
    }
    else if (bmi >= 30) {
        status = 'obese'
    }
    data.status = status
    if (bmi >= 30) {
        data.recommendation = 'admission required';
    }
    return data
}

console.log(solve('Honey Boo Boo', 9, 57, 137));