import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-phn-ui',
  templateUrl: './phn-ui.component.html',
  styleUrls: ['./phn-ui.component.css']
})
export class PhnUIComponent implements OnInit {
  public recaptchaVerifier: firebase.auth.RecaptchaVerifier;
  public sent: boolean;
  public phone_number:string = "7095079215";
  public otp:string= null;
  public confirmobj:any = {};
 // public verification:string;
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBJPImmg65NwSBLAOasTR9aTH8N016Px74",
      authDomain: "onlinebankapp.firebaseapp.com",
      databaseURL: "https://onlinebankapp.firebaseio.com",
      projectId: "onlinebankapp",
      storageBucket: "",
      messagingSenderId: "183806106964",
      appId: "1:183806106964:web:94e9db68d5be0f4d"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
   }

   ngOnInit() {
    //  this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
  this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
    'size': 'invisible',
    'callback': function(response) {
      // reCAPTCHA solved, allow signInWithPhoneNumber.
      
     console.log(response);
     this.onSubmit();
    }
  });
  this.onSubmit();
}
onSubmit() {
  const appVerifier = this.recaptchaVerifier;
  console.log(this.phone_number);
  const phoneNumber = "+91"+this.phone_number;
  console.log(phoneNumber);
   firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
   .then((confirmationResult) => {
      this.sent = true;
      this.confirmobj = confirmationResult;
      console.log('Setting confirmationResult');
      // const verification =  prompt('Enter verification code');
      // if (verification != null) {
      //   console.log(verification);
      //   confirmationResult.confirm(verification)
      //     .then((good) => {
      //       // all checks out
      //       console.log('verification successful', good);

      //     })
      //     .catch((bad) => {
      //       // code verification was bad.
      //     });
      // } else {
      //   console.log('No verification code entered');
      // }
    })
    .catch((err) => {
      console.log('sms not sent', err);
    });
}
 verifyOTP(){
   console.log("inside verifyOTP",this.otp);
   if(this.otp!=null){
    this.confirmobj.confirm(this.otp)
    .then((good)=>{
     console.log('verification successful', good);
    })
    .catch((bad) => {
      console.log('verification unsuccessful', bad);
      //         // code verification was bad.
           });
   }
   else{
    console.log('No verification code entered');
   }
   
 }
}
