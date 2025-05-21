import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { CardapioItem } from '../cardapio/cardapio.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  imports: [RouterModule]
})
export class ModalComponent {
  item: any;
  constructor(public dialogRef: MatDialogRef<ModalComponent>) {}
  data = inject(MAT_DIALOG_DATA) as CardapioItem;

  closeModal(): void {
    this.dialogRef.close();
  }
}
