import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import App from "../../../app/app";
import { types } from "../../../store/types";

export default function Index() {
  const state = useSelector((s) => s);
  const [isAdmin, setIsAdmin] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  // router.query.id
  const { login } = state;

  useEffect(() => {
    const locUser = JSON.parse(localStorage.getItem("user"));
    const isBool =
      locUser &&
      login.users.some(
        (i) => i.user === locUser.user && i.password === locUser.password
      );
    // isBool true bulsa keyin api dagi tours larni ruyxati bilan xam tekshirib
    // kuriladi yani router ni id si bilan tour larni idsi solishtiraman
    // ikkalasi xam true bulsa setIsAdmin(true) dispatch({type:type.editTour, payload:tru})
    // aks xolda setIsAdmin(false) dispatch({type:type.editTour, payload:false})
    setIsAdmin(isBool);
    dispatch({ type: types.editTour, payload: isBool });
  }, [login]);

  console.log(login);
  if (isAdmin) {
    return (
      <section>
        <Head>
          <title>Edit tour</title>
        </Head>
        <App />
      </section>
    );
  }

  return (
    <section>
      <Head>
        <title>Edit tour</title>
      </Head>
      <p>404 error</p>
    </section>
  );
}
