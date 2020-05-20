//将dataArray中所有href:title映射到一个对象中,用于检索当前路由对应的title
export default dataArray => {
    let keyMapObj = {}
    for (let i = 0, len = dataArray.length; i < len; i++) {
        keyMapObj[dataArray[i].baseHref] = dataArray[i].title;
        for (let j = 0, len2 = dataArray[i].section.length; j < len2; j++) {
            keyMapObj[dataArray[i].baseHref + "/" + j] = dataArray[i].section[j];
        }
    }
    return keyMapObj;
}
