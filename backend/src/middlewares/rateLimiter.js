const ratelimit = require("../config/upstash")


const rateLimiter = async (req,res,next) => {
    try {
        const key = `ip:${req.ip}`;
        const {success} = await ratelimit.limit(key);
        if(!success) return res.status(429).json({message:"Too many Requests, Please try again later"});
          next();
    } catch (error) {
        console.log(`Rate limit error, ${error}`);
        next(error);
    } 
  
}

module.exports = rateLimiter;