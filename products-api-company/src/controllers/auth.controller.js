import User from '../models/User'
import jwt from 'jsonwebtoken'
import config from "../config.js";

export const signUp = async (req, res) => {
    
    const {username, email, password, roles} = req.body;  

    const newUser = new User({
        username,
        email,
        password: User.encryptPassword(password)
    })

    const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 86400 // 24 horas
    })

    res.status(200).json({token})
}

export const signin = async (req, res) => {
    res.json('singin')
}