import SingInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import { Container } from "./authentication.style.jsx";

export default function Authentication() {
  return (
    <Container>
      <SingInForm />
      <SignUpForm />
    </Container>
  );
}
