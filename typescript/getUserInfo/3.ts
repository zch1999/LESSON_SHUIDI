interface IUser{
    name: string;
    age: number;
}

const getUserInfo2 = (user:IUser):string => {
    // if(true){
    //     return 123
    // }
    return `name:${user.name},age:${user.age}`
}

console.log(getUserInfo2({name: "解放军",age: 22}))