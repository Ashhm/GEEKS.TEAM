import mongoose from 'mongoose';


const UserSchema = new mongoose.Schema({
    login: {type: String, unique: true, lowercase: true, index: true, required: true},
    password: {type: String, required: true}
});

//not using es6 arrow function. prevent this
UserSchema.methods.comparePassword = function(password) {
    return this.password === password;
};

export default mongoose.model('User', UserSchema);