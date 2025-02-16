export let logger = (req, res, next) => {
  console.log("Pfad: " + req.originalUrl);
  next();
}
