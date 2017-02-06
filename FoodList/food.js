 // Initialize Firebase
var config = {
    apiKey: "AIzaSyCLzOMO3SMO4E67XPixvFH-bZqUnwi9FNY",
    authDomain: "food-list-2caba.firebaseapp.com",
    databaseURL: "https://food-list-2caba.firebaseio.com",
    storageBucket: "food-list-2caba.appspot.com",
    messagingSenderId: "200799123161"
};
firebase.initializeApp(config);

const preObj = document.getElementById('item');

const bdRefObj = firebase.database().ref().child('list');

bdRefObj.on('value', snap => createList(snap.val()));

function createList(items) {
    kys = Object.keys(items);
    console.log(items);
    for (var i = 0; i < kys.length; i+=1) {
        console.log(kys[i]);
        $('.table').append('<div class="item"><div class="name">' + kys[i] + '</div><div class="values"><button onclick="minus(' + kys[i] + ')">-</button><span id='+ kys[i] +'>' + items[kys[i]]['current']  + '</span>'+ '/' + items[kys[i]]['max'] + '<button onclick="plus(' + kys[i] + ')">+</button></div><div class="shop">' + items[kys[i]]['shop'] + '</div></div>');
    }
}

function minus(place) {
    var cur = $(place).text();
    if (cur != 0) {
        console.log(cur);
        $(place).text(cur -= 1);
    }
}

function plus(place) {
    var cur = Number($(place).text()) + 1;    
    console.log(cur);
    $(place).text(cur);
}