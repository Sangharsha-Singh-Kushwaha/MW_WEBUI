import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Input() dataList:any=[];
  @Input() paseSize:number = 1;
  @Input() maxRangeSize :number = this.paseSize;
  @Output() dataListForPage = new EventEmitter();
  public currentPage:number = 1;
  public pageRange:any = [];
  public initialPageRange:any = [];
  public totalPage:number = 1;
  public searchValue: any = "";
  public searchDataList:any;

  ngOnInit(){
    this.getInitialPageRange(this.dataList);
  }

  // getInitialPageRange(){
  //   this.totalPage = Math.ceil(this.dataList.length/this.paseSize);
  //   this.initialPageRange = Array.from({length:this.totalPage},(_,index) => index+1);
  //   this.getPageRange(this.currentPage);
  // }


  //changes due to search functionality
  getInitialPageRange(dataList:any){
    this.totalPage = Math.ceil(dataList.length/this.paseSize);
    this.initialPageRange = Array.from({length:this.totalPage},(_,index) => index+1);
    this.getPageRange(this.currentPage);
  }

  // setDataForCurrentPage(currentPage:number){
  //   let startIndexOfData = this.paseSize * (currentPage-1);
  //   let endIndexOfData = startIndexOfData + this.paseSize;
  //   return this.dataList?.slice(startIndexOfData,endIndexOfData);
  // }



  //changes due to search functionality
  setDataForCurrentPage(currentPage:number,dataList:any){
    let startIndexOfData = this.paseSize * (currentPage-1);
    let endIndexOfData = startIndexOfData + this.paseSize;
    return dataList?.slice(startIndexOfData,endIndexOfData);
  }

  // onPageChange(currentPage:number){
  //   this.currentPage = currentPage;
  //   this.getPageRange(this.currentPage);
  //   let dataForCurrentPage = this.setDataForCurrentPage(this.currentPage);
  //   this.dataListForPage.emit(dataForCurrentPage);
  // }

  
  //changes due to search functionality
  onPageChange(currentPage:number){
    this.currentPage = currentPage;
    this.getPageRange(this.currentPage);
    let dataForCurrentPage = this.setDataForCurrentPage(this.currentPage, this.searchValue =="" ? this.dataList : this.searchDataList);
    this.dataListForPage.emit(dataForCurrentPage);
  }

  previous(){
    this.currentPage = this.currentPage - 1;
    this.onPageChange(this.currentPage);
  }

  next(){
    this.currentPage = this.currentPage + 1;
    this.onPageChange(this.currentPage);
  }

  getPageRange(currentPage:number){
    this.pageRange = currentPage < this.maxRangeSize ? JSON.parse(JSON.stringify(this.initialPageRange))?.slice(0,this.maxRangeSize):
    JSON.parse(JSON.stringify(this.initialPageRange))?.slice(currentPage-2,currentPage-2+this.maxRangeSize);
  }

  searchItems() {
    this.searchDataList = this.searchValue && this.searchValue?.trim() !="" ? JSON.parse(JSON.stringify(this.dataList))?.filter( (ele:any) => ele.category?.includes(this.searchValue?.trim())) : this.dataList;
    this.currentPage = 1;
    this.getInitialPageRange(this.searchDataList );
    this.onPageChange(this.currentPage);
    
  }
}
