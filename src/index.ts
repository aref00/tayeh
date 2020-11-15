import { Media } from './media'
import { Instance } from './instance'
import { User } from './user' 
import { Customer } from './customer'
import { applyMixins } from './utils'
import { Base } from './base'

class Tayeh extends Base {}
interface Tayeh extends Instance, User, Media, Customer {}
applyMixins(Tayeh, [Instance, User, Media, Customer]);

export default Tayeh;