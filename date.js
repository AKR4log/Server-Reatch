module.exports = function dateCountdown(year, month, date) {
    const dateObj = new Date()
    const todayYear = dateObj.getFullYear()
    const todayMonth = dateObj.getMonth()
    const todayDate = dateObj.getDate()
    const eventUTC = Date.UTC(year, month - 1, date)
    const todayUTC = Date.UTC(todayYear, todayMonth, todayDate)
    const eventDay = (eventUTC - todayUTC) / 1000 / 60 / 60 / 24
    return eventDay
  }
  