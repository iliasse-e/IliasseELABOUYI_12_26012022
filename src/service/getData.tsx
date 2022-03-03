/**
 * Gets user general data from database via fetch method
 * @returns { Array.<Object> } Array of user data objects, which contains firstname, score, nutrious datas
 */
export const getUserData =  async () => {
  let url = `${process.env.REACT_APP_URL}/user/${process.env.REACT_APP_USER_ID}`;
  let response = await fetch(url)
  let data = await response.json()
  .catch((error) => console.error("Error type : ", error))
  console.log(data.data)
  return data.data
}