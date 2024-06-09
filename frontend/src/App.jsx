import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SummaryApi from "./common";
import { useEffect } from "react";
import Context from "./context";
import { useDispatch } from "react-redux";
import { setUserDetails } from "./store/userSlice";

function App() {

  const dispatch = useDispatch()

  const fetchUserDetaiils = async () => {
    const dataResponse = await fetch(SummaryApi.current_user.url, {
      method: SummaryApi.current_user.method,
      credentials: "include",
    });

    const dataApi = await dataResponse.json();

     if(dataApi.success) {
      dispatch(setUserDetails(dataApi.data))
     }

    console.log("data-user", dataResponse);
  };

  useEffect(() => {
    fetchUserDetaiils();
  }, []);

  return (
    <>
      <Context.Provider value={{
        fetchUserDetaiils //user detail fetch
      }}>
        <ToastContainer />

        <Header />
        <main className="min-h-[calc(100vh-120px)]">
          <Outlet />
        </main>
        <Footer />
      </Context.Provider>
    </>
  );
}

export default App;
