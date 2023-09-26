import { Component,OnInit } from '@angular/core';
import AirDatepicker from 'air-datepicker';
// import './node_modules/air-datepicker/air-datepicker.css';
import localeEn from 'air-datepicker/locale/en';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})


export class TestComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    new AirDatepicker('#el', {
      locale: localeEn,
      dateFormat: "dd/MM/yyyy"
  })
  }
}
