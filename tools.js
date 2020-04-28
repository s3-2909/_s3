class Tools {
    constructor() {
        this._handleIsType()
    }
    /**
     * 继承类型判断方法
     * @method {isArray} 判断数组类型
     * @method {isObject} 判断对象类型
     * @method {isNull} 判断null
     * @method {isUndeined} 判断undeined
     * @method {isBoolean} 判断布尔值类型
     * @method {isString} 判断字符串类型
     * @method {isNumber} 判断数值类型
     * @method {Date} 判断时间类型
     */
    _handleIsType() {
        const types = ['Array', 'Object', 'Null', 'Undeined', 'Boolean', 'String', 'Number', 'Date'];
        types.forEach(type => {
            // 添加方法到原型上
            return this.__proto__['is' + type] = this._isType(type)
        })
    }
    // 属性判断
    _isType(type) {
        return function (value) {
            return Object.prototype.toString.call(value).includes(type)
        }
    }
    /**
     * 
     * @param {时间/时间戳} dateValue 
     * @param {时间格式} formatValue 
     * YYYY - 年
     * YYYY-MM 年月
     * YYYY-MM-DD 年月日
     * MM-DD 月日
     * YYYY-MM-DD h:mm 年月日时分
     * h:mm 时分
     * h:mm:s  时分秒
     */
    formatDate(formatValue = null, dateValue = new Date()) {
        dateValue = new Date(dateValue).getTime()
        const t = new Date(dateValue)
        let dateObj = {
            y: t.getFullYear(),
            m: this.formatNumber(t.getMonth() + 1),
            d: this.formatNumber(t.getDate()),
            h: this.formatNumber(t.getHours()),
            mm: this.formatNumber(t.getMinutes()),
            s: this.formatNumber(t.getSeconds()),
        }

        switch (formatValue) {
            case 'YYYY':
                return `${dateObj.y}`
                break;
            case 'YYYY-MM':
                return `${dateObj.y}-${dateObj.m}`
                break;
            case 'YYYY-MM-DD':
                return `${dateObj.y}-${dateObj.m}-${dateObj.d}`
                break;
            case 'YYYY-MM-DD h:mm':
                return `${dateObj.y}-${dateObj.m}-${dateObj.d} ${dateObj.h}:${dateObj.mm}`
                break;
            case 'MM-DD':
                return `${dateObj.mm}-${dateObj.d}`
                break;
            case 'h:mm':
                return `${dateObj.h}:${dateObj.mm}`
                break;
            case 'h:mm:s':
                return `${dateObj.h}:${dateObj.mm}:${dateObj.s}`
                break;
            default:
                return dateObj
        }
    }
    formatNumber(num) {
        return num < 10 ? `0${num}` : String(num)
    }
}
const _s3 = new Tools()
export default _s3