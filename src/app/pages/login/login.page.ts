import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonSlides, LoadingController, ToastController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  slides: IonSlides;
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public wavesPosition: number = 0;
  private wavesDifference: number = 100;
  private loading: any;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    public keyboard: Keyboard,
    private loadingCtrl: LoadingController,
    private toastCtrl:ToastController,
    private authService: AuthService
   
    ) 
    {
      this.loginForm = this.formBuilder.group({
        email:['', Validators.required],
        password:['', Validators.required],
      });
      this.registerForm = this.formBuilder.group({
        name:['', Validators.required],
        email:['', Validators.required],
        password:['', Validators.required],
      });
     }

  ngOnInit() {
  }
  segmentChanged(event: any) {
    if (event.detail.value === 'login') {
      console.log(event.detail.value);
      this.slides.slidePrev();
      this.wavesPosition += this.wavesDifference;
    } else {
      console.log(event.detail.value);
      this.slides.slideNext();
      this.wavesPosition -= this.wavesDifference;
    }
  }
  async login() {
   
  }

  async register(){  
    console.log(this.registerForm.value);
    await this.presentLoading();
    try {
      await this.authService.register(this.registerForm.value)
    } catch (error) {
      console.error(error);  
    }finally{
      // this.loading.dismissed();
    }
    
   

  }
  async presentLoading() {
    this.loading = await this.loadingCtrl.create({ message: 'Cargando...',duration: 2000 });
    return this.loading.present();
  }



  
  

}
