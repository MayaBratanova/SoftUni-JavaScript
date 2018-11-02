function solve(arr) {
    let equipment = arr[0].split(' ').filter(a => a !== '')

    for (let i = 1; i < arr.length; i++) {
        let command = arr[i].split(' ').filter(a => a !== '')[0]
        let word = arr[i].split(' ').filter(a => a !== '')[1]
        if (command == 'Buy') {
            equipment.push(word)
        }
        else if (command == 'Trash') {
            let index = equipment.indexOf(word)
            if (index >= 0) {
                equipment.splice(index, 1)
            }

        }
        else if (command == 'Repair') {
            let index = equipment.indexOf(word)
            if (index >= 0) {
                equipment.splice(index, 1)
                equipment.push(word)
            }
        }
        else if (command == 'Upgrade') {
            let upgrade = word.split('-')[0]
            let newWord = upgrade + ':' + word.split('-')[1]
            let index = equipment.indexOf(upgrade)
            if (index >= 0) {

                equipment.splice(index+1, 0, newWord);
            }

        }
        else if (command == 'Fight') {
            break;
        }
    }
    console.log(equipment.join(' '));

}

solve(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel', 'Fight!'])