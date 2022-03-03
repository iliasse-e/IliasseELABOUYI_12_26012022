/**
 * Gets user average session from database via fetch method
 * @returns Array of weekly average data objects, which contains daily data
 */
export const getUserAverageSession =  async () => {
    let url = `${process.env.REACT_APP_URL}/user/${process.env.REACT_APP_USER_ID}/average-sessions`;
    let response = await fetch(url)
    let data = await response.json()
    .catch((error) => console.error("Error type : ", error))
    console.log(data.data)
    const days = ["L", "M", "M", "J", "V", "S", "D"];
    return data.data.sessions.map(({day, ...rest}) => (
        {
          day: days[day-1],
          ...rest
        })
      )
}