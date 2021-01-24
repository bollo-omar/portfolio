import mongoose, { Collection } from 'mongoose';

const AccountSchema = new mongoose.Schema({
    accountName : {
        type : String,
        required : true,
        trim : 1
    },
    role : {
        type: String,
        required : true,
        enum : ['admin','user'],
        default : 'user'
    },
    email : {
        type : String,
        maxlength : 60,
        required : true,
        unique : true,
        trim : 1
    },
    password : {
        type : String,
        required  : true
    },
    createdAt : Date,
    updatedOn : Date
},
Collection.name = "Account");

AccountSchema.pre('save', ()=>{

    this.createdAt = Date.now();
    this.updatedOn = Date.now();
});

const AccountModel = mongoose.model('Account',AccountSchema);

module.exports = AccountModel;