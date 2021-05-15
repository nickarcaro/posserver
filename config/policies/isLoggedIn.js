module.exports = async (ctx, next) => {
  if (ctx.state.user) return await next(); //si el usuario esta autenticado, que haga lo que puede

  return ctx.unauthorized("necesitas iniciar sesion");
};
