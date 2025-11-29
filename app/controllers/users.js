const UserModel = require('../models/users');

// Get a single user by ID
module.exports.getUser = async function (req, res, next) {
  try {
    const user = await UserModel.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found." });
    }
    res.json({ success: true, data: user });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Create a new user
module.exports.create = async function (req, res, next) {
  try {
    const user = req.body;
    const result = await UserModel.create(user);

    console.log(result);

    res.status(201).json({
      success: true,
      message: "User created successfully.",
      data: {
        _id: result._id,          // <-- Include the MongoDB ID
        username: result.username,
        email: result.email,
        firstName: result.firstName,
        lastName: result.lastName,
        role: result.role
      }
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Get all users
module.exports.getAll = async function (req, res, next) {
  try {
    const list = await UserModel.find();
    res.json({ success: true, data: list });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Update a user by ID
module.exports.update = async function (req, res, next) {
  try {
    const updatedData = req.body;

    const result = await UserModel.updateOne(
      { _id: req.params.userId },
      { $set: updatedData }
    );

    console.log(result);

    if (result.modifiedCount > 0) {
      res.status(200).json({ success: true, message: "User updated successfully." });
    } else {
      res.status(404).json({ success: false, message: "User not updated. Are you sure it exists?" });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Delete a user by ID
module.exports.remove = async function (req, res, next) {
  try {
    const result = await UserModel.deleteOne({ _id: req.params.userId });

    console.log(result);

    if (result.deletedCount > 0) {
      res.status(200).json({ success: true, message: "User deleted successfully." });
    } else {
      res.status(404).json({ success: false, message: "User not deleted. Are you sure it exists?" });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};

// Delete all users

module.exports.removeAll = async function (req, res, next) {
  try {
    const result = await UserModel.deleteMany({});
    console.log(result);

    res.status(200).json({
      success: true,
      message: `All users deleted successfully. Total deleted: ${result.deletedCount}`
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};