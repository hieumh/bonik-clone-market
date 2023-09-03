export const jwtConstants = {
  secret: process.env.JWT_SECRET,
  saltOrRound: process.env.HASH_ROUND,
};
