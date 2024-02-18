const request = require('supertest')
const app = require('../app')

const URL_ACTORS = '/actors'

const actor ={
    firstName: "pedro",
    lastName: "pedro",
    nationality: "pedro",
    image: "pedro",
    birthday: "pedro"
}
 
 let actor_id; 



test("Post -> 'URL_ACTORS', should return status code 201, and res.body to be defined and res.body = actor", async () => { 
    const res = await request(app)
    .post(URL_ACTORS)
    .send(actor)

    actor_id = res.body.id

    expect(res.status).toBe(201)
    expect(res.body).toBeDefined()
    // -->Check specific properties of the response body<--
    expect(res.body.firstName).toBe(actor.firstName)
    //expect(res.body.lastName).toBe(actor.lastName)
    //expect(res.body.nationality).toBe(actor.nationality)
    //expect(res.body.image).toBe(actor.image)
    //expect(res.body.birthday).toBe(actor.birthday)
 })

 //code 200 => OK
test("Get -> 'URL_ACTORS', should return status code 200 and res.body to be defined", async () => {
    const res = await request(app).get(`/actors/${actor_id}`)
})

test ("PUT -> 'URL_ACTORS', should return status code 200 and udate res.body", async()=>{
    const newActor = { firstName: "Juanito sola" } 
    const res = await request(app).put(`/actors/${actor_id}`).send(newActor)
    console.log(res.body)
    expect(res.status).toBe(200)
    expect(res.body.name).toBe(newActor.name)
})

//code 204 => No Content 
test("Delete -> 'URL_ACTORS', should return status code 204", async () => {
    const res = await request(app).delete(`${URL_ACTORS}/${actor_id}`)
    expect(res.status).toBe(204)
})