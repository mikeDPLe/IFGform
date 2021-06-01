import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DimensionService } from '../../services/dimension.service';
import { ValidDimService } from '../../services/valid-dim.service';

@Component({
  selector: 'app-check-remove',
  templateUrl: './check-remove.component.html',
  styleUrls: ['./check-remove.component.css']
})
export class CheckRemoveComponent {

  constructor(
    private dim: DimensionService,
    private router: Router,
    private valid: ValidDimService,
  ) { }
  showConfirm: Boolean = false;

  yes() {
    if (this.showConfirm) {
      this.dim.useOldTravel();
      this.router.navigate(['dimension-product'])
    }
    this.showConfirm = true;
  }

  no() {
    if (!this.showConfirm) {
      this.valid.testObs2.next(true);
      this.router.navigate(['proceed'])
    } else {
      this.valid.neededRemoval = true;
      this.router.navigate(['dimension-form'])
    }
  }
}
