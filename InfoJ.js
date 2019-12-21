function Start()
{

var Name = ["Mohamed Ahmed","Ziad Ahmed","Yara Mamdouh","Hadeer Khaled","Mayar Mohamed"] ;
var ID = ["20182856","20181875","20180366","20182985","20182145"] ;
var Email = ["Mohamed-Ahmed@icloud.com","Ziad-Ahmed@gmail.com","Yara-Mamdouh@outlook.com","Hadeer-Khaled@yahoo.com","Mayar-Mohamed@hotmai.com"] ;
var BirthDay = ["1/1/2001","11/11/2000","31/12/2000","16/12/1998","15/6/2000"] ;
var College = ["Computer Scince","Biology","Art History","Accounting","Business"] ;

var R = Math.floor(Math.random()*5) ;

document.getElementById("NameRandom").value = Name[R] ;
document.getElementById("IdRandom").value = ID[R] ;
document.getElementById("EmailRandom").value = Email[R] ;
document.getElementById("BirthDayRandom").value = BirthDay[R] ;
document.getElementById("CollegeRandom").value = College[R] ;

}
