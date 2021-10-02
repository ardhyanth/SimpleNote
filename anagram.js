// Anagram Group
const arrName = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

const anagramGroup = (arr) => {
    const indexer = [];
    const arrResult = [];

    for(let x = 0; x < arr.length; x++) {
        const name = arr[x]
        const nameChar = name.split('').sort().join();

        const indexNumber = indexer.indexOf(nameChar);
        if(indexNumber < 0) {
            indexer.push(nameChar)
            arrResult.push([])
            arrResult[arrResult.length-1].push(name);
        } else {
            arrResult[indexNumber].push(name);
        }
    }

    return arrResult;

}

anagramGroup(arrName);
