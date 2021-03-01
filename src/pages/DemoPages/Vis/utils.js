function interp_multiPoint(x, y, n, t, fval, m) {
    if (t == null) {
        return;
    }
    let tempVal = 0.0;;
    for (let k = 0; k < m; k++) {
        fval[k] = interp_onePoint(x, y, n, t[k], tempVal);
    }
    return fval;
}

function interp_onePoint(x, y, n, t, fval) {
    let s = new Array(5);
    spl(x, y, n, -1, t, s);
    fval = s[4];
    return fval;
}


function spl(x, y, n, k, t, s) {
    let kk, m, lc, u = [], p, q;
    s[0] = 0.0;
    s[1] = 0.0;
    s[2] = 0.0;
    s[3] = 0.0;
    s[4] = 0.0;
    if (n < 1) {
        return;
    }
    if (n === 1) {
        s[0] = y[0];
        s[4] = y[0];
        return;
    }
    if (n === 2) {
        s[0] = y[0];
        s[1] = (y[1] - y[0]) / (x[1] - x[0]);
        if (k < 0) {
            s[4] = (y[0] * (t - x[1]) - y[1] * (t - x[0])) / (x[0] - x[1]);
        }
        return;
    }
    if (k < 0 && n > 0 && t < x[0]) {
        s[4] = y[0];
        return;
    }
    if (k < 0 && n > 0 && t > x[n - 1]) {
        s[4] = y[n - 1];
        return;
    }
    if (k < 0) {
        if (t <= x[1]) {
            kk = 0;

        } else if (t >= x[n - 1]) {
            kk = n - 2;
        } else {
            kk = 1;
            m = n;
            while (kk - m !== 1 && kk - m !== -1) {
                lc = Math.floor((kk + m) / 2);
                if (t < x[lc - 1]) {
                    m = lc;
                } else {
                    kk = lc;
                }
            }
            kk = kk - 1;
        }
    } else {
        kk = k;
    }
    if (kk > n - 1) {
        kk = n - 2;
    }
    u[2] = (y[kk + 1] - y[kk]) / (x[kk + 1] - x[kk]);
    if (n === 3) {
        if (kk === 0) {
            u[3] = (y[2] - y[1]) / (x[2] - x[1]);
            u[4] = 2.0 * u[3] - u[2];
            u[1] = 2.0 * u[2] - u[3];
            u[0] = 2.0 * u[1] - u[2];
        } else {
            u[1] = (y[1] - y[0]) / (x[1] - x[0]);
            u[0] = 2.0 * u[1] - u[2];
            u[3] = 2.0 * u[2] - u[1];
            u[4] = 2.0 * u[3] - u[2];
        }
    }
    else {
        if (kk <= 1) {
            u[3] = (y[kk + 2] - y[kk + 1]) / (x[kk + 2] - x[kk + 1]);
            if (kk === 1) {
                u[1] = (y[1] - y[0]) / (x[1] - x[0]);
                u[0] = 2.0 * u[1] - u[2];
                if (n === 4) {
                    u[4] = 2.0 * u[3] - u[2];

                } else {
                    u[4] = (y[4] - y[3]) / (x[4] - x[3]);
                }
            } else {
                u[1] = 2.0 * u[2] - u[3];
                u[0] = 2.0 * u[1] - u[2];
                u[4] = (y[3] - y[2]) / (x[3] - x[2]);
            }
        }
        else if (kk >= (n - 3)) {
            u[1] = (y[kk] - y[kk - 1]) / (x[kk] - x[kk - 1]);
            if (kk === (n - 3)) {
                u[3] = (y[n - 1] - y[n - 2]) / (x[n - 1] - x[n - 2]);
                u[4] = 2.0 * u[3] - u[2];
                if (n === 4) {
                    u[0] = 2.0 * u[1] - u[2];

                } else {
                    u[0] = (y[kk - 1] - y[kk - 2]) / (x[kk - 1] - x[kk - 2]);
                }
            } else {
                u[3] = 2.0 * u[2] - u[1];
                u[4] = 2.0 * u[3] - u[2];
                u[0] = (y[kk - 1] - y[kk - 2]) / (x[kk - 1] - x[kk - 2]);
            }
        } else {
            u[1] = (y[kk] - y[kk - 1]) / (x[kk] - x[kk - 1]);
            u[0] = (y[kk - 1] - y[kk - 2]) / (x[kk - 1] - x[kk - 2]);
            u[3] = (y[kk + 2] - y[kk + 1]) / (x[kk + 2] - x[kk + 1]);
            u[4] = (y[kk + 3] - y[kk + 2]) / (x[kk + 3] - x[kk + 2]);
        }
    }
    s[0] = Math.abs(u[3] - u[2]);
    s[1] = Math.abs(u[0] - u[1]);
    if ((s[0] + 1.0 === 1.0) && (s[1] + 1.0 === 1.0)) {
        p = (u[1] + u[2]) / 2.0;
    } else {
        p = (s[0] * u[1] + s[1] * u[2]) / (s[0] + s[1]);
    }
    s[0] = Math.abs(u[3] - u[4]);
    s[1] = Math.abs(u[2] - u[1]);
    if ((s[0] + 1.0 === 1.0) && (s[1] + 1.0 === 1.0)) {
        q = (u[2] + u[3]) / 2.0;
    } else {
        q = (s[0] * u[2] + s[1] * u[3]) / (s[0] + s[1]);
    }
    s[0] = y[kk];
    s[1] = p;
    s[3] = x[kk + 1] - x[kk];
    s[2] = (3.0 * u[2] - 2.0 * p - q) / s[3];
    s[3] = (p + q - 2.0 * u[2]) / (s[3] * s[3]);
    if (k < 0) {
        p = t - x[kk];
        s[4] = s[0] + s[1] * p + s[2] * p * p + s[3] * p * p * p;
    }
    return s[4];
}

//获取最大值
let getMax = arr => {
    //假设最大值max 为arr[0]
    var max = arr[0];
    //遍历对比
    for (var i = 0; i < arr.length; i++) {
        //若max小于当前项 说明不是最大值 将当前项的值赋予max 
        // 继续遍历对比找到最大的值
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}
//获取最小值
let getMin = arr => {
    var min = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
//获取最大值的下标
let getMaxIndex = arr => {
    let max = arr[0];
    //声明了个变量 保存下标值
    let index = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isNaN(max)) {
            max = arr[i];
            index = i;
        } else if (max < arr[i]) {
            max = arr[i];
            index = i;
        }
    }
    return index;
}
//获取最小值的下标
let getMinIndex = arr => {
    var min = arr[0];
    //声明了个变量 保存下标值
    var index = 0;
    for (var i = 0; i < arr.length; i++) {
        if (isNaN(min)) {
            min = arr[i];
            index = i;
        } else if (min > arr[i]) {
            min = arr[i];
            index = i;
        }
    }
    return index;
}
//格式化小数
let formatDecimal = (num, decimal) => {
    num = num.toString()
    let index = num.indexOf('.')
    if (index !== -1) {
        num = num.substring(0, decimal + index + 1)
    } else {
        num = num.substring(0)
    }
    return Number(parseFloat(num).toFixed(decimal))
}

export { interp_multiPoint, interp_onePoint, getMax, getMin, getMaxIndex, getMinIndex, formatDecimal };