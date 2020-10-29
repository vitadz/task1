let name = "Vita";
let join_name;
function stringReverse (name) {
    let split_name = name.split("");
    let reverse_name = split_name.reverse();
    join_name = reverse_name.join ("");
    return join_name;
}
stringReverse(name);
console.log(join_name);