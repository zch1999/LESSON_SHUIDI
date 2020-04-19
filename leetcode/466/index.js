// var getMaxRepetitions = function(s1, n1, s2, n2) {
//     console.log(s1.includes(s2))
// }

const s1 = 'acb' 
const s2 = 'ab'
const n1 = 4
const n2 = 2


var getMaxRepetitions= function(s1, n1, s2, n2) {
        let len1 = s1.length;
        let len2 = s2.length;
        // 特判
        if (len1 == 0 || len2 == 0 || n1 == 0 || n2 == 0) {
            return 0;
        }
        let chars1 = s1.split("");
        let chars2 = s2.split("");

        // 记录下一个要匹配的s2中字符的索引
        let index = 0;
        // 记录匹配完的s2个数
        let count = 0;
        // 记录在遍历每个s1时匹配出的s2的个数，可能是包含了前面一个s1循环节的部分
        let countRecorder = [];
        // 记录在每个s1中想要匹配的s2中字符的索引
        let indexRecorder = [];

        for (let i = 0; i < n1; ++i) {
            // 遍历s1
            for (let j = 0; j < len1; ++j) {
                // 匹配s2字符，匹配成功，s2索引+1
                if (chars1[j] == chars2[index]) {
                    ++index;
                }
                // 匹配完一个s2，计数器+1，重置s2索引
                if (index == chars2.length) {
                    index = 0;
                    ++count;
                }
            }
            // 记录遍历完i个s1后s2出现的次数
            countRecorder[i] = count;
            // 记录遍历完第i个s1后s2下一个要被匹配到的字符下标
            indexRecorder[i] = index;
            // 剪枝
            // 查看该索引在之前是否已出现，出现即表示已经出现循环节，可以直接进行计算
            // 上一次出现该索引是在第j个s1中（同时可以说明第一个循环节的出现是从第j+1个s1开始的）
            for (let j = 0; j < i && indexRecorder[j] == index; ++j) {
                // preCount: 记录循环节出现之前的s2出现的个数
                let preCount = countRecorder[j];
                // patternCount: 记录所有循环节构成的字符串中出现s2的个数
                //      (n1 - 1 - j) / (i - j): 循环节个数
                //      countRecorder[i] - countRecorder[j]: 一个循环节中包含的s2个数
                let patternCount = ((n1 - 1 - j) / (i - j)) * (countRecorder[i] - countRecorder[j]);
                // remainCount: 记录剩余未构成完整循环节的部分出现的s2的个数
                //      通过取模从已有循环节记录中查找，并减去循环节之前出现的次数
                let remainCount = countRecorder[j + (n1 - 1 - j) % (i - j)] - countRecorder[j];
                // 三者相加，即为出现的s2的总次数
                return (preCount + patternCount + remainCount) / n2;
            }
        }
        // 没有循环节的出现，相当于直接使用暴力法
        return countRecorder[n1 - 1] / n2;
    }

    console.log(getMaxRepetitions(s1,n1,s2,n2))