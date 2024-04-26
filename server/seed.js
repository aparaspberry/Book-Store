import express from 'express'
import bcrypt from 'bcrypt'
import { Admin } from './models/Admin.js'
import './db.js'

//this file is run once using command "$node seed.js" and once run successfully close the terminal 
//this will create a admin user with password and username mentioned in this code. We have to login with that

async function AdminAccount() {     //this is asynchrous funtion to encrypt admin password and related tokens
    try {
        const adminCount = await Admin.countDocuments()
        if (adminCount === 0) {         //if there is no admin created then proceed for creating new admin
            const hashPassword = await bcrypt.hash('adminpassword', 10)
            const newAdmin = new Admin({
                username: 'admin',
                password: hashPassword
            })
            await newAdmin.save()
            console.log('account created')
        } else {
            console.log('account already exist')
        }
    } catch(err) {
        console.log('error')
    }
}

AdminAccount()
