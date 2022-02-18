export const getUserPerformance =  async () => {
    let url = `${process.env.REACT_APP_URL}/user/${process.env.REACT_APP_USER_ID}/performance`;
    let response = await fetch(url)
    let data = await response.json()
    .catch((error) => console.error("Error type : ", error))
    console.log(data.data.data)

    // Changes kind Numbers to kind String value
    return data.data.data.map(({value, kind}) => (
        {
          value:value,  
          kind: data.data.kind[kind],
        })
      )
}
