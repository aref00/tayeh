import { Media } from './media';
import { Instance } from './instance';
import { User } from './user';
import { Customer } from './customer';
import { Base } from './base';
declare class Tayeh extends Base {
}
interface Tayeh extends Instance, User, Media, Customer {
}
export default Tayeh;
