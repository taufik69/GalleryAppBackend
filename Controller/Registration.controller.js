require("dotenv").config();
const { emailvalidator } = require("../Helpers/EmailValidator");
const bcrypt = require("bcrypt");
const Registraiton = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        if (!name) {
            return res.status(404).json({
                error: "Name Missing",
            });
        } else if (!emailvalidator(email)) {
            return res.status(404).json({
                error: "Email Missing",
            });
        } else if (!role) {
            return res.status(404).json({
                error: "Email Missing",
            });
        }
        else if (!password) {
            return res.status(404).json({
                error: "Email Missing",
            });
        }
        else {
            return res.status(200).json({
                name, email, password, role
            });
        }
    } catch (error) {

        // converting plain passward to hash password trough bycrpt npm pakage
        bcrypt.hash(password, process.env.SALTROUND, async function (err, hash) {
            if (err) {
                console.log("error from bcrypt  ");
            } else {
                /**
                 * checking duplicate email using find query
                 */
                const duplicateEmail = await user.find({ email: email });
                if (duplicateEmail.length > 0) {
                    return res.status(404).json({
                        Error: "Alreaday use this email , try email another",
                    });
                }
                const userData = await new user({
                    name,
                    email,
                    password: hash,
                    role
                }).save();

                res.send(userData)
            }

        });

        return res.status(404).json({
            Error: "Registration route problem",
        });
    }
}

module.exports = Registraiton;