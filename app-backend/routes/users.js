const express = require("express");
const router = express.Router();
const config = require("config");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const UserSchema = require("../schemas/User.js");
const User = require("../schemas/User.js");

router.post(
  "/register",
  [
    check("email", "Email is required.").isEmail(),
    check("password", "Password is required.").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      let { name, email, password } = req.body;
      let user = await UserSchema.findOne({ email });
      const errors = validationResult(req); // Here errors will be array
      if (!errors.isEmpty()) {
        return res.status(401).json({ errors: errors.array() });
      }

      if (user) {
        return res.status(401).json({ msg: "USer is already registered." });
      }

      // Securing password in the database --------------------------------------

      const salt = await bcrypt.genSalt(10);
      password = await bcrypt.hash(password, salt);
      user = new UserSchema({
        name,
        email,
        password,
      });

      await user.save(); // Saving user in MongoDB


      // ------------------------------------------------------------------------



      // Creating JSON Web Token ------------------------------------------------


      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(payload, config.get("jwtsecret"), (err, token) => {
        if (err) throw err;
        res.json({ token });
      });

      // ------------------------------------------------------------------------

      res.send("User registered.");
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "Server error" });
    }
  }
);




router.post(
    '/login',
    [
        check('email', 'Try proper email.').isEmail(),
        check('password','Password is required.').not().isEmpty()
    ],
    async (req,res) => {
        try{
            let { email, password } = req.body;
            let errors = validationResult(req);
            let user = await UserSchema.findOne({ email });

            if (!errors.isEmpty()) {
              return res.status(401).json({ errors: errors.array() });
            }

            if(!user){
                return res.status(401).json({msg: "There is no user with this email."});
            }


            let isMatched = await bcrypt.compare(password, user.password);
            if(isMatched){
                const payload = {
                  user: {
                    id: user.id,
                  },
                };

                jwt.sign(payload, config.get("jwtsecret"), (err, token) => {
                  if (err) throw err;
                  res.json({ token });
                });
            }
            else{
                return res.status(401).json({msg: "Wrong password."});
            }



        }catch(err){
            console.log(err);
            return res.status(500).json({ msg: "Server error" });
        }
    }
)

module.exports = router;
