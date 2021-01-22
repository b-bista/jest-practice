const googleDB = [
    'apple.com',
    'mongodb.com',
    'reddit.com',
    'youtube.com',
    'google.com'
]

const googleSearch = (input, db) => {
    if (!input) return [];
    
    const matches = db.filter( (item) => {
        return item.includes(input);
    })

    return matches.length > 3 ? matches.slice(0,3) : matches;
}

module.exports = googleSearch;