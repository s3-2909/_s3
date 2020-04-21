class Tools {
    constructor() {
        this._handleIsType()
    }
    // 继承类型判断方法
    _handleIsType() {
        const types = ['Array', 'Object', 'Null', 'Undeined', 'Boolean', 'String', 'Number'];
        types.forEach(type => {
            this[`is${type}`] = this._isType(type)
        })
    }
    // 属性判断
    _isType(type) {
        return function (value) {
            return Object.prototype.toString.call(value).includes(type)
        }
    }
}
const _s3 = new Tools()
export default _s3