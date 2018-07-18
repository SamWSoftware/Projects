exports.handler = async (event) => {
    console.log(event);
    if (event.httpMethod === 'PUT') {
        let response = putMovie(event)
        return done(response);
    } else if (event.httpMethod === 'GET') {
        let response = getMovie(event);
        return done(response);
    }
};

const done = response => {
    return {
        statusCode: '200',
        body: JSON.stringify(response),
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*'
        }
    }
}

const movies = {
    action: 'Desperado (1995)',
    fantasy: 'Inception (2010)',
    animated: ' Peter Pan (1953)',
    western: 'The Good, the Bad and the Ugly (1966)',
    superhero: 'The Dark Knight (2008)',
    musical: 'The Rocky Horror Picture Show (1975)',
    crime: 'Pulp Fiction (1994)',
    comedy: 'The Naked Gun: From the Files of Police Squad! (1988)',
    adventure: 'Raiders of the Lost Ark (1981)',
    war: 'The Guns of Navarone (1961)',
    guy: 'The Expendables (2010)',
    romance: 'True Romance (1993)',
    thriller: 'Psycho (1960)',
    horror: 'Black Swan (2010)'
}

const getMovie = event => {
    let genre = event.pathParameters.genre;
    return movies[genre];
}

const putMovie = event => {
    return;
}