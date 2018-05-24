import { helper } from '@ember/component/helper';
import { capitalize as c} from '@ember/string';
export function capitalize([string, ...rest]) {
  return c(string);
}

export default helper(capitalize);
