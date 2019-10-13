import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent implements OnInit {
  closeResult: string;
  modalRef: NgbModalRef;
  @Input() todo: ITodo;
  constructor(
    private modalService: NgbModal, 
    private todoService : TodoService) 
    {}

  open(content) {
    
    this.modalRef = this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    this.modalRef.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  ngOnInit() {
  }

  yesDeleteTodo(todo:ITodo) {
    console.log("Delete button in Modal was clicked: " + todo)
    this.todoService.deleteToDoItem(todo);
    this.modalRef.close();
  }
}


  


