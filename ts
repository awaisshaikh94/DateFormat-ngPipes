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


  // time converter to milliseconds and also milliseconds to time
  time: any;
  todayTime: any;
  timeJust: any;
  public timeConvert()
  {
    this.time = Date.now();
    console.log(this.time);

    this.todayTime = new Date(this.time);
    this.timeJust = this.datePipe.transform(this.todayTime, 'h:MM:ss a');
    console.log(this.timeJust);
  }
