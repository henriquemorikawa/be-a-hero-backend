const Centers = require('../models/Centers');

class CentersController {
  constructor() {
    this.Centers = Centers;
  }

  getMany = async (req, res, next) => {
    try {
      const centers = await this.Centers.find({ user: req.user.id });

      res.status(200).json(centers);
    } catch (error) {
      console.log(error);
    }
  }

  getOne = async (req, res, next) => {
    try {
      const { id } = req.params;

      const center = await this.Centers.findById(id);

      if (center === null) {
        res.status(404).json({ message: `Center with id ${id} not found` });
        return;
      }

      res.status(200).json(center);
    } catch (error) {
      console.log(error);
    }
  }

  createOne = async (req, res, next) => {
    try {
      const newCenter = new this.Centers({ ...req.body, user: req.user.id });

      await newCenter.save();

      res.status(201).json({ _id: newCenter._id });
    } catch (error) {
      console.log(error);
    }
  }

  updateOne = async (req, res, next) => {
    try {
      const { params: { id }, body } = req;

      await this.Centers.findByIdAndUpdate(id, body);

      res.status(200).json({ message: `Center with ID ${id} updated` });
    } catch (error) {
      console.log(error);
    }
  }

  deleteOne = async (req, res, next) => {
    try {
      res.status(200).json({ message: 'DELETE ONE CENTER!!!' });
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new CentersController();
