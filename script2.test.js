const fetch = require('node-fetch')
const swapi = require('./script2')

//with done

it('calls the swapi api to get people using done', (done) => {
    expect.assertions(2);
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
        done();
    })
})

it('calls the swapi api to get people with return', () => {
    expect.assertions(2);
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
    })
})