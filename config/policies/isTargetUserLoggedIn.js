module.exports = async (ctx, next) => {
  if (ctx.state.user) {
    if (!ctx.request.query.user) {
      return ctx.unauthorized("favor especificar usuario");
      //endpoint debe tener ${user.id}
    }
    console.log("istarget user query", ctx.request.query.user);

    const targetUser = ctx.request.query.user.toString();
    const loggedInUser = ctx.state.user.id.toString();
    if (targetUser === loggedInUser) {
      return await next();
    } else {
      ctx.unauthorized("target not equal");
    }
  }

  return ctx.unauthorized("necesitas iniciar sesion");
};
