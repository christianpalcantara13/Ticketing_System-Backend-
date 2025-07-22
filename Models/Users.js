const MONGOOSE          = require('../Config/mongo');
const MODEL             = require('../Models/User');
const Schema            = MONGOOSE.Schema;

const schema    = new Schema
({
    full_name :            { type: String, trim: true, default : '', required: true }, 
    first_name :           { type: String, trim: true, default : '', required: true }, 
    middle_name :          { type: String, trim: true, default : '' }, 
    last_name :            { type: String, trim: true, default : '', required: true }, 
    contact_number :       { type: String, trim: true, default : '', required: true },
    email :                { type: String, lowercase : true, trim: true, default : '', required: true },
    password :             { type: String, trim: true, default : '', required: true },
    is_confirmed :         { type: Boolean, trim: true, default : false, required: true },
    user_type :            { type: String, default : "customer", trim: true, required: true },
    username:              { type: String, lowercase : true, trim: true,  required: true },
},
{
    timestamps :    { createdAt   : 'created_at', updatedAt   : 'updated_at' }
});

module.exports = class db_user extends MODEL
{
    constructor ()
    {
        super('db_users', schema);
        this.response_fields    = ['full_name', 'email', 'username'];
    }

    async findByEmail(email)
    {
        const res = await this.collection.findOne({ email });
        this.data = res;

        return res ? res : null;
    }
    async findByUsername(username)
    {
        const res = await this.collection.findOne({ username });
        this.data = res;
        return res ? res : null;
    }
    
}