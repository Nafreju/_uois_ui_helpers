

/**
 * Used for setting component, returns tuple of dates
 * @returns {[Date, Date]} tuple with date year before and date 5 years in the future
 */
export function minMaxDate() {
    const today = new Date()
    const minDate = new Date();
    const maxDate = new Date()

    minDate.setFullYear(today.getFullYear() - 1);
    maxDate.setFullYear(today.getFullYear() + 5)
    return [minDate, maxDate]
}

/**
 * Formates date to given format by provided separator
 * @param {string} date date to be formated
 * @param {string} sep separator used in separating parts of date
 * @returns {string} separated string
 */
export function formatDate(date, sep ='.') {
    const dateToFormat = new Date(date)
    const day = dateToFormat.getDate();
    const month = dateToFormat.getMonth() + 1; // Months are zero-indexed
    const year = dateToFormat.getFullYear();
    return `${day}${sep}${month}${sep}${year}`;
  }

/**
 * Returns style of given date comparing today date with provided
 * @param {*} date date to be compared with this day
 * @returns {Object} style object used in components
 */
export function colorDate(date) {
    const today = new Date().getTime()
    const dateToCompare = new Date(date).getTime()
    let style = {color:"red"}
    if (today < dateToCompare) {
        style = {color:"green"}
    }
    return style
}