export interface PokeData {
    sprites: { front_default: string, front_shiny: string }
    id: number
    name: string
    types: { slot: number; type: { name: string; url: string; }; }[]
}