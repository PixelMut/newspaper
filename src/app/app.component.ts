import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {COUNTRIES} from './providers/mock-countries';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newspaper';
  opened = false;

  constructor(public dialog: MatDialog,
              public route: ActivatedRoute,
              private router:Router){

  }

  // to change the country
  // setCountry(){
  //   let dialogRef = this.dialog.open(PreferencesDialog, {
  //     height: '400px',
  //     width: '600px',
  //   });
  //
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     if(result !== ''){
  //       // this.router.navigate(['/top-headlines'],{queryParams: {langue: result}});
  //       this.router.navigate(['/top-headlines/dd'],params'sefefe');
  //     }
  //   });
  //
  //
  // }

}
//
// @Component({
//   selector: 'preferences-dialog',
//   templateUrl: 'preferences-dialog.html',
// })
// export class PreferencesDialog {
//   countries = COUNTRIES;
//   langue;
//
//   constructor(
//     public dialogRef: MatDialogRef<PreferencesDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: any) {
//
//
//   }
//
//   onClickClose(){
//     this.dialogRef.close(this.langue);
//   }
//
//   onNoClick(): void {
//     this.dialogRef.close();
//   }
//
// }
