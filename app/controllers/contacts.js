let ContactModel = require('../models/contacts');

// Get a single contact
module.exports.getContact = async function (req, res, next) {
  try {
    const contact = await ContactModel.findById(req.params.contactId);
    res.json(contact);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Create a new contact
module.exports.create = async function (req, res, next) {
  try {
    const contact = await ContactModel.create(req.body);

    res.status(201).json({
      success: true,
      message: "Contact created successfully.",
      data: contact
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get all contacts
module.exports.getAll = async function (req, res, next) {
  try {
    const list = await ContactModel.find();
    res.json(list);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Update a contact
module.exports.update = async function (req, res, next) {
  try {
    const updatedContact = await ContactModel.findByIdAndUpdate(
      req.params.contactId,
      req.body,
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found."
      });
    }n

    res.status(200).json(updatedContact);

  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Delete a contact
module.exports.remove = async function (req, res, next) {
  try {
    const result = await ContactModel.deleteOne({ _id: req.params.contactId });

    if (result.deletedCount > 0) {
      res.status(200).json({
        success: true,
        message: "Contact deleted successfully."
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Contact not found."
      });
    }

  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Delete all contacts
module.exports.removeAll = async function (req, res, next) {
  try {
    const result = await ContactModel.deleteMany({});

    res.status(200).json({
      success: true,
      message: `All contacts deleted successfully. Total deleted: ${result.deletedCount}`
    });

  } catch (error) {
    console.error(error);
    next(error);
  }
};
