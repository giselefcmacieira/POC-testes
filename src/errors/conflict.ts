import { error } from "@/protocols/protocols";

export function conflictError(erro: string): error {
    return {
        type: "conflict",
        message: erro
    }
}