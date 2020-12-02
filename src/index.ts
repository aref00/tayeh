import { Media } from './media'
import { Instance } from './instance'
import { User } from './user' 
import { Customer } from './customer'
import { Crm } from './crm'
import { applyMixins } from './utils'
import { Base } from './base'
import * as dotenv from 'dotenv';

dotenv.config();
class Tayeh extends Base {}
interface Tayeh extends Instance, User, Media, Customer, Crm {}
applyMixins(Tayeh, [Instance, User, Media, Customer, Crm]);

export default Tayeh;