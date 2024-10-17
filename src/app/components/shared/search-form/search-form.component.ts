import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.css',
})
export class SearchFormComponent {
  searchQuery = '';

  onSubmit(event: Event, filterValue: string) {
    event.preventDefault();
    this.search(filterValue);
  }

  @Output() searchEvent = new EventEmitter<string>();

  search(searchQuery: string) {
    this.searchEvent.emit(searchQuery);
  }
}
