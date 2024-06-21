import { ResultInterface } from "../system/ResultInterface";
import { MagasinsPaginationResponse } from "./MagasinsPaginationResponse";

export type MagasinsPaginationResultInterface  =  ResultInterface & {
    data:MagasinsPaginationResponse;
}
