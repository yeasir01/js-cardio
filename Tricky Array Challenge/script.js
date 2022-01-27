/* ---Challenge---- */
// Consolidate all relational data from three different arrays into 1 table. 
// Log the table to the console.
// There should not be any duplicate person's in your table.

const arr1 = [
    ["name", "id", "age", "weight", "Cool"],
    ["Susan", "3", "20", "120", true],
    ["John", "1", "21", "150", true],
    ["Bob", "2", "23", "90", false],
    ["Ben", "4", "20", "100", true],
];

const arr2 = [
    ["name", "id", "height"],
    ["Bob", "2", "50"],
    ["John", "1", "45"],
    ["Ben", "4", "43"],
    ["Susan", "3", "48"]
];

const arr3 = [
    ["name", "id", "parent"],
    ["Bob", "2", "yes"],
    ["John", "1", "yes"]
];

function parseArray(arry) {
    const [heading, ...personData] = arry;
    let peeople = [];

    for (let item of personData) {
        let personObj = {};
        item.forEach((attr, idx) => personObj[heading[idx]] = attr);
        peeople.push(personObj);
    }

    return peeople;
}

const combined = [...parseArray(arr1), ...parseArray(arr2), ...parseArray(arr3)];

//Method 1 Reduce Method
console.time("reduce-method");

const results = combined.reduce((acc, currentPerson) => {
    const idx = acc.findIndex(obj => obj.id === currentPerson.id)

    if (idx === -1) {
        return [...acc, currentPerson]
    }

    acc[idx] = {...acc[idx], ...currentPerson}
    return acc
},[]);

console.table(results);
console.timeEnd("reduce-method");


//Method 2 Map or Loop
console.time("map-method");
//code coming soon....
console.timeEnd("map-method");
