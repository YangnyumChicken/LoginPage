"use strict";

const UserStorage = require("./UserStorage");

class User{
    constructor(body){
        this.body = body;
    }

    login(){
        const client = this.body;
        const {id, pw} = UserStorage.getUserInfo(client.id);

        if(id){
            if(id === client.id &&pw === client.pw){
                return { success: true};
            }
            return {success: false, msg: "password wrong"};
        }
        return {success:false, msg:"plese check account"};
    }

    register(){
        const client = this.body;
        const reponse = UserStorage.save(client);
        return reponse;
    }
}

module.exports = User;