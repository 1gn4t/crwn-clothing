import SingInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./authentication.style.scss";

export default function Authentication() {
  return (
    <div className="authentication-container">
      <SingInForm />
      <SignUpForm />
    </div>
  );
}
