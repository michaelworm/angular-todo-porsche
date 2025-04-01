import { Component } from '@angular/core';
import { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';
import { NgForOf } from '@angular/common';
import { dataBasic, headBasic } from './table.data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-table',
  imports: [
    PorscheDesignSystemModule,
    NgForOf,
    RouterLink,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  public head = headBasic;
  public data = dataBasic;
}
