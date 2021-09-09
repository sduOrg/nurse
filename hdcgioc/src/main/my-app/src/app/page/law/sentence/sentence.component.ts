import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzFormatEmitEvent } from 'ng-zorro-antd';
import { LawService } from '../law.service';
declare var echarts;
@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.scss']
})
export class SentenceComponent implements OnInit {

  isVisible = false;
  searchValue = '';
  videosrc = '';
  selectTitle:any;
  listOfData = [];
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
       if(element.pid == '1'){
         rootArray.push(element);
       }
     });
     let treeArray  = [];
     rootArray.forEach(item => {
       let tree = {
          title:item.name,
          key:item.id,
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
    let key = event.selectedKeys[0].key;
    debugger;
    let selectTitle = event.selectedKeys[0].origin.title;
    if (!!selectTitle) {
      this.selectTitle = selectTitle;
    }
    if (!!key) {
      this.lawSerivce.getAllList(key).subscribe(
        data=>{
          console.log("data",data);
          this.listOfData = data["list"];
        }
      )
    }
  }
  gotoVideo(data){
    console.log("data");
    if (data.type == '1') {
       this.isVisible = true;
       this.videosrc = 'http://127.0.0.1:8080/'+data.path;
    }else{
      window.location.href = "http://127.0.0.1:8080/"+ data.path;
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
