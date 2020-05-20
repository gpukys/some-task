import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TreeNode } from '../tree.component';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-node',
  templateUrl: './add-node.component.html',
  styleUrls: ['./add-node.component.scss']
})
export class AddNodeComponent implements OnInit {
  editMode = false;
  form = this.fb.group({
    name: ['', Validators.required]
  });


  @Output() added = new EventEmitter<TreeNode>();
  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
  }

  addNode() {
    if (this.form.valid) {
      this.added.emit({title: this.form.get('name').value, children: []});
      this.form.get('name').setValue('');
      this.editMode = false;
    }
  }

}
