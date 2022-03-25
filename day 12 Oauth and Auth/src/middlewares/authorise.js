// permittedRoles = ["seller", "admin"]  --> only for Seller and Admin only.

const authorise = (permittedRoles) => {
  return (req, res, next) => {
    // getting the user;
    const user = req.user;
    let isPermitted = false; //initially false taken if Seller or admin then make True

    // checking if he has permitted role
    permittedRoles.map((role) => {
      if (user.role.includes(role)) {
        //if it includes roles then yes true.
        isPermitted = true;
      }
    });

    // if permitted, he can go ahead (401)
    if (isPermitted) {
      return next();
    } else {
      return res
        .status(401)  
        .send({ message: "You are not authorised to perform this operation" });
    }
  };
};

module.exports = authorise;
