import { MagasinInterface } from "./MagasinsInterface"

export type MagasinsPaginationResponse = {
    content: Array<MagasinInterface>,
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
