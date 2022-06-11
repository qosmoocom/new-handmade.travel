import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";

export default function Component() {
  const { data: session } = useSession();
  let count = 120;
  const [open, setOpen] = useState(0);
  const [send, setSend] = useState(0);
  const [timer, setTimer] = useState(120);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
    phone: "",
    number: "",
    verfNumber: "",
  });

  useEffect(() => {
    if (session) {
      axios
        .get("/api/social_tourist", { params: { email: session.user.email } })
        .then((res) => {
          try {
            if (res.data) {
              const { name, email, phone } = res.data;
              let tourist = {
                name,
                email,
                phone,
              };
              localStorage.setItem("tourist", JSON.stringify(tourist));
            } else
              axios
                .post("/api/social_tourist/add", {
                  name: session.user.name,
                  email: session.user.email,
                })
                .then((res) => {
                  const { name, email, phone } = res.data;
                  let tourist = {
                    name,
                    email,
                    phone,
                  };
                  localStorage.setItem("tourist", JSON.stringify(tourist));
                });
          } catch (error) {}
        });
    }
  }, [session]);

  function userHandler(e) {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }

  function Confirming() {
    setSend(1);
    setTimeout(() => {
      setUser({ ...user, verfNumber: -1 });
    }, [120000]);
    setInterval(() => {
      if (count > 0) {
        count--;
        setTimer(count);
        console.log(timer);
      }
    }, [1000]);
  }

  function verifyHandler() {
    axios.get("/api/tourist", { params: { email } }).then((res) => {
      if (res.data) {
        alert("Bunday foydalanuvchi mavjud");
      } else if (!res.data) {
        axios
          .post("/api/tourist/verf", { send_email: user.email })
          .then((res) => {
            if (res.status == 200) {
              console.log(res.data);
              setUser({ ...user, verfNumber: res.data.randomNumber });
              Confirming();
            }
          });
      }
    });
  }

  const {
    name,
    email,
    password,
    password1,
    password2,
    phone,
    number,
    verfNumber,
  } = user;
  const registrHandler = () => {
    if (verfNumber !== -1) {
      if (user.number == user.verfNumber) {
        console.log(true);
        console.log(user);
        axios
          .post("/api/tourist/add", {
            name,
            email,
            password1,
            phone,
          })
          .then((res) => {
            if (res.status == 200) {
              setOpen(0);
              setSend(0);
              setUser({
                name: "",
                email: "",
                password1: "",
                password2: "",
                phone: "",
                number: "",
                verfNumber: "",
              });
            }
          });
      }
    } else alert("Tasdiqlash kodi eskirgan");
  };

  const loginHandler = () => {
    console.log(user);
    axios.post("/api/tourist/get", { email, password }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        alert("Hisob raqamga muvaffaqqiyatli kirildi");
        const { name, email, phone } = res.data;
        let tourist = {
          name,
          email,
          phone,
        };
        localStorage.setItem("tourist", JSON.stringify(tourist));
      }
      if (res.status == 202) {
        alert("Parol xato");
      }
    });
  };

  return (
    <div id="login-page">
      <div className={`login ${open == 0 ? "active" : ""}`}>
        <div className="title">Kirish</div>
        <div className="form">
          <form>
            <label>
              Login
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={userHandler}
                required={true}
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                required={true}
                onChange={userHandler}
              />
            </label>
            <button
              type="button"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3"
              onClick={loginHandler}
            >
              Kirish
            </button>
            <p
              onClick={() => {
                setOpen(1);
              }}
            >
              Create account
            </p>
          </form>
          <div className="networks">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => {
                signIn();
              }}
            >
              Access through social networks
            </button>
            <button
              type="button"
              onClick={() => {
                signOut();
              }}
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
      <div className={`registr ${open == 1 ? "active" : ""}`}>
        <div className="title">Ro&apos;yxatdan o&apos;tish</div>
        <div className="form">
          <form>
            <div className={`inputs ${send == 0 ? "active" : ""}`}>
              <label>
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  required={true}
                  onChange={userHandler}
                  value={name}
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required={true}
                  value={email}
                  onChange={userHandler}
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password1"
                  required={true}
                  value={password1}
                  onChange={userHandler}
                />
                <input
                  type="password"
                  name="password2"
                  required={true}
                  value={password2}
                  onChange={userHandler}
                />
              </label>
              <label>
                Phone Number
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phone"
                  value={phone}
                  onChange={userHandler}
                />
              </label>
              <button
                type="button"
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3"
                onClick={verifyHandler}
                disabled={!(name && email && password1 == password2)}
              >
                Kirish
              </button>
            </div>
            <div className={`isTrue ${send == 1 ? "active" : ""}`}>
              <input
                type="number"
                placeholder="Enter a number"
                name="number"
                value={number}
                onChange={userHandler}
              />
              <p>
                Elektron pochtangizga yuborilgan parol {timer} vaqt amal qiladi
              </p>
              <button
                type="button"
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-3"
                onClick={registrHandler}
              >
                Tasdiqlash
              </button>
            </div>
            <p
              onClick={() => {
                setOpen(0);
                setTimeout(() => {
                  setSend(0);
                }, [300]);
              }}
            >
              Do you have an account?
            </p>
          </form>
          <div className="networks">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => {
                signIn();
              }}
            >
              Access through social networks
            </button>
            <button
              type="button"
              onClick={() => {
                signOut();
              }}
              className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Exit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

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
