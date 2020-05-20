import { Component, OnInit, Input } from '@angular/core';
import { TreeNode } from '../tree.component';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {
  @Input() node: TreeNode;

  childrenVisible = false;

  constructor() { }

  addNode(event): void {
    this.node.children.push(event);
  }
}
