const request = require('supertest')
const app = require('../app')

const URL_MOVIES = '/genres'

const movie ={
    name: "pedro" 
}
 
 let movie_id; 



test("Post -> 'URL_MOVIES', should return status code 201, and res.body to be defined and res.body = actor", async () => { 
    const res = await request(app)
    .post(URL_MOVIES)
    .send(movie)

    movie_id = res.body.id

    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    // -->Check specific properties of the response body<--
    expect(res.body.name).toBe(movie.name)
   
 })

 //code 200 => OK
test("Get -> 'URL_MOVIES', should return status code 200 and res.body to be defined", async () => {
    const res = await request(app).get(URL_MOVIES)
    expect(res.status).toBe(200);
})

test ("PUT -> 'URL_MOVIES', should return status code 200 and udate res.body", async()=>{
    const newGenre = { name: "Juanito sola" } 
    const res = await request(app).put(`${URL_MOVIES}/${movie_id}`).send(newGenre)
    console.log(res.body)
    expect(res.status).toBe(200)
    expect(res.body.name).toBe(newGenre.name)
})

//code 204 => No Content 
test("Delete -> 'URL_MOVIES', should return status code 204", async () => {
    const res = await request(app).delete(`${URL_MOVIES}/${movie_id}`)
    expect(res.status).toBe(204)
})