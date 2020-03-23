import Mock from 'mockjs'

// const dataList = []

var status =['created','completed','cancaled']
const dataList = {
    'orders|100':[{
        "_id|+1": 1,
        "name": "@name",
        "orderdate": "@datetime",
        "status|1": status,
        "shoppingee": "@float(0,8,0,2)",
        "total": "@float(20,80,0,2)"
    }]
}

Mock.mock('/api/orders','post', dataList)

export default Mock;