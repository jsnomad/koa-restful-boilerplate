import app from '../server/'
import supertest from 'supertest'
import { expect, should } from 'chai'

const temp = {}
const request = supertest.agent(app.listen())
should()

describe('POST /city', () => {
  it('should add a city', (done) => {
    request
      .post('/api/cities')
      .set('Accept', 'application/json')
      .send({
        name: 'Bangkok',
        totalPopulation: 8249117,
        country: 'Thailand',
        zipCode: 1200,
      })
      .expect(200, (err, res) => {
        temp.idCity = res.body._id;
        done()
      })
  })
})

describe('GET /cities', () => {
  it('should get all cities', (done) => {
    request
      .get('/api/cities')
      .expect(200, (err, res) => {
        expect(res.body.length).to.be.at.least(1);
        done()
      })
  })
})

describe('GET /cities/:id', () => {
  it('should get a city', (done) => {
    request
      .get(`/api/cities/${temp.idCity}`)
      .expect(200, (err, res) => {
        res.body.name.should.equal('Bangkok')
        res.body.totalPopulation.should.equal(8249117)
        res.body.country.should.equal('Thailand')
        res.body.zipCode.should.equal(1200)
        res.body._id.should.equal(temp.idCity)
        done()
      })
  })
})

describe('PUT /cities', () => {
  it('should update a city', (done) => {
    request
      .put(`/api/cities/${temp.idCity}`)
      .set('Accept', 'application/json')
      .send({
        name: 'Chiang Mai',
        totalPopulation: 148477,
        country: 'Thailand',
        zipCode: 50000,
      })
      .expect(200, (err, res) => {
        temp.idCity = res.body._id;
        done()
      })
  })

  it('should get updated city', (done) => {
    request
      .get(`/api/cities/${temp.idCity}`)
      .expect(200, (err, res) => {
        res.body.name.should.equal('Chiang Mai')
        res.body.totalPopulation.should.equal(148477)
        res.body.country.should.equal('Thailand')
        res.body.zipCode.should.equal(50000)
        res.body._id.should.equal(temp.idCity)
        done()
      })
  })
})

describe('DELETE /cities', () => {
  it('should delete a city', (done) => {
    request
      .delete(`/api/cities/${temp.idCity}`)
      .set('Accept', 'application/json')
      .expect(200, (err, res) => {
        done()
      })
  })

  it('should get error', (done) => {
    request
      .get(`/api/cities/${temp.idCity}`)
      .expect(404, () => {
        done()
      })
  })
})
