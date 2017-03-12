class QAQ {
  constructor(name) {
    this.name = name;
  }
  TAT(){
    console.log('TATTT');
  }
  OwO(){
    console.log('>///<');
  }
}

class jumi extends QAQ{
  constructor(name, greeting) {
    super(name);
    this.greeting = greeting;
  }
  OwO(){
    super.QAQ;
    console.log('~___~');
  }
}

var QAQQ = new QAQ('winnie');
QAQQ.OwO();

var jumi2 = new jumi('Sam','love');
jumi2.OwO();