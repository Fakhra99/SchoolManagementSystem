const Admin = require('../models/admin.models');

// Controller to create a new admin
exports.store = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newAdmin = new Admin({ username, password });
        await newAdmin.save();
        res.status(200).json({ success: true, message: "Admin login successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to create admin" });
    }
};

// Controller to get a single admin
exports.get = async (req, res) => {
    try {
        const adminId = req.params.id;
        const admin = await Admin.findById(adminId);
        if (!admin) {
            return res.status(404).json({ success: false, message: "Admin not found" });
        }
        res.status(200).json({ success: true, admin });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: "Failed to get admin" });
    }
};

// // Controller to get all admins
// exports.index = async (req, res) => {
//     try {
//         const admins = await Admin.find();
//         res.status(200).json({ success: true, admins });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, message: "Failed to get admins" });
//     }
// };

// // Controller to delete a single admin
// exports.destroy = async (req, res) => {
//     try {
//         const adminId = req.params.id;
//         const deletedAdmin = await Admin.findByIdAndDelete(adminId);
//         if (!deletedAdmin) {
//             return res.status(404).json({ success: false, message: "Admin not found" });
//         }
//         res.status(200).json({ success: true, message: "Admin deleted successfully" });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, message: "Failed to delete admin" });
//     }
// };

// // Controller to update a single admin
// exports.update = async (req, res) => {
//     try {
//         const adminId = req.params.id;
//         const { username, password } = req.body;
//         const updatedAdmin = await Admin.findByIdAndUpdate(adminId, { username, password }, { new: true });
//         if (!updatedAdmin) {
//             return res.status(404).json({ success: false, message: "Admin not found" });
//         }
//         res.status(200).json({ success: true, message: "Admin updated successfully", admin: updatedAdmin });
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ success: false, message: "Failed to update admin" });
//     }
// };
