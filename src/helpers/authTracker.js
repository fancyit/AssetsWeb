const authTracker = store => next => action => {
    console.log(action.meta);
  //  if (!action.meta || action.meta.type !== 'api') {
        return next(action);
    //}
};