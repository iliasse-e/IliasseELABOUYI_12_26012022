
export const getUserData = async () => {
  const response = await fetch(`http://localhost:3000/user/${process.env.REACT_APP_USER_ID}`);
  return response.json();
}

console.log(process.env)