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
  public searchDataList:any =[];
  public filterDataList:any = []
  public categoryList:any = []
  public selectedCategory:any= "All";
  public isSearched:boolean=false;
  public isfiltered:boolean=false;

  ngOnInit(){
    this.getInitialPageRange(this.dataList);
    this.getCategoryList();
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
    let changeDataList = this.isSearched ? this.searchDataList : this.isfiltered ? this.filterDataList : this.dataList
    //let dataForCurrentPage = this.setDataForCurrentPage(this.currentPage, this.searchValue =="" && this.selectedCategory=="All" ? this.dataList : this.searchDataList);
    let dataForCurrentPage = this.setDataForCurrentPage(this.currentPage,changeDataList);
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
    this.checkForFilterSearch();
    let changeDataList = this.isfiltered ? JSON.parse(JSON.stringify(this.filterDataList)) : JSON.parse(JSON.stringify(this.dataList))
    this.searchDataList = this.searchValue && this.searchValue?.trim() !="" ? JSON.parse(JSON.stringify(changeDataList))?.filter( (ele:any) => ele.title?.toLowerCase()?.includes(this.searchValue?.trim()?.toLowerCase())) : changeDataList;
    this.currentPage = 1;
    this.getInitialPageRange(this.searchDataList );
    this.onPageChange(this.currentPage);
    
  }

  onCategoryChange(event:any){
    this.searchValue = ""
    this.checkForFilterSearch();
    const selectElement = event.target as HTMLSelectElement;
    this.selectedCategory = selectElement.value;
    this.filterDataList = this.selectedCategory !="All" ? JSON.parse(JSON.stringify(this.dataList))?.filter( (ele:any) => ele.category ==  this.selectedCategory) : this.dataList;
    this.currentPage = 1;
    this.getInitialPageRange(this.filterDataList);
    this.onPageChange(this.currentPage);

  }

  getCategoryList(){
    this.categoryList = this.dataList.reduce((acc: string[], item:any) => {
      if (!acc.includes(item.category)) {
        acc.push(item.category);
      }
      return acc;
    }, ["All"]);
  }

  checkForFilterSearch(){
    this.isSearched = this.searchValue !="";
    this.isfiltered = this.selectedCategory !="All";
  }
}
