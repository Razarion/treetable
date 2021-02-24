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
      .then(res => this.toTreeNode(res));
  }

  toTreeNode(data: any): TreeNode[] {
    console.log(data);
    let treeNodes: TreeNode[] = [];
    Object.entries(data).forEach((value, index, array) => {
      let treeNode: TreeNode = {};
      treeNode.data = {
        name: value[0],
        value: value[1]
      }
      treeNodes.push(treeNode)
      // console.log(value);
      // console.log(index);
      // console.log(array);
    })
    return treeNodes;
  }
}
