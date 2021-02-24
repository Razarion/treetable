import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TreeNode} from "primeng/api";

@Injectable()
export class NodeService {

  constructor(private http: HttpClient) {
  }

  getFilesystem() {
    return this.http.get<any>('assets/data.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
  }

  getRazarionConfig() {
    return this.http.get<any>('assets/builder_1.json')
      .toPromise()
      .then(res => this.toTreeNodes(res));
  }

  private toTreeNodes(raZconfig: any): TreeNode[] {
    console.log(raZconfig);
    let treeNodes: TreeNode[] = [];
    Object.entries(raZconfig).forEach((value) => {
      let treeNode: TreeNode = {};
      treeNode.data = {};
      treeNode.data.name = value[0];
      if (value[1] instanceof Object) {
        treeNode.children = this.toTreeNodes(value[1]);
        treeNode.data.deleteAllowed = true;
      } else if (value[1] == null) {
        treeNode.data.createAllowed = true;
      } else {
        treeNode.data.value = value[1];
      }
      treeNodes.push(treeNode)
    })
    return treeNodes;
  }
}
