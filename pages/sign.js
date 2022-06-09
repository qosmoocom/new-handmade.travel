import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Component() {
  const { data: session } = useSession();
  console.log(session);

  const [open, setOpen] = useState(0)

  // useEffect(()=>{
  //   if(session){
  //     axios.get('/api/tourist',{params:{email:session.user.email}})
  //       .then((res)=>{
  //         try {
  //           if(res.data){
  //             session.user=res.data
  //           }else axios.post('/api/tourist/add',{name:session.user.name,email:session.user.email}).then((res)=>{console.log(res);})
  //         } catch (error) {

  //         }
  //       })
  //   }
  // },[session])
  // if (session) {
  //   return (
  //     <>
  //       <img src={session.user.image} /><br />
  //       <div>{ session.user.name}</div>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     Not signed in <br />
  //     <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // );

  return (
    <div id="login-page">
      <div className={`login ${open==0?"active":''}`}>
        <div className="title">Kirish</div>
        <div className="form">
          <form>
            <label>
              Login
              <input type="email" placeholder="email" name="email" required={true} />
            </label>
            <label>
              Password
              <input type="password" name="password" required={true} />
            </label>
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3"
            >
              Kirish
            </button>
            <p onClick={()=>{setOpen(1)}}>Create account</p>
          </form>
          <div className="networks">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" 
              onClick={()=>{signIn()}}
            >
              Access through social networks
            </button>
          </div>
        </div>
      </div>
      <div className={`registr ${open==1?"active":''}`}>
        <div className="title">Ro&apos;yxatdan o&apos;tish</div>
        <div className="form">
          <form>
          <label>
              Name
              <input type="text" placeholder="Your name" name="name" required={true} />
            </label>
            <label>
              Email
              <input type="email" placeholder="email" name="email" required={true} />
            </label>
            <label>
              Password
              <input type="password" name="password1"  required={true} />
              <input type="password" name="password2" required={true} />
            </label>
            <label>
            </label>
            <label>
              Phone Number
              <input type="tel" placeholder="Phone Number" name="phone"  />
            </label>
            <button
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3"
            >
              Kirish
            </button>
            <p onClick={()=>{setOpen(0)}}>Do you have an account?</p>
          </form>
          <div className="networks">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" 
              onClick={()=>{signIn()}}
            >
              Access through social networks
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
}
