module.exports = async (ctx, next) => {
  return ctx.unauthorized("No posees autorización para efectuar esta acción");
};
