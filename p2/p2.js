document.getElementById('inputname').addEventListener('submit', function(event) {
    // 기본 제출 동작 방지
    event.preventDefault();

    // 입력 값 가져오기
    var name = document.getElementById('name').value;

    // 입력 값에 따라 결과 요소 내용 변경
    document.getElementById('inputname').style.display = 'none' ;
    document.getElementById('greeting').textContent = 'Hello, ' + name ;
  });