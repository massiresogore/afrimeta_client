import { ProduitInterface } from "@/pages/produit/interrface/ProduitInterface"

export type CommandeInterface = {
address: string,
commandeId: number,
createdAt: string,
name: string,
numItemsInCart: number,
orderTotal: string,
produitResponses:ProduitInterface[]
publishedAt: string
updatedAt: string
}