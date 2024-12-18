import { ProduitInterface } from "./ProduitInterface"

export type ProduitsPaginationResponse = {

    content: Array<ProduitInterface>,
    pageable: {
        pageNumber: number,
        pageSize: number,
        sort: {
            empty: boolean,
            unsorted: boolean,
            sorted: boolean
        },
        offset: number,
        paged: boolean,
        unpaged: boolean
    },
    last: boolean,
    totalElements: number,
    totalPages: number,
    first: boolean,
    size: number,
    number: number,
    sort: {
        empty: boolean,
        unsorted: boolean,
        sorted: boolean
    },
    numberOfElements: number,
    empty: boolean
}