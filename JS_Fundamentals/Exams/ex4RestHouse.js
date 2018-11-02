function restHouse(arrRooms, arrQuests) {
    let doubleRoom = []
    let tripleRoom = []
    let book = new Map()
    for (const el of arrRooms) {
        let roomNumber = el.number
        let typeRoom = el.type
        if(typeRoom==='double-bedded'){
            doubleRoom.push(roomNumber)
            book.set(roomNumber, new Map())
        }
        else if(typeRoom === 'triple'){
            tripleRoom.push(roomNumber)
            book.set(roomNumber, new Map())
        }
    }

    let peopleLeft = 0
    let freePlace = {'gender': 0, 'count':0, 'room':0}
    let freeArr = []
    for (const quests of arrQuests) {
        let nameFirst = quests.first.name
        let nameSecond = quests.second.name
        let genderFirst = quests.first.gender
        let genderSecond = quests.second.gender
        let ageFirst = Number(quests.first.age)
        let ageSecond = Number(quests.second.age)
        if(genderFirst !== genderSecond && doubleRoom.length>0){
            let number = doubleRoom.shift()
            book.get(number).set(nameFirst, ageFirst)
            book.get(number).set(nameSecond, ageSecond)
            ageFirst = 0
            //{'gender1': genderFirst, 'name1':nameFirst, 'age1':ageFirst, 'gender2':genderSecond, 'name2':nameSecond, 'age2':ageSecond})
        }
        else if(genderFirst!==genderSecond && doubleRoom.length===0){
            peopleLeft+=2
            ageFirst = 0
        }
        if(genderFirst === genderSecond &&(tripleRoom.length>0||freeArr.length>0)){
            if(freeArr.length>0) {
                for (let i = 0; i < freeArr.length; i++) {
                    if (freeArr[i].gender === genderFirst && freeArr[i].count === 2) {
                        book.get(freeArr[i].room).set(nameFirst, ageFirst)
                        book.get(freeArr[i].room).set(nameSecond, ageSecond)

                        freeArr.splice(i,1)
                        ageFirst = 0
                        break

                    }
                    else if (freeArr[i].gender === genderFirst && freeArr[i].count === 1) {
                        book.get(freeArr[i].room).set(nameFirst, ageFirst)
                        freeArr.splice(i,1)
                        if(tripleRoom.length>0){
                            let number = tripleRoom.shift()
                            book.get(number).set(nameSecond, ageSecond)
                            freePlace = {'gender': genderFirst, 'count': 2, 'room': number}
                            freeArr.push(freePlace)
                            ageFirst = 0
                            break
                        }
                        else{
                            peopleLeft+=1
                            ageFirst = 0
                        }

                    }
                }

            }
            else{
                let number = tripleRoom.shift()
                book.get(number).set(nameFirst, ageFirst)
                book.get(number).set(nameSecond, ageSecond)
                freePlace = {'gender': genderFirst, 'count': 1, 'room': number}
                freeArr.push(freePlace)
                ageFirst = 0
            }
            if(ageFirst>0){
                let number = tripleRoom.shift()
                book.get(number).set(nameFirst, ageFirst)
                book.get(number).set(nameSecond, ageSecond)
                freePlace = {'gender': genderFirst, 'count': 1, 'room': number}
                freeArr.push(freePlace)
                ageFirst = 0
            }

        }
        else if(genderFirst===genderSecond && doubleRoom.length===0){
            peopleLeft+=2
        }

    }
    //console.log(book);
    let sortedBook = new Map([...book.entries()].sort((a,b)=>a>b))
    for (const [k, v] of sortedBook) {
        console.log(`Room number: ${k}`);
        let sortedV = new Map([...v.entries()].sort((a,b)=>a>b))
        for (const [m,n] of sortedV) {
            console.log(`--Guest Name: ${m}`);
            console.log(`--Guest Age: ${n}`);

        }
        let valid = true
        for (let i = 0; i < freeArr.length; i++) {

            if(freeArr[i].room===k){
                console.log(`Empty beds in the room: ${freeArr[i].count}`);
                valid = false
            }


        }
        if(valid==true) {
            if (sortedBook.get(k).length === 0 || doubleRoom.includes(k)) {
                console.log(`Empty beds in the room: 2`);
            }
            else if (sortedBook.get(k).length === 0 || tripleRoom.includes(k)) {
                console.log(`Empty beds in the room: 3`);
            }
            else {
                console.log(`Empty beds in the room: 0`);
            }
        }
    }
    console.log(`Guests moved to the tea house: ${peopleLeft}`);

}

restHouse([ { number: '101A', type: 'double-bedded' },
        { number: '104', type: 'triple' },
        { number: '101B', type: 'double-bedded' },
        { number: '102', type: 'triple' } ],
    [ { first: { name: 'Sushi & Chicken', gender: 'female', age: 15 },
        second: { name: 'Salisa Debelisa', gender: 'female', age: 25 } },
        { first: { name: 'Daenerys Targaryen', gender: 'female', age: 20 },
            second: { name: 'Jeko Snejev', gender: 'male', age: 18 } },
        { first: { name: 'Pesho Goshov', gender: 'male', age: 20 },
            second: { name: 'Gosho Peshov', gender: 'male', age: 18 } },
        { first: { name: 'Conor McGregor', gender: 'male', age: 29 },
            second: { name: 'Floyd Mayweather', gender: 'male', age: 40 } } ]

)