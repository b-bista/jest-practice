const googleSearch = require('./script');

const googleDB = [
    'apple.com',
    'mongodb.com',
    'reddit.com',
    'youtube.com',
    'google.com'
]

describe('googleSearch', () => {
    it('searches in google', ()=>{
        expect(googleSearch('.com', googleDB).length).toEqual(3);
    })
    
    it('checks for empty strings', ()=>{
        expect(googleSearch('', googleDB)).toEqual([]);
    })
    
    it('checks for null', ()=>{
        expect(googleSearch(null, googleDB)).toEqual([]);
    })
    
    it('checks for undefined', ()=>{
        expect(googleSearch('', googleDB)).toEqual([]);
    })
})

