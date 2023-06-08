import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { ActivatedRoute, Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
import { ComponentService } from 'src/app/services/component.service';
interface ImageNode {
  name: string;
  children?: detailNode[];
}

interface detailNode {
  name: string;
  id: number;
}

const TREE_DATA: ImageNode[] = [
  {
    name: 'Show details',
    children: [
      { name: 'Apple', id: 1 },
      { name: 'Banana', id: 1 },
      { name: 'Fruit loops', id: 1 },
    ],
  },
];

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
})
export class ComponentDetailComponent implements OnInit {
  image!: Image;
  panelOpenState = false;

  private _transformer = (node: ImageNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor(
    private componentService: ComponentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.dataSource.data = TREE_DATA;
  }

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    this.componentService.getImageById(identifier).subscribe((image) => {
      if (!image) {
        return this.router.navigateByUrl('/');
      }

      this.image = image;
      console.log('Image --> ', this.image);
    });
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
}
