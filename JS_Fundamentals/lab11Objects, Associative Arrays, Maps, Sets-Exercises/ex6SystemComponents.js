function systemComponents(arr) {
    let catalogue = new Map()
    for (const arrElement of arr) {
        let input = arrElement.split(' | ').filter(a=>a!=='')
        let name = input[0]
        let component = input[1]
        let subcomponent = input[2]
        if(!catalogue.has(name)){
            catalogue.set(name, new Map())
            catalogue.get(name).set(component,new Set())
            catalogue.get(name).get(component).add(subcomponent)
        }
        else if(catalogue.has(name) && !catalogue.get(name).has(component)){
            catalogue.get(name).set(component,new Set())
            catalogue.get(name).get(component).add(subcomponent)
        }
        else if(catalogue.has(name) && catalogue.get(name).has(component)){
            catalogue.get(name).get(component).add(subcomponent)
        }

    }
    function sortSystemComparator(sysA, sysB, catalogue) {
        let aComponents = catalogue.get(sysA).size;
        let bComponents = catalogue.get(sysB).size;
        if (aComponents > bComponents) return -1;
        if (aComponents < bComponents) return 1;

        return sysA.toLowerCase().localeCompare(sysB.toLocaleLowerCase());
    }

    let systems = [...catalogue.keys()].sort((a, b) => {
        let res = catalogue.get(b).size - catalogue.get(a).size
        if(res ===0){
            return a.toLowerCase().localeCompare(b.toLowerCase())
        }
        return res
    });
    for (let system of systems) {
        console.log(system);
        let components = [...catalogue.get(system).keys()].sort((s1, s2) =>
            catalogue.get(system).get(s2).size - catalogue.get(system).get(s1).size);
        for (let component of components) {
            console.log(`|||${component}`);
            for (let subComponent of catalogue.get(system).get(component)) {
                console.log(`||||||${subComponent}`);
            }
        }
    }

}
systemComponents(['SULS | Main Site | Home Page','SULS | Main Site | Login Page','SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page','SULS | Judge Site | Submittion Page','Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page','Lambda | CoreB | B24',
    'Lambda | CoreA | A24','Lambda | CoreA | A25','Lambda | CoreC | C4','Indice | Session | Default Storage',
    'Indice | Session | Default Security'])