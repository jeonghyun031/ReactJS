// let num;
// num = 100;  //let은 선언과 초기화를 따로 해도 됨(hoisting)
// const str = "hello, world!";    //const 키워드를 사용하려면 초기화와 선언을 동시에
function greetUser(name) {
    console.log('Hello' + name);
}
greetUser('John');
function createerror(errormsg, errorcode) {
    throw { message: errormsg, code: errorcode };
    console.log(errormsg); //실행되지 않음
}
// createerror('Internal server erro', 500);
//함수 리턴값을 반환하지 않고 싶을때, void 또는 never 타입을 사용
//while(true)와 같은 루프문에서 사용
console.log(greetUser('Mark'));
console.log(createerror('Page not found', 404));
