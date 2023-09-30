import app from "../src/app";
import prisma from "../src/database/databaseConnection";
import supertest from "supertest";
import { createMovie } from "./factories/movie-factory";
import httpStatus from "http-status";

const api = supertest(app)

beforeEach(async () => {
    await prisma.movies.deleteMany()
})

describe("Movies API POST/movie", () => {
    it("Should return 201 when movie is created", async () => {
        const result = await api.post("/movie").send({
            name: "Eu, eu mesmo e Irene",
            status: true,
            type: "comedia",
            comment: "Bom",
            platformId: 1
        })
        expect(result.status).toBe(httpStatus.CREATED)
    })
    it("Should return 422 when any movie information is wrong", async () => {
        const resultName = await api.post("/movie").send({
            status: true,
            type: "comedia",
            comment: "Bom",
            platformId: 1
        })
        expect(resultName.status).toBe(httpStatus.UNPROCESSABLE_ENTITY)
        const resultStatus = await api.post("/movie").send({
            name: "Eu, eu mesmo e Irene",
            status: "Amei",
            type: "comedia",
            comment: "Bom",
            platformId: 1
        })
        expect(resultStatus.status).toBe(httpStatus.UNPROCESSABLE_ENTITY)
        const resultType = await api.post("/movie").send({
            name: "Eu, eu mesmo e Irene",
            status: "Amei",
            type: 1,
            comment: "Bom",
            platformId: 1
        })
        expect(resultType.status).toBe(httpStatus.UNPROCESSABLE_ENTITY)
    })
})
describe("Movies API PUT/movie", () => {
    it("should return 200 when movie is updated", async () => {
        const movie = await createMovie()
        const result = await api.put("/movie").send({
            id: movie.id,
            status: true,
            comment: "Legal"
        })
        expect(result.status).toBe(httpStatus.OK)
    })
    it("should return 409 when id movie does not exist", async () => {
        const movie = await createMovie()
        const result = await api.put("/movie").send({
            id: movie.id + 1,
            status: true,
            comment: "Legal"
        })
        expect(result.status).toBe(httpStatus.CONFLICT)
    })
})
