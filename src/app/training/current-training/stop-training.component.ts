import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: 'app-stop-training',
  templateUrl: './stop-training.component.html'
})
export class StopTrainingComponent {

  progress: string;

  constructor(@Inject(MAT_DIALOG_DATA) private passedData: any) {
    this.progress=passedData?.progress;
  }

}
