import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import LoginPage from "../pages/LoginPage/LoginPage"
import CreateTripPage from "../pages/CreateTripPage/CreateTripPage"
import ApplicationFormPage from '../pages/ApplicationFormPage/ApplicationFormPage'
import AdminHomePage from "../pages/AdminHomePage/AdminHomePage"
import ListTripsPage from "../pages/ListTripsPage/ListTripsPage"
import TripDetailsPage from "../pages/TripDetailsPage/TripDetailsPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"

const Router = () => {
  return (
    
    <BrowserRouter>
        <Switch>
           <Route path={"/"}>
              <HomePage/> 
          </Route>

          <Route path={"/trips/list"}>
             <ListTripsPage/>
          </Route>

          <Route path={"/trips/application"}>
             <ApplicationFormPage/> 
          </Route>

          <Route path={"/login"}>
              <LoginPage/> 
          </Route>

          <Route path={"/admin/trips/list"}>
             <AdminHomePage/>
          </Route>

          <Route path={"/admin/trips/create"}>
             <CreateTripPage/>
          </Route>

          <Route path={"/admin/trips/:id"}>
             <TripDetailsPage/>
          </Route>

          <Route>
              <ErrorPage/>
          </Route>
        </Switch>
   </BrowserRouter>
  )
}

export default Router