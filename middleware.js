function checkRoles(roles){
  return function requireLogin(req,res, next){
    if(req.session.currentUser && roles.includes(req.session.currentUser.role)){
      next();
    } else{
      res.render('not-found');
    }
  }

}

module.exports= checkRoles