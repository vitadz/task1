let person = {
    name : 'Vita',
    last_name : 'Dzon',
    hobbies : ['sport', 'poetry']
}
for (let i in person) {
    if (i === 'name') {
        console.log ('My first name is' + ' ' + person.name);
    }
else if (i === 'last_name') {
    console.log ('My last name is' + ' ' + person.last_name);
}
else {
    console.log ('My hobbies are' + ' ' + person.hobbies)
}
}


