// https://developer.mozilla.org/ko/docs/Web/API/Fetch_API/Using_Fetch
// POST 메서드 구현 예제
async function postData(rl = '', data = {}) {
	// 옵션 기본 값은 *로 강조 
	const response = await fetch(url, {
		method: 'POST', // *GET, POST, PUT, DELETE 등
		mode: 'cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		credentials: 'same-origin', // include, *same-origin, omit
		// headers는 json으로 데이터를 주고 받겠다는 것
		headers: {
			'Content-Type': 'application/json',
			// 'Content-Type': 'application/x-www-form-urlencoded',
		},
		redirect: 'follow', // manual, *follow, error
		referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
	});
}