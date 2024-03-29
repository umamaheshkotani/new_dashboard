import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit {
  constructor(private serv:Service1Service){}
  clothes:any;
  showForm:boolean = false;
  clothId:any;
  clothTitle:any;
  clothPrice:any;
  clothCategory:any;
  FormTitle:string = 'Add New Entry'
  editId:any;


  ngOnInit(): void {
    this.getdata();
  }
  getdata(){
    this.serv.fetchdata().subscribe((data)=>{
      this.clothes = data;
      console.log(this.clothes);
    },
    (error)=>{
      console.log("Error");
    }
    )
  }
  openForm(cloth=null){
    this.formClear();
    this.showForm=true
    if(cloth){
      this.FormTitle='Edit Entry';
      this.clothId=cloth['id'];
      this.clothTitle=cloth['title'];
      this.clothPrice=cloth['price'];
      this.clothCategory=cloth['category'];
      this.editId=cloth['id'];
    }else{
      this.FormTitle='Add New Entry'
    }
  }
  formClear(){
    this.clothId='';
    this.clothTitle='';
    this.clothPrice='';
    this.clothCategory='';
    this.editId='';
  }
  formClose(){
    this.formClear();
    this.showForm=false;
  }
  formSave(){
    let data={
      id:this.clothId,
      title:this.clothTitle,
      price:this.clothPrice,
      category:this.clothCategory,
    }
    if(this.editId){
      this.serv.updatedata(data,this.editId).subscribe((res)=>{
        this.getdata();
      })

    }else{
      this.serv.createdata(data).subscribe((res)=>{
        this.getdata();
      })
    }
    this.formClose();
  }
  deleteEntry(id:any){    
    this.serv.deletedata(id).subscribe((res)=>{
      this.getdata();
    })
  }

}
