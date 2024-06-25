import { ResultInterface } from "@/system/ResultInterface"
import { CommandeInterface } from "./CommandeInterface"

export type CommandeResultInterface = ResultInterface & {
    data:CommandeInterface
}

