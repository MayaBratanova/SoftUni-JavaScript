class LineManager {
    constructor(stops) {
        this.stops = stops;
        this.currentStop = 0
        this.duration = 0
    }
    get currentStop() {
        return this._currentStop;
    }
    set currentStop(value) {
        if (value > 0 || value <= this.stops.length-1) {
            this._currentStop = value
        }
    }
    get duration() {
        return this._duration;
    }
    set duration(value) {
        if (value > 0) {
            this._duration = value
        }
    }
    get stops() {
        return this._stops;
    }
    set stops(value) {
        let istrue = false
        for (const elVal of value) {
            let keys = Object.keys(elVal)
            if (keys[0] !== 'name' || keys[1] !== 'timeToNext') {
                throw new Error("incorrect input")
            }
            else {
                let name = elVal.name
                let time = elVal.timeToNext
                if (name.length > 0 && time >= 0 && typeof time === 'number' && typeof name === 'string') {
                    istrue = true
                }
                else {
                    throw new Error("incorrect input")
                }
            }
        }
        if (istrue) {
            this._stops = value
        }
    }
    get atDepot(){
        return this.currentStop !== this.stops.length - 1 ? false : true;
    }
    get nextStopName(){
        if(this.currentStop===this.stops.length-1){
            return 'At depot.'
        }
        else{
            let num = this.currentStop
            return this.stops[num+1].name
        }
    }
    get currentDelay(){

    }

    arriveAtStop(minutes){
        if(minutes<0 || this.currentStop===this.stops.length-1){
            throw new Error('incorrect input')
        }
        else{
            this.stops.timeToNext+=this.duration
            this.currentStop = this.currentStop+1
            return this.currentStop !== this.stops.length - 1 ? false : true;
        }
    }
    toString(){
        let str = ''
        str+=`Line summary\n- Next stop: ${this.stops[1].name}\n- Stops covered: 0\n- Time on course: 0 minutes\n- Delay: 0 minutes\n`
        for (let i = 2; i < this.stops.length; i++) {
           str+= `Line summary\n- Next stop: ${this.stops[i].name}\n- Stops covered: ${i-1}\n- Time on course: ${this.stops[i-2].timeToNext} minutes\n- Delay: 0 minutes\n`
        }
        return str
    }

}

const man = new LineManager([
    {name: 'Depot', timeToNext: 4},
    {name: 'Romanian Embassy', timeToNext: 2},
    {name: 'TV Tower', timeToNext: 3},
    {name: 'Interpred', timeToNext: 4},
    {name: 'Dianabad', timeToNext: 2},
    {name: 'Depot', timeToNext: 0},
]);

// Travel through all the stops until the bus is at depot
//while(man.atDepot === false) {
//    console.log(man.toString());
//    man.arriveAtStop(4);
//}

console.log(man.toString());

// Should throw an Error (minutes cannot be negative)
//man.arriveAtStop(-4);
// Should throw an Error (last stop reached)
man.arriveAtStop(4);

// Should throw an Error at initialization
const wrong = new LineManager([
    { name: 'Stop', timeToNext: { wrong: 'Should be a number'} }
]);

