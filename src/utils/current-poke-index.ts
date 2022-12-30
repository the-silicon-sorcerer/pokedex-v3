import { MAX_INDEX } from "./misc-global-vals"

// Given a current page return range of indexes to fill page; unless reached
// Max pokemon - return array containing last 16 indexes

export const currentPokeIndexes = (currentPage: number): [number, number] => {
    if (currentPage * 16 >= MAX_INDEX) {
        return [MAX_INDEX - 15, MAX_INDEX]
    }
    return [(currentPage - 1) * 16 + 1, currentPage * 16]
}