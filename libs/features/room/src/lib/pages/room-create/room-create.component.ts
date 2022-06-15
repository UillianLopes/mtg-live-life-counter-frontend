import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'mtg-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.scss'],
})
export class RoomCreateComponent implements OnInit {
  public readonly form = this._formBuilder.group({
    name: ['', Validators.required],
    life: [20],
    password: ['', Validators.required],
  });

  constructor(private readonly _formBuilder: UntypedFormBuilder) {}

  public ngOnInit(): void {}
}
