import { userLogin, userRegister } from "../redux/features/auth/authAction";
import store from "../redux/store";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      //return alert("Please Privde All Feilds");
      return toast.error("Please provide all fileds", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  organisationName,
  address,
  hospitalName,
  website
) => {
  e.preventDefault();
  try {
    store.dispatch(
      userRegister({
        name,
        role,
        email,
        password,
        phone,
        organisationName,
        address,
        hospitalName,
        website,
      })
    );
  } catch (error) {
    console.log(error);
  }
};
