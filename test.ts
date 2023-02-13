function logTime<T>(num: T): T {
  console.log(new Date());
  return num;
}

logTime<string>('test')
logTime<number>(23)

function logTime2<T>(num: T): T {
  if (typeof num == 'string') {
    num.toLowerCase();
  }
  return num;
}

interface MyInterface {
  transform: <T, F>(a: T) => F
}

class MyGenClass<T> {
  value: T;
}

const a = new MyGenClass<number>()
a.value

interface TimeStamp {
  stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
  console.log(num.stamp)
  return num;
}

