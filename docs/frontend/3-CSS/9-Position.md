# Position

## static

- default값
- 변화에 움직이지 않는다.
- html 작성 순으로 위치가 지정된다.

## relative

- 자신이 있어야하는 위치에 상대적이다.(초기 요소가 생성된 위치는 변하지 않음.)
- 다른 콘텐츠들에게 위치에 대한 영향을 미치지 않는다.

## absolute

- 조상의 위치(static을 제외한 position 속성값을 가진 가장 가까운 조상)기준으로 자리를 잡는다.
- 일반적인 문서 흐름에서 자신의 요소를 제거하고 자리를 잡는다.

## fixed

- Viewport 기준으로 위치를 지정
- `transform`, `perspective`, `filter` 속성 중 어느 하나라도 `none`이 아니면 Viewport 대신 그 조상을 컨테이닝 블록으로 삼는다.
- 일반적인 문서 흐름에서 자기 자신의 요소를 제거하고 자리를 잡는다.
- 스크롤을 올리고 내려도 자리는 변하지 않는다.(완전 고정)
- 대개적으로 header나 하단 top 버튼에 사용

## sticky

- 조상의 위치(static을 제외한 position속성값을 가진 가장 가까운 조상)를 기준으로 자리를 잡는다.

## z-index

- `position`의 속성값이 `static`` 이외의 값을 가진 박스가 z축의 위치를 지정
- `z-index`에 값이 클수록 박스는 더 앞으로 나온다.
- 부모가 `z-index`를 높여 자식보다 앞으로 나올 수 없다.
- 자식은 `z-index`를 음수의 값으로 두어 부모 뒤로 갈 수 있다.