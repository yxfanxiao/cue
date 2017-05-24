export function throttle(func, wait = 100) {
    if (typeof func !== 'function') {
        throw new TypeError('Expecd a function!')
    }

    let previous = 0,
        timer = null,
        result = context = args = undefined

    const later = function() {
        result = func.apply(context, args)
        previous = Date.now()
        timer = null
        if (!timer) {
            context = args = null
        }
    }
    
    return function() {
        context = this
        args = arguments
        const now = Date.now()
        const remaining = wait - (now - previous)
        if (remaining <= 0) {
            if (timer) {
                clearTimeout(timer)
                timer = null
            }
            result = func.apply(context, args)
            previous = Date.now()
            if (!timer) {
                context = args = null
            }
        } else if (!timer) {
            timer = setTimeout(later, remaining)
        }
        return result
    }
}
