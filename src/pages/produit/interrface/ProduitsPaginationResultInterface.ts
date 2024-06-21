import { ResultInterface } from "@/system/ResultInterface";
import { ProduitsPaginationResponse } from "./MagasinsPaginationResponse";

export type ProduitsPaginationResultInterface = ResultInterface & {
    data:ProduitsPaginationResponse
}

