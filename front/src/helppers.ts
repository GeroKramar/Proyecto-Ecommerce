import { IErrorRegister, IErrorlogin, IRegister, Ilogin } from "./type";

export function validateLogin(value:Ilogin):IErrorlogin {
let errors:IErrorlogin = {}
    if(!value.email){
        errors.email = "email is required"
    } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)){
        errors.email = "invalid email format"
    }
    if (!value.password){
        errors.password = "Password is required"
    }
return errors
}

export function validateRegister(value:IRegister):IErrorRegister {
    let errors:IErrorRegister = {}
        if(!value.email){
            errors.email = "email is required"
        } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value.email)){
            errors.email = "invalid email format"
        }
        if (!value.password){
            errors.password = "Password is required"
        }
        if (!value.password2){
            errors.password2 = "Repeat Password"
        }
        if (!value.name){
            errors.name = "name is required"
        }
        if(!value.address){ errors.address = "address is required"}
        if(!value.phone){errors.phone = "Phone is required"}
        if (value.password !== value.password2){
            errors.password2 = "Passwords do not match."   
        }
    return errors
    }