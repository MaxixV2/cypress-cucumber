before(() => {
    setTestData();
})

function setTestData() {
    let data = require("../fixtures/data.json");
    return data;
}

export function getTestData(sfccXml) {
    return setTestData(sfccXml);
}