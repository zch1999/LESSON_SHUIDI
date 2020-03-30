import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
// 1: 数据
const xs = [1, 2, 3, 4];  // input  [i1.png, i2.png, i3.png]
const yx = [1, 3, 5, 7];  // output [y,       n,        y  ]

tfvis.render.scatterplot(
  {
    name: '数据集',
  },
  {
    values: xs.map((x, i) => {
      return {
        x,
        y: yx[i]
      }
      // [{x: 1, y: 1}, {x: 2, y: 3}]
    })
  }
)