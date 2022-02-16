export const getUserAverageSession =  async () => {
    let url = `http://localhost:3000/user/${process.env.REACT_APP_USER_ID}/average-sessions`;
    let response = await fetch(url)
    let data = await response.json()
    .catch((error) => console.error("Error type : ", error))
    console.log(data.data)
    return data.data.sessions
}