import * as actions from "../modules/actions";

export function createThunkFunction(actionFunction, asyncCallback) {
  return (...params) =>
    async (dispatch) => {
      dispatch(actions.requestAction());
      try {
        const payload = await asyncCallback(...params);
        dispatch(actions.successAction());
        dispatch(actionFunction(payload));
      } catch (e) {
        dispatch(actions.errorAction(e));
      }
    };
}
