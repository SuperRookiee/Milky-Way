import {Navigate, Route, Routes} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "@/firebase/firebase.ts";
import PageLayout from "@/Layouts/PageLayout/PageLayout";
import HomePage from "@/pages/HomePage/HomePage";
import AuthPage from "@/pages/AuthPage/AuthPage";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import LabPage from "@/pages/LabPage/LabPage";

const App = () => {
    const [authUser] = useAuthState(auth);

    return (
        <PageLayout>
            <Routes>
                <Route path='/' element={authUser ? <HomePage/> : <Navigate to='/auth'/>}/>
                <Route path='/auth' element={!authUser ? <AuthPage/> : <Navigate to='/'/>}/>
                <Route path='/:username' element={<ProfilePage/>}/>
                <Route path='/labs' element={<LabPage/>}/>
            </Routes>
        </PageLayout>
    );
}

export default App;
