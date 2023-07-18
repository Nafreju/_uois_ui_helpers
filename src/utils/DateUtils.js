

export function minMaxDate() {
    const today = new Date()
    const minDate = new Date();
    const maxDate = new Date()

    minDate.setFullYear(today.getFullYear() - 1);
    maxDate.setFullYear(today.getFullYear() + 5)
    return [minDate, maxDate]
}

export function formatDate(date, sep ='.') {
    const dateToFormat = new Date(date)
    const day = dateToFormat.getDate();
    const month = dateToFormat.getMonth() + 1; // Months are zero-indexed
    const year = dateToFormat.getFullYear();
    return `${day}${sep}${month}${sep}${year}`;
  }

export function colorDate(date) {
    const today = new Date().getTime()
    const dateToCompare = new Date(date).getTime()
    let retStyle = {color:"red"}
    if (today < dateToCompare) {
        retStyle = {color:"green"}
    }
    return retStyle
}