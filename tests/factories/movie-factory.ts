import prisma from '../../src/database/databaseConnection';
import { CreateMovie } from '../../src/repositories/movieRepository';
import { faker } from '@faker-js/faker';

export async function createMovie(name?: string, status?: boolean, type?: string, comment?: string, platformId?: number) {
    const movie: CreateMovie = {
        name: name || faker.music.songName(),
        status: status || false,
        type: type || faker.music.genre(),
        comment: comment || faker.word.adjective(),
        platformId: platformId || 1
    }
    return await prisma.movies.create({
        data: movie
    })
}

export async function randomMovie() {
    const movie: CreateMovie = {
        name: faker.music.songName(),
        status: false,
        type: faker.music.genre(),
        comment: faker.word.adjective(),
        platformId: 1
    }
    return movie
}