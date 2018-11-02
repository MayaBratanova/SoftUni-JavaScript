function pointInside(array) {
    if (array[0]>=array[2]&& array[0]<=array[3] && array[1]>=array[4]&& array[1]<=array[5]) {
        console.log('inside')
    }
    else{
        console.log('outside')
    }
}
pointInside([8,-1,2,12,-3,3])