const getUserInfo = function(user){
    return `name:${user.name}`
}

console.log(getUserInfo({name: '经发局'}))