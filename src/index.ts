import { Media } from './media'
import { Instance } from './shop'
import { User } from './user' 
import { applyMixins } from './utils'
import { Base } from './base'

class Tayeh extends Base {}
interface Tayeh extends Instance, User, Media {}
applyMixins(Tayeh, [Instance, User, Media]);

export default Tayeh;