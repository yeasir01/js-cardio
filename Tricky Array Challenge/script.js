/* 
    ----Challenge----
    Consolidate all related data from the three different arrays. 
    Log the data to a console.table().
    There should not be any duplicate person's in your table.

    
    Desired Output
    idx  name   id  age    weight   Cool   height  parent
    0	'Susan'	'3'	'20'	'120'	true	'48'	
    1	'John'	'1'	'21'	'150'	true	'45'	'yes'
    2	'Bob'	'2'	'23'	'90'	false	'50'	'yes'
    3	'Ben'	'4'	'20'	'100'	true	'43'	
*/

const arr1 = [
    ["name", "id", "age", "weight", "cool"],
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

const allData = [...parseArray(arr1), ...parseArray(arr2), ...parseArray(arr3)];

const combined = allData.reduce((acc, currentPerson) => {
    const idx = acc.findIndex(obj => obj.id === currentPerson.id)

    if (idx === -1) {
        return [...acc, currentPerson]
    }
    
    acc[idx] = {...acc[idx], ...currentPerson}

    return acc
},[]);

console.table(combined);