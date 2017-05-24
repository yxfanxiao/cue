export function debounce(func, wait = 100) {
    if (typeof func !== 'function') {
        throw new TypeError('Expecd a function!')
    }

    let timer = null,
        result = context = args = undefined

    const later = function() {
        result = func.apply(context, args)
        clearTimeout(timer)
        timer = null
        if (!timer) {
            context = args = null
        }
    }

    return function() {
        if (timer) {
            clearTimeout(timer)
            timer = null
        }
        context = this
        args = arguments
        timer = setTimeout(later, wait)
        return result
    }
}
