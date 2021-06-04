const Benefits = require('../models/Benefits')

class BenefitsController{
    constructor(){
        this.Benefits = Benefits
    }

    getMany = async (req, res, next) => {
        try {
          const benefit = await this.Benefits.find({ user: req.user.id });
    
          res.status(200).json(benefit);
        } catch (error) {
          console.log(error);
        }
      }
    
      getOne = async (req, res, next) => {
        try {
          const { id } = req.params;
    
          const benefit = await this.Benefits.findById(id);
    
          if (benefit === null) {
            res.status(404).json({ message: `benefit with id ${id} not found` });
            return;
          }
    
          res.status(200).json(benefit);
        } catch (error) {
          console.log(error);
        }
      }
    
      createOne = async (req, res, next) => {
        try {
          const newBenefit = new this.Benefits({ ...req.body, user: req.user.id });
    
          await newBenefit.save();
    
          res.status(201).json({ _id: newBenefit._id });
        } catch (error) {
          console.log(error);
        }
      }
    
      updateOne = async (req, res, next) => {
        try {
          const { params: { id }, body } = req;
    
          await this.Benefits.findByIdAndUpdate(id, body);
    
          res.status(200).json({ message: `Benefit with ID ${id} updated` });
        } catch (error) {
          console.log(error);
        }
      }
    
      deleteOne = async (req, res, next) => {
        try {
          res.status(200).json({ message: 'DELETE ONE BENEFIT!!!' });
        } catch (error) {
          console.log(error);
        }
      }

}

module.exports = new BenefitsController()