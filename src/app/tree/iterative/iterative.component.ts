import { Component, OnInit, Input } from '@angular/core';
import {TreeNode} from '../tree.component';

@Component({
  selector: 'app-iterative',
  templateUrl: './iterative.component.html',
  styleUrls: ['./iterative.component.scss']
})
export class IterativeComponent {

  @Input() tree: TreeNode[];

  constructor() { }

  addNode(event) {
    this.tree.push(event);
  }

}
