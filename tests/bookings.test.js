const request = require('supertest');
const app = require('../index');

describe('GET /bookings/list', function() {
    it('should return all bookings', function(done) {
      request(app)
        .get('/bookings/list')
        .expect(200, done);
    });
  });

  describe('POST /booking/create', function() {
    it('should create a booking', function(done) {
      request(app)
        .post('/booking/create')
        .send({ firstName: 'Nik',
        lastName: 'pm',
        email: 'nikpmii@gmail.com',
        countryToVisit: 'europe',
        numberOfTravellers: '3',
        budgetPerPerson: '$500'})
        .expect(201)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });

