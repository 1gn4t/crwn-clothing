import { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  singInAuthUserWithEmaiAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.style.scss";
import Button from "../button/button.component";

export default function SingInForm({ handlerLogGoogle }) {
  const [formField, setFormField] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formField;

  const resetFormFields = () => {
    setFormField({
      email: "",
      password: "",
    });
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await singInAuthUserWithEmaiAndPassword(email, password);
      console.log(user);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-login-credentials") {
        alert("incorrect login or password");
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const logGoogleUser = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an acccount</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handelSubmit}>
        <FormInput
          label="Email"
          onChange={handleChange}
          type="email"
          required
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          onChange={handleChange}
          type="password"
          required
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sing in</Button>
          <Button type="button" onClick={logGoogleUser} buttonType="google">
            Google sing in
          </Button>
        </div>
      </form>
    </div>
  );
}
