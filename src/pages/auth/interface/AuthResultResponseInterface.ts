import { ResultInterface } from "@/system/ResultInterface"

export type AuthResultResponseInterface = ResultInterface & {
    data: {
        userInfo: {
            user_id: number,
            username: string,
            email: string,
            password: string,
            enable: boolean,
            role: string,
            profile: object
        },
        token: string
    }
}