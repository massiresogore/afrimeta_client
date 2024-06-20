export type MagasinInterface = {
    magasinId: number,
    libele: string,
    description: string,
    logo: {
        logoName: string,
        path: string
    },
    clientUser: number
}
