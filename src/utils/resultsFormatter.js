import dayjs from 'dayjs'

export const resultsFormatter = ( results ) => {
    const formattedObject = results.reduce((acc, cur) => {
        const date = dayjs(cur.date).format('YYYY-MM-DD')
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
