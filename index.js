var isFunction = require('lodash/isFunction')

function value(value) {
    if(isFunction(value)) {
        return value()
    } else {
        return value
    }
}

module.exports = value
