


export type Game = {
    id: number | string
    title: string
    thumbnail: string
    short_description: string
    game_url: string
    genre: string
    platform: string
    publisher: string
    developer: string
    release_date: string
    freetogame_profile_url: string
}


export type ContextDefaultValuesGame = {
    games: null | Game[],
    loadgame: () => void,
    onAppLoad: () => void,



}