const Requests = require('../models/Requests');

class RequestsController {
  constructor() {
    this.Requests = Requests;
  }

  getMany = async (req, res, next) => {
    try {
      const requests = await this.Requests.find();

      res.status(200).json(requests);
    } catch (error) {
      console.log(error);
    }
  }

  getOne = async (req, res, next) => {
    try {
      const { id } = req.params;

      const request = await this.Requests.findById(id);

      if (request === null) {
        res.status(404).json({ message: `Request with id ${id} not found` });
        return;
      }

      res.status(200).json(request);
    } catch (error) {
      console.log(error);
    }
  }

  createOne = async (req, res, next) => {
    try {
      const newRequest = new this.Requests(req.body);

      await newRequest.save();

      res.status(201).json({ _id: newRequest._id });
    } catch (error) {
      console.log(error);
    }
  }

  updateOne = async (req, res, next) => {
    try {
      const { params: { id }, body } = req;

      await this.Requests.findByIdAndUpdate(id, body);

      res.status(200).json({ message: `Request with ID ${id} updated` });
    } catch (error) {
      console.log(error);
    }
  }

  deleteOne = async (req, res, next) => {
    try {
      const { id } = req.params;

      await this.Requests.findByIdAndDelete(id);

      res.status(200).json({ message: 'Request deleted' });
    } catch (error) {
      console.log(error);
    }
  }

}

module.exports = new RequestsController();
