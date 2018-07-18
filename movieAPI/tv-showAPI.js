exports.handler = async (event) => {
    console.log(event);
    if (event.httpMethod === 'PUT') {
        let response = putShows(event)
        return done(response);
    } else if (event.httpMethod === 'GET') {
        let response = getShows(event);
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

const Showss = {
    action: 'Game of Thrones',
    fantasy: 'Supernatural',
    animated: 'The Simpsons',
    western: 'Westworld',
    superhero: 'The Flash',
    musical: '30 Rock',
    crime: 'Sherlock',
    comedy: 'Friends',
    adventure: 'Doctor Who',
    war: 'Wounded Love',
    guy: 'The Walking Dead',
    romance: "Grey's Anatomy",
    thriller: 'Sharp Objects',
    horror: 'American Horror Story'
}

const getShows = event => {
    let genre = event.pathParameters.genre;
    return Showss[genre];
}

const putShows = event => {
    return;
}