const {User} = require('./../model/user');
const {Image} = require('./../model/image');


Image.hasOne(User);
User.belongsTo(Image);