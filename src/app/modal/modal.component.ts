import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [RouterModule]
})
export class ModalComponent {
  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
