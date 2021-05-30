import React,{useState} from 'react';
import { Switch,Route, Redirect } from 'react-router';
import Navbar1 from './Navbar1';
import Home1 from './Home1';
import About1 from './About1';
import Service1 from './Service1'
import Contact1 from './Contact1'
import Login from './Login';
import SignUp from './SignUp';
import Footer from './Footer';
import Buy from './Buy';
import Post from './Post';
import Rate from './Rate';
import Rent from './Rent';
import Chat from './Chat';
import Advices from './Advices';




const App=()=>{
    const [user, setUser] = useState("")
    const [islogged, setIslogged] = useState(false)
    const logout=()=>{
        setIslogged(false)
        setUser("")
      }
    return(
        <React.Fragment>
        <Navbar1 user={user} islogged={islogged} logout={logout}/>
        <Switch>
            
            <Route path exact ='/' component={Home1}/>
            <Route path ='/about' component={About1}/>
            <Route path ='/service' component={Service1}/>
            <Route path ='/contact' component={Contact1}/>
            <Route path ='/login' >
                <Login setUser={setUser} setIslogged={setIslogged} />

            </Route>
            <Route path ='/card/Buy' component={Buy}/>
            <Route path ='/signup' component={SignUp}/>
            <Route path ='/card/Post' component={Post}/>
            <Route path ='/card/Calculate' component={Rate}/>
            <Route path ='/card/Rent-it' component={Rent}/>
            <Route path ='/card/Chat' component={Chat}/>
            <Route path ='/card/View' component={Advices}/> 
        </Switch>
        <Footer/>


        </React.Fragment>
    )
};

export default App;