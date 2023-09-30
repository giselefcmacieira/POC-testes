import { error } from "@/protocols/protocols";

export function invalidBodyError(erros: Array<string>): error {
    return {
        type: "invalidBody",
        message: erros
    }
}