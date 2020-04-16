var merge = function(intervals) {
    let len = intervals.length
    let res = []
    intervals.sort((a, b) => a[0] - b[0]);
    res.push(intervals[0])
    for(let i = 1;i<len;i++){
        if(intervals[i][0] > res[res.length-1][1]){
            res.push(intervals[i])
        }else{
            if(intervals[i][1] > res[res.length-1][1]){
                res[res.length-1][1] = intervals[i][1]
            }
        }
    }
    return res
};

// const intervals = [[1,3],[2,6],[8,10],[15,18]]
const intervals = [[1,4],[0,2],[3,5]]
console.log(merge(intervals))