import tv4 from "tv4";
import stateSchema from "./state.schema";

export default ({ dispatch, getState }) => (next) => (action) => {
  // Passa a action para o próximo middleware para o estado ser atualizado
  next(action);

  const isValid = tv4.validate(getState(), stateSchema);
  if (!isValid) console.warn("Invalid state");
};
