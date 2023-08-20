
import  User from "../componnets/user"

function UserList({users}){
    return(
        <>
          <h1>List of user</h1>
          {
              users.map((user)=>{
                  return(
                      <div key={user.id}>
                        <User user={user}/>
                      </div>
                  )
              })
          }
        </>
      
    )
}

export default UserList

export async function getStaticProps(){
    let props = {};
     const response= await fetch('https://jsonplaceholder.typicode.com/users');
     const data= await response.json()
     console.log(data)
     return {
        props:{
            users:data
        }
      };
}