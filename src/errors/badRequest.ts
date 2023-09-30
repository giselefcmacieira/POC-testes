import { error } from "@/protocols/protocols";

export function badRequestError(erro: string): error {
    return {
        type: "badRequest",
        message: erro
    }
}