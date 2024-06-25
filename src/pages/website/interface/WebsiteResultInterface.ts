import { ResultInterface } from "@/system/ResultInterface";
import { WebsiteInterface } from "./WebsiteInterface";

export type WebsiteResultInterface = ResultInterface & {
    data:Array<WebsiteInterface>
}