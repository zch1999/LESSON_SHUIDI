var relativeSortArray = function(arr1, arr2) {
    let footerList = arr1.filter(t => !arr2.includes(t)).sort((a,b) => a - b)

    let list = []
    for(let i =0; i<arr2.length;i++){
      while(arr1.indexOf(arr2[i]) > -1){
        let index = arr1.indexOf(arr2[i])
        list.push(arr1[index])
        arr1.splice(index,1)
      }
    }
    return list.concat(footerList)
};