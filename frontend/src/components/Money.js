export const MoneyFormat = ({value, currency = '₮', fixed = 2, other = 0}) => {
    if (typeof value === 'undefined') return value;
    const re = '\\d(?=(\\d{'.concat(3, '})+(\\.\\d*[0-9])?$)');
    if (['$', '¥', '₽', '₸'].includes(currency))
        return ''
            .concat(currency)
            .concat(
                Number(value)
                    .toFixed(fixed)
                    .replace(new RegExp(re, 'g'), '$&,')
                    .replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1'),
            )
            .trim();
    return ''
        .concat(
            Number(value)
                .toFixed(other)
                .replace(new RegExp(re, 'g'), '$&,')
                .replace(/(\.[0-9]*[1-9])0+$|\.0*$/, '$1'),
            ' ',
        )
        .concat(currency)
        .trim();
}