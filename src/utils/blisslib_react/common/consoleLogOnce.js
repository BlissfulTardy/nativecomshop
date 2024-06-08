
// IMPORT Dependency
import useEffectOnce from "./useEffectOnce"

/**
 * @author Efecan Okkalioglu
 * @description
 * simple method to log a console message only once under react strict mode
 */
const consoleLogOnce = (...context) => {
  useEffectOnce(console.log(context));
}

export default consoleLogOnce;