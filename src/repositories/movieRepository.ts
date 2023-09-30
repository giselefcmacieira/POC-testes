import prisma from "@/database/databaseConnection";
import { Movies } from "@prisma/client";
import { ReadMovie, Resp } from "@/protocols/protocols";

export type CreateMovie = Omit<Movies, "id" | "createdAt">

function createMovie(movie: CreateMovie) {
    return prisma.movies.create({
        data: movie
    })
}

async function selectById(id: number): Promise<Movies> {
    const movie = await prisma.movies.findFirst({
        where: { id }
    })
    return movie
}

export type UpdateMovie = Omit<Movies, "id" | "name" | "type" | "platformId" | "createdAt">

function updateMovie(id: number, movie: UpdateMovie) {
    return prisma.movies.update({
        data: movie,
        where: { id }
    })
}

export type SelectMovies = Omit<Movies, "id" | "name" | "status" | "comment" | "createdAt">

function selectMovies(movies) {
    if (movies.type) {
        if (movies.platformId) {
            return prisma.movies.findMany({
                where: {
                    AND: [
                        { type: movies.type }, { platformId: Number(movies.platformId) }
                    ]
                }
            })
        } else {
            return prisma.movies.findMany({
                where: { type: movies.type }
            })
        }
    } else {
        if (movies.platformId) {
            return prisma.movies.findMany({
                where: { platformId: Number(movies.platformId) }
            })
        } else {
            return prisma.movies.findMany()
        }
    }
}

function deleteMovie(id: number) {
    return prisma.movies.delete({
        where: { id }
    })
}

export const movieRepository = { createMovie, selectById, updateMovie, selectMovies, deleteMovie }