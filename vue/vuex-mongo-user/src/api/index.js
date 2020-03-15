const _users = [
    {
      "adress": {
        "city": "Los Angeles",
        "state": 'California',
        "pincode": "123"
      },
      "tags": [
        "music",
        "blog",
        "cricket"
      ],
      "name": "Tom Benzamin"
    },
    {
      "adress": {
        "city": "赣州",
        "state": '江西',
        "pincode": "331000"
      },
      "tags": [
        "music",
        "blog",
      ],
      "name": "志浩"
    }
  ]

export default{
    fetchUsers(cb){
        setTimeout(()=>cb(_users), 1000);
    }
}