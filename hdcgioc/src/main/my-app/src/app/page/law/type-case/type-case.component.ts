import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzFormatEmitEvent } from 'ng-zorro-antd';
import { LawService } from '../law.service';
declare var echarts
declare var webconfig;
@Component({
  selector: 'app-type-case',
  templateUrl: './type-case.component.html',
  styleUrls: ['./type-case.component.scss']
})


export class TypeCaseComponent implements OnInit {

  private webconfig = webconfig;
  isVisible = false;
  searchValue = '';
  searchfc = '';
  videosrc = '';
  selectTitle:any;
  total:number = 0;
  listOfData = [];
  listOfTotal = [];
  nodes = [
    {
      title: '0-0',
      key: '0-0',
      children: [
        {
          title: '0-0-0',
          key: '0-0-0',
          children: [
            { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
            { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
            { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
          ]
        },
        {
          title: '0-0-1',
          key: '0-0-1',
          children: [
            { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
            { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
            { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
          ]
        },
        {
          title: '0-0-2',
          key: '0-0-2',
          isLeaf: true
        }
      ]
    },
    {
      title: '0-1',
      key: '0-1',
      children: [
        { title: '0-1-0-0', key: '0-1-0-0', isLeaf: true },
        { title: '0-1-0-1', key: '0-1-0-1', isLeaf: true },
        { title: '0-1-0-2', key: '0-1-0-2', isLeaf: true }
      ]
    },
    {
      title: '0-2',
      key: '0-2',
      isLeaf: true
    }
  ];
  constructor(private lawSerivce: LawService, private router: Router) {}

  ngOnInit() {
    this.getClassList();
    this.queryDataList('1');
  }
  private getClassList() {
    // debugger;
    this.lawSerivce.getAllClass('1').subscribe((data) => {
      console.log("data",data);
      this.arrayToTreeArray(data["list"]);
    });
  }
  private arrayToTreeArray(array) {
    let rootArray = [];
    array.forEach(element => {
       if(element.pid == '0'){
        this.selectTitle = element.name;
         rootArray.push(element);
       }
     });
     let treeArray  = [];
     rootArray.forEach(item => {
       let tree = {
          title:item.name,
          key:item.id,
          expanded: true,
          children: array.length > 0 ? this.toTree(item.id,array):[]
       }
       treeArray.push(tree);
     });
     console.log("rootArray",treeArray);
     this.treeIsLeaf(treeArray);
     console.log("rootArray",treeArray);
     this.nodes = treeArray;
  }
  private treeIsLeaf(array){
    array.forEach(item=>{
      console.log("item.children",item.children);
       if( !item.children || item.children.length == 0){
         item.isLeaf = true;
       }else{
         item.selectable = false;
         this.treeIsLeaf(item.children)
       }
    })
  }
  private toTree(pid,array) {
    let children = [];
    let len = array.length;
    for(var i = 0;i<len;i++){
      let node = array[i];
      if(node.pid == pid){
        children.push({
          title:node.name,
          key:node.id,
          children:this.toTree(node.id,array)
        })
      }
    }
    console.log("children",children);
    return children;
  }
  
  nzEvent(event: NzFormatEmitEvent): void {
    console.log(event);
    this.searchfc = '';
    // if(!!event.selectedKeys[0]){
    let key = event.selectedKeys[0].origin.key;
    // }
    let children = event.selectedKeys[0].origin.children;
    debugger;
    let selectTitle = event.selectedKeys[0].origin.title;
    if (!!selectTitle) {
      this.selectTitle = selectTitle;
    }
    if (!!key && children.length ==  0) {
      this.queryDataList(key)
     
    }
  }
  doSearchFc(){
    console.log(this.searchfc);
    this.lawSerivce.getFileListByKeyWord(this.searchfc).subscribe(
      data =>{
        console.log("data",data);
        this.total = data["list"].length;
        this.listOfData = data["list"];
        this.listOfTotal = data["list"];
        this.listOfData = this.listOfData.slice(0,10);
      }
    )
  }
  queryDataList(key){
    // this.lawSerivce.getAllClass(key).subscribe(
    //   res =>{
    //     let list = res["list"];
    //     let code = ''
    //     list.forEach(item => {
    //       code += item.id+","
    //     });
    //     code = code.slice(0, code.length-2)
        this.lawSerivce.getAllList(key).subscribe(
          data=>{
            console.log("data",data);
            this.total = data["list"].length;
            this.listOfData = data["list"];
            this.listOfTotal = data["list"];
            this.listOfData = this.listOfData.slice(0,10);
          }
        // )
      // }
    )
  }
  currentPageDataChange(event){
    console.log(event);
    this.listOfData = this.listOfTotal.slice((event-1)*10,event*10);
  }
  gotoVideo(data){
    console.log("data");
    if (data.type == '视频') {
       this.isVisible = true;
       this.videosrc = this.webconfig+data.path;
    }else{
      window.location.href = this.webconfig+ data.path;
    }
   
  }
  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
 
}
