/**
 *
 * @param {any} store Instance of Redux store
 * @param {any} next Reference to the next middleware in the chain
 * @param {any} action Action returned by an action creator
 * @returns
 */
export default (store) => (next) => (action) => {
  // Checks if the action is a function
  // If so, executes the function passing arguments to it
  if (typeof action === "function") {
    return action(store.dispatch);
  }

  //If not, passes it to the next middleware in the chain
  return next(action);
};
