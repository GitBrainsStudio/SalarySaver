import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsumptionCreatorModalComponent } from 'src/app/Dialog/consumption-creator-modal/consumption-creator-modal.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(public dialog: MatDialog) {}

  consumptionCreatorDialog() {
    const dialogRef = this.dialog.open(ConsumptionCreatorModalComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
