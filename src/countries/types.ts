import {Pagination} from "../base"

export type Qsearch = Pagination & {
    q : string
}

export type SearchParams = Pagination & {
    search : string
}