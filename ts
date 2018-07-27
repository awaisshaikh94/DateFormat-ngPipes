// date converter to milliseconds and also milliseconds to date

  today: any;
  todayDate: any;
  dateJust: any;
  
  public DateConvert()
  {
    this.today = Date.now();
    console.log(this.today);

    this.todayDate = new Date(this.today);
    this.dateJust = this.datePipe.transform(this.todayDate, 'dd-MM-yyyy');
    console.log(this.dateJust);
}    
