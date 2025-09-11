

const formatedData = date => {
    return new Date(date).toLocaleString("pt-br", {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }) 
}
export default formatedData

// const data = new Date(row.date)


// const formatedData = data.toLocaleString('pt-BR', {
//     day: '2-digit',
//     month: 'short',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit'
// })