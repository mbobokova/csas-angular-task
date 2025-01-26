import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [NgClass]
 
})
export class ButtonComponent {
  // Set btn color
  @Input() color: 'green' | 'red' = 'green';
  // Set btn name
  @Input() text: string = '?';
  // Set onClick function
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    this.buttonClick.emit();
  }
}