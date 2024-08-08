import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent implements OnChanges {
  @Input() currentPage: number = 0;
  @Input() itemsPerPage: number = 0;
  @Input() totalItems: number = 0;

  totalPages: number = 0;

  @Output() pageChanged: EventEmitter<number> = new EventEmitter();

  ngOnChanges() {
    this.getTotalPages()
  }

  getTotalPages(){
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  }

  changePage(page: number){
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChanged.emit(page);
    }
  }
}
