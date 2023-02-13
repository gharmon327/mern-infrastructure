import SignUpForm from "../../../components/SignUpForm/SignUpForm";
import LogInForm from "../../../components/LogInForm/LogInForm";

export default function AuthPage( { setUser }){
    return (
    <>
    <h2>AuthPage</h2>
    <SignUpForm setUser={setUser}/>
    <LogInForm setUser={setUser}/>
    </>
    )
}