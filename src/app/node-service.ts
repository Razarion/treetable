import {Injectable} from "@angular/core";

@Injectable()
export class NodeService {

  constructor() {
  }

  getFilesystem() {
    return JSON.parse("{\n" +
      "    \"data\":\n" +
      "    [\n" +
      "        {\n" +
      "            \"data\":{\n" +
      "                \"name\":\"Documents\",\n" +
      "                \"size\":\"75kb\",\n" +
      "                \"type\":\"Folder\"\n" +
      "            },\n" +
      "            \"children\":[\n" +
      "                {\n" +
      "                    \"data\":{\n" +
      "                        \"name\":\"Work\",\n" +
      "                        \"size\":\"55kb\",\n" +
      "                        \"type\":\"Folder\"\n" +
      "                    },\n" +
      "                    \"children\":[\n" +
      "                        {\n" +
      "                            \"data\":{\n" +
      "                                \"name\":\"Expenses.doc\",\n" +
      "                                \"size\":\"30kb\",\n" +
      "                                \"type\":\"Document\"\n" +
      "                            }\n" +
      "                        },\n" +
      "                        {\n" +
      "                            \"data\":{\n" +
      "                                \"name\":\"Resume.doc\",\n" +
      "                                \"size\":\"25kb\",\n" +
      "                                \"type\":\"Resume\"\n" +
      "                            }\n" +
      "                        }\n" +
      "                    ]\n" +
      "                },\n" +
      "                {\n" +
      "                    \"data\":{\n" +
      "                        \"name\":\"Home\",\n" +
      "                        \"size\":\"20kb\",\n" +
      "                        \"type\":\"Folder\"\n" +
      "                    },\n" +
      "                    \"children\":[\n" +
      "                        {\n" +
      "                            \"data\":{\n" +
      "                                \"name\":\"Invoices\",\n" +
      "                                \"size\":\"20kb\",\n" +
      "                                \"type\":\"Text\"\n" +
      "                            }\n" +
      "                        }\n" +
      "                    ]\n" +
      "                }\n" +
      "            ]\n" +
      "        },\n" +
      "        {\n" +
      "            \"data\":{\n" +
      "                \"name\":\"Pictures\",\n" +
      "                \"size\":\"150kb\",\n" +
      "                \"type\":\"Folder\"\n" +
      "            },\n" +
      "            \"children\":[\n" +
      "                {\n" +
      "                    \"data\":{\n" +
      "                        \"name\":\"barcelona.jpg\",\n" +
      "                        \"size\":\"90kb\",\n" +
      "                        \"type\":\"Picture\"\n" +
      "                    }\n" +
      "                },\n" +
      "                {\n" +
      "                    \"data\":{\n" +
      "                        \"name\":\"primeui.png\",\n" +
      "                        \"size\":\"30kb\",\n" +
      "                        \"type\":\"Picture\"\n" +
      "                    }\n" +
      "                },\n" +
      "                {\n" +
      "                    \"data\":{\n" +
      "                        \"name\":\"optimus.jpg\",\n" +
      "                        \"size\":\"30kb\",\n" +
      "                        \"type\":\"Picture\"\n" +
      "                    }\n" +
      "                }\n" +
      "            ]\n" +
      "        }\n" +
      "    ]\n" +
      "}\n").data;
  }
}