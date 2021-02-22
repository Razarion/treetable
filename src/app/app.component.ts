import {Component, OnInit} from '@angular/core';
import {NodeService} from "./node-service";
import {TreeNode} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  files1: TreeNode[] = [];

  constructor(private nodeService: NodeService) {
  }

  ngOnInit(): void {
    this.nodeService.getFilesystem().then(files => this.files1 = files);
  }
}
