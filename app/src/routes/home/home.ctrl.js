"use strict";

const users = {
    id: ["root", "phantom"],
    pw: ["2017", "2017"]
};

const output = {
    home : (req, res)=>{
        res.render("home/index");
    },
    login : (req,res)=>{
        res.render("home/login");
    },

}

const process = {
    login : (req, res)=>{
        const id = req.body.id;
        const pw = req.body.pw;

       if(users.id.includes(id)){
        const idx = users.id.indexOf(id);

        if(users.pw[idx] === pw){
            return res.json({
                success : true,
            })
        }
       }

       return res.json({
        success : false,
        msg : "login false"
       })
    }
}

module.exports = {
    output,
    process
}