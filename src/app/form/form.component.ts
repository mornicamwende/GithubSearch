import { Component, OnInit ,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  gitName:string;
  @Output() searchEvent = new EventEmitter<any>();

  constructor() { }

  search(){
    this.searchEvent.emit(this.gitName);
  }

  ngOnInit(): void {
  }

}
