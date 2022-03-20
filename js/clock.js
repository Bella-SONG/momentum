const clock = document.getElementById("clock");

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2, "0");
	const minutes = String(date.getMinutes()).padStart(2, "0");
	const seconds = String(date.getSeconds()).padStart(2, "0");
	clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock(); //1초 지나지않고 바로나오게 즉시 호출
setInterval(getClock, 1000);

//1초에서 9초까지도 문자열 숫자 두자리로
//padStart(max length, text what you wanna put in) string의 앞자리에 추가
//padEnd(,) string의 뒷자리에 추가
