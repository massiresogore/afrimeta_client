export type ProduitInterface = {
    produitId: number,
    titre:string,
    description: string,
    quantiteStock: number,
    prix: number,
    dateAjout: string,
    categorie: {
        categorieId: number,
        nom: string
    },
    typeProduit: {
        typeProduitId: number,
        nom: string
    },
    website: {
        websiteId: number,
        websiteUrl: string
    },
    couleurs: [
        {
            couleurId: number,
            nom: string
        }
    ],
    images: [
        {
            imageName: string,
            path: string
        }
    ]
}