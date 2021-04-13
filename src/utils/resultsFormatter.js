import moment from 'moment'

export const resultsFormatter = ( results ) => {
    const formattedObject = results.reduce((acc, cur) => {
        const date = moment(cur.date).format('YYYY-MM-DD') // '2021-12-31'
        const type = cur.type

        if(acc[date]) {
            if(acc[date][type]) {
                return { ...acc, [date]: { ...acc[date], [type]: [ ...acc[date][type], cur ] } }
            } else {
                return { ...acc, [date]: { ...acc[date], [type]: [ cur ] } }
            }
        } else {
            return { ...acc, [date]: { [type] : [ cur ] } }
        }
    }, {});

    return formattedObject
}
