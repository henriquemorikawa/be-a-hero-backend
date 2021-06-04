const User = require('../models/Users')

class UserController {
    constructor(){
        this.User = User
    }

    getOne = async (req, res, next) => {
        try {
          const { id } = req.params;
    
          const user = await this.User.findById(id);
    
          if (user === null) {
            res.status(404).json({ message: `User with id ${id} not found` });
            return;
          }
    
          res.status(200).json(user);
        } catch (error) {
          console.log(error);
        }
      }

    updateOne = async (req, res, next) => {
        try {
          const { params: { id }, body } = req;
    
          await this.User.findByIdAndUpdate(id, body);
    
          res.status(200).json({ message: `User with ID ${id} updated` });
        } catch (error) {
          console.log(error);
        }
      }
}

module.exports = new UserController()