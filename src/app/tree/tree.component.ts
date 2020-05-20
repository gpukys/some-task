import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss']
})
export class TreeComponent {

  tree: TreeNode[] = [
    {
      title: 'Animals',
      children: [
        {title: 'Dog', children: []},
        {title: 'Cat',  children: []},
        {title: 'Mouse',  children: []},
      ]
    },
    {
      title: 'Cars',
      children: [
        {title: 'BMW', children: []},
        {title: 'Mercedes',  children: []},
        {title: 'Audi', children: []},
      ]
    }];

  constructor() { }
}

export interface TreeNode {
  title: string;
  children: TreeNode[];
}
