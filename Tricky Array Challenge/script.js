//Challenge: consolidate all arrays into one table

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

console.table(combined)