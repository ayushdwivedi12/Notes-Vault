require("dotenv").config();
const { Ratelimit } = require("@upstash/ratelimit");
const { Redis } = require("@upstash/redis");

const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(20, "60 s"),
});

module.exports = ratelimit;
