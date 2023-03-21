"use strict";

class UserStorage {
    static #users = {
        id: ["root", "phantom"],
        pw: ["2017", "2017"],
        name : ['hoyeon', 'pama']
    };

    static getUsers(...fields){
        
        const users = this.#users;

        const newUsers = fields.reduce((newUsers, field)=>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUsers, info)=>{
            newUsers[info] = users[info][idx];
            return newUsers;
        },{});
        return userInfo;
    }
    
    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.pw.push(userInfo.pw);
        users.name.push(userInfo.name);
        return {success: true};
    }
  
}

module.exports = UserStorage;