//将dataArray中所有href:title映射到一个对象中,用于检索当前路由对应的title
export default (dataArray) => {
    let keyMapObj = {}
    for (let i = 0; i < dataArray.length; i++) {
        keyMapObj[dataArray[i].baseHref] = dataArray[i].title;
        for (let j = 0; j < dataArray[i].catalog.length; j++) {
            keyMapObj[dataArray[i].catalog[j].href] = dataArray[i].catalog[j].title
        }
    }
    return keyMapObj;
}