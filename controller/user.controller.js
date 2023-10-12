const { user } = require("../model/user.model")

const home = async(req, res)=>{
    await res.send("Welcome to controller")
}
const signup = async(req,res)=>{
    const data = await user.findOne({email: req.body.email});
    try {
        if (data){
            return res.send("User already exists in database")
        }
        else{
           const data = await user.create(req.body)
            return res.send(data)
        }
    } catch (error) {
        return res.send(error.message)
    }
}

const login = async(req, res)=>{

    try {
        const data = await user.findOne({email: req.body.email});

        if (!data){
            return res.send("User not found")
        }
        if(data.password != req.body.password){
            return res.send("User pAssword is wrong")
        }

        return res.send("logged in")
    } catch (error) {
        return res.send(error.message)
    }
}


const index = (req,res)=>{
    res.render("index")
}

const product = (req, res)=>{
    res.render("product")
}

module.exports={home, signup, login, index, product}