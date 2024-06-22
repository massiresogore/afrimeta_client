import { ResultInterface } from "@/system/ResultInterface";
import { ProduitInterface } from "./ProduitInterface";

export type ProduitResultInterface = ResultInterface & {
    data:ProduitInterface
}

