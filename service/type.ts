



export type Props = {
    children: React.ReactNode
}


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

export type FullGame = {


    id: number | string
    title: string
    thumbnail: string
    status: string
    short_description: string
    description: string
    game_url: string
    genre: string
    platform: string
    publisher: string
    developer: string
    release_date: string
    freetogame_profile_url: string
    screenshots: GameScreenshots
}

export type GameScreenshots = {

    id: string | number
    image: string

}[]

export type ContextDefaultValuesGame = {
    gamesToDisplay: null | Game[],
    loadgame: () => void,
    onAppLoad: () => void,
    loadMoreGames: (games?: Game[]) => void,



}