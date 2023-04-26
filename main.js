let currencyRatio = {
  //환율 바꾸기
  USD: {
    KRW: 1335.61,
    USD: 1,
    VND: 23512.5,
    unit: "달러",
  },
  KRW: {
    KRW: 1,
    USD: 0.00075,
    VND: 17.61,
    unit: "원",
  },
  VND: {
    KRW: 0.057,
    USD: 0.000043,
    VND: 1,
    unit: "동",
  },
};

//console.log(currencyRatio.VND.unit);  //. 이나 []는 같은 방식. mix도 가능
//console.log(currencyRatio['VND']['unit']);
let fromCurrency = "USD";
let toCurrency ="USD";
document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    //버튼가져오기  //버튼 값 바꾸기
    document.getElementById("from-button").textContent = this.textContent;
    fromCurrency = this.textContent;
    console.log("fromcurrency는", fromCurrency);
    convert();
  })
);

document
.querySelectorAll("#to-currency-list a")
.forEach((menu) => menu.addEventListener("click",function () {
    document.getElementById("to-button").textContent = this.textContent;
    toCurrency = this.textContent;
    convert();
}));


function convert(){
   let amount =document.getElementById("from-input").value;//값을 읽어오겠다.
   let convertedAmount = amount * currencyRatio[fromCurrency][toCurrency]
   console.log("환전결과",convertedAmount);

   document.getElementById("to-input").value=convertedAmount;
}
//new ES6 

//예전 let name:"이름"
//     let age =17

//let person = {name:name , age:age}

//ES6 Ver.
//let person ={ name , age }  //키값과 변수이름 같을때만 가능

//ES6 객체의 경우
//let girl = {
//	name:"예쁨"
//	age:7
//}

//이전방식
//let name =girl.name
//let num= girl.num

//ES6
//let {name,num} =girl