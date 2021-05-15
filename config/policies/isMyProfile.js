module.exports = async (ctx, next) => {
  if (ctx.state.user) {
    if (!ctx.params.id) {
      return ctx.unauthorized("usa la politica solo para findone");
    }
    console.log("ismyprofile user query", ctx.params);

    const targetUser = ctx.params.id.toString();
    const loggedInUser = ctx.state.user.id.toString();

    if (targetUser === loggedInUser) {
      return await next();
    } else {
      ctx.unauthorized("target not equal");
    }
  }

  return ctx.unauthorized("necesitas iniciar sesion");
};
