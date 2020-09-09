import { Media } from './media'
import { Shop } from './shop'
import { User } from './user' 
import { applyMixins } from './utils'
import { Base } from './base'

class Tayeh extends Base {}
interface Tayeh extends Shop, User, Media {}
applyMixins(Tayeh, [Shop, User, Media]);

export default Tayeh;