const request = require('supertest')
const app = require('../app')

const URL_DIRECTORS = '/directors'

const director ={
    firstName: "pedro",
    lastName: "pedro",
    nationality: "pedro",
    image: "pedro",
    birthday: "pedro"
}
 
 let director_id; 



test("Post -> 'URL_ACTORS', should return status code 201, and res.body to be defined and res.body = actor", async () => { 
    const res = await request(app)
    .post(URL_DIRECTORS)
    .send(director)

    director_id = res.body.id

    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    // -->Check specific properties of the response body<--
    expect(res.body.firstName).toBe(director.firstName)
    //expect(res.body.lastName).toBe(director.lastName)
    //expect(res.body.nationality).toBe(director.nationality)
    //expect(res.body.image).toBe(director.image)
    //expect(res.body.birthday).toBe(director.birthday)
 })

 //code 200 => OK
test("Get -> 'URL_DIRECTORS', should return status code 200 and res.body to be defined", async () => {
    const res = await request(app).get(`/directors`)
    expect(res.status).toBe(200);
})

test ("PUT -> 'URL_DIRECTORS', should return status code 200 and udate res.body", async()=>{
    const newDirector = { firstName: "Juanito sola" } 
    const res = await request(app).put(`/directors/${director_id}`).send(newDirector)
    expect(res.status).toBe(200)
    expect(res.body.name).toBe(newDirector.name)
})

//code 204 => No Content 
test("Delete -> 'URL_DIRECTORS', should return status code 204", async () => {
    const res = await request(app).delete(`${URL_DIRECTORS}/${director_id}`)
    expect(res.status).toBe(204)
})