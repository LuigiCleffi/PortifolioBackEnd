import mongoose from "mongoose";
import bcrypt from "bcrypt";
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true, validate: {
        validator: function(value){
            return passwordRegex.test(value)
        },
        message: 'Password must be at least 8 characters long, with at least 1 lowercase letter, 1 uppercase letter, and 1 number.'        
    },
    createdAt: { type: Date, default: Date.now }
},
})

UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, 10, (error, hash) => {
        if (error) return next(error);
        user.password = hash;
        next();
    });
});



const users = mongoose.model('users', UserSchema)

export default users