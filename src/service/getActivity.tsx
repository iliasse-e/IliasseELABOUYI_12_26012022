/**
 * Gets user activity from database via fetch method
 * @returns { Array.<Object> } Array of session objects, which contains day, kilogram and calories
 */
export const getUserActivity =  async () => {
    let url = `http://localhost:3000/user/${process.env.REACT_APP_USER_ID}/activity`;
    let response = await fetch(url)
    let data = await response.json()
    .catch((error) => console.error("Error type : ", error))
    console.log(data.data.sessions)

    // slice the Date from "YYYY-MM-DD" to "D" format 
    return data.data.sessions.map(({day, ...rest}) => (
        {
          day: day.slice(-1),
          ...rest
        })
      )
}


console.log(getUserActivity())