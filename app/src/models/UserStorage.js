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
    
  
}

module.exports = UserStorage;