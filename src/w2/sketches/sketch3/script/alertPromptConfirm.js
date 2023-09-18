alert('안녕하세요');
let mmm;
mmm = prompt('당신의 이름은?', '홍길동');
let mim = confirm('당신의 이름이 ' + mmm + '맞습니까?');
if (mim == true) {
  alert('환영합니다. ' + mmm + '님.');
}
