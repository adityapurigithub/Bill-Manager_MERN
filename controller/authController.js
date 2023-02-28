import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const register = async (req, res) => {
  //get the data from client.....................
  const { firstName, lastName, email, password } = req.body.data;

  //find if user already exist....................................
  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.status(406).json({
      msg: "user already exist",
    }); //status(406)-not acceptable
    // ...................................................................
  }

  //hashing pass before saving user.....................................
  const saltRounds = 10;
  const salt = await bcrypt.genSaltSync(saltRounds);
  const hashedPass = await bcrypt.hashSync(password, salt);

  // console.log(hashedPass);
  // .....................................................................

  //creating new user obejct and saving it.....................................
  const user = new User({
    firstName,
    lastName,
    email,
    password: hashedPass,
  });
  await user.save();
  // .....................................................................

  console.log(user);
  res.status(200).json({
    msg: "User Registered Successfully!!!!",
  });
};

//login/.....................
export const signIn = async (req, res) => {
  const { email, password } = req.body.data;

  const user = await User.findOne({ email });

  if (user) {
    const passMatch = await bcrypt.compare(password, user.password);

    if (passMatch) {
      //if user is there and pass match..then we will create a jwt token........................

      //1.setting payload..........
      const payload = {
        username: email,
        id: user._id,
      };

      //2.signing jwt token......
      const token = jwt.sign(payload, process.env.JWT_SECRET); //sign({_data_o_payload_},"_seceret_key_")...for creating token....

      return res.status(200).json({
        msg: "Login Successfully!!",

        user,
        token,
      });
    }
    res.status(406).json({
      msg: "Password doesnot match!!!",
    });
  } else {
    res.status(406).json({
      msg: "Email doesn't Exist!!! Please Enter Registered Email first.",
    });
  }
};
