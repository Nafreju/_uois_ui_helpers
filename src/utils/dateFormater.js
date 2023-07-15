

export function currentDate() {
    const today = new Date()
    let year = today.getFullYear().toString()
    let month = (today.getMonth() + 1).toString()
    if (month.length === 1) {
        month = "0" + month
    }
    let day = today.getDate().toString()
    return year + "-" + month + "-" + day
}