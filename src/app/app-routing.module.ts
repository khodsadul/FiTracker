import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGaurd } from "./auth/auth.gaurd";
import { LoginComponent } from "./auth/login/login.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { NewTrainingComponent } from "./training/new-training/new-training.component";
import { TrainingComponent } from "./training/training.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'training', component: TrainingComponent, canActivate: [AuthGaurd] },
]


@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
  providers:[AuthGaurd]
})
export class AppRoutingModule {

}
