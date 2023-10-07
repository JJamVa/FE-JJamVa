# Redux

## Redux란?

- JavaScript 앱의 상태 관리를 위한 라이브러리 중 하나
- 앱의 상태를 중앙 집중식으로 관리하고 상태 변경을 예측 가능하게 만들어 앱의 복잡성을 관리
- 해당 React 프로젝트에서 터미널에 `npm install redux`, `npm install react-redux` 입력하여 설치

## Redux Flux 패턴

- Redux는 단방향으로 데이터를 전달하는 패턴 방식

![image](https://github.com/JJamVa/JJamVa/assets/80045006/0177ecb5-7a1a-475c-9497-7475c285a63e)

### Store

- 앱의 상태를 저장하고 관리하는 저장소
- 저장소는 **단 한개만 존재**

### Reducer

- 상태 변경을 처리하는 순수한 함수
- 현재 상태와 액션을 받아서 새로운 상태를 반환

### Actions

- 상태 변경을 나타내는 객체
- `type` 속성과 선택적으로 데이터를 가진다
- dispatch 함수를 통해 Reducer로 전달

### Dispatch

- store의 dispatch 메서드를 통해 액션을 리듀서로 전달하는 역할을 한다
- Action의 type을 dispatch하면 Reducer를 호출하여 상태를 업데이트 후, store에 저장

## Redux 구현

![image](https://github.com/JJamVa/JJamVa/assets/80045006/46b3cc94-e719-4b50-90fb-e166e979f2b6)

### index.js

```jsx title="index.js"
import React from "react";
import { createRoot } from "react-dom/client";

import { Provider } from "react-redux";
import rootReducer from "./store/store";
import { createStore } from "redux";
import Button from "./components/Button";

const store = createStore(rootReducer);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <Button />
  </Provider>
);
```

:::note
store.js에서 생성한 Reducer를 `createStore()`를 통해 저장소를 생성한다.<br/>
`<Provider>`를 이용하여 하위 Component들에게 Redux store를 전달한다.<br/>
즉, `<Provider>`안에 감싸진 하위 Component간의 상태 공유 및 업데이트가 가능하다.<br/>

:::

### store.js

```jsx title="store.js"
import { combineReducers } from "redux";

const countInitialState = { count: 0 };

const counterReducer = (state = countInitialState, action) => {
  if (action.type === "increase") return { ...state, count: state.count + 1 };
  else if (action.type === "increase5")
    return { ...state, count: state.count + action.payload };
  else if (action.type === "decrease")
    return { ...state, count: state.count - 1 };
  else return state;
};

const visibleInitialState = { visible: true };

const visibleReducer = (state = visibleInitialState, action) => {
  switch (action.type) {
    case "on/off":
      return { visible: !state.visible };
    default:
      return state;
  }
};

const rootReducer = combineReducers({ counterReducer, visibleReducer });

export default rootReducer;
```

:::note
store.js는 **저장소를 의미**하며, 내부적으로 어떻게 동작할지에 대해 정의를 한 코드이다.<br/>
`countInitialState`와 `visibleInitialState`을 통해 각 변수의 속성 값을 초기화한다.<br/>

`counterReducer`와 `visibleReducer`는 각 Redux Reducer함수라고 정의를 한다.<br/>
각 함수에는 state와 action이라는 Parameter가 존재한다.<br/>

- `state`는 각 Reducer에서 관리하고 있는 **객체의 속성 상태를 표현**<br/>
- `action`은 Redux에서 상태 변경이 요청됨에 따라 **state의 상태를 변경**<br/>

Parameter 값 중 `state = 초기값`을 하는 이유는 처음 Mount가 될 경우 **undefined 값을 방지**하기 위해 사용된다.<br/>

```jsx title="counterReducer함수"
const counterReducer = (state = countInitialState, action) => {
  if (action.type === "increase") return { ...state, count: state.count + 1 };
  else if (action.type === "increase5")
    return { ...state, count: state.count + action.payload };
  else if (action.type === "decrease")
    return { ...state, count: state.count - 1 };
  else return state;
};
```

```jsx title="Button.jsx의 increase1함수 내부 dispatch()"
const dispatch = useDispatch();

const increase1 = () => {
  dispatch({ type: "increase" });
};
```

Button.jsx에서 increase1에 대한 이벤트가 발생 시, `useDispatch`를 이용하여 action에 대한 객체 정보를 counterReducer로 보낸다.<br/>
그럼 increase1의 함수를 이벤트 호출하였다고 가정을 하였을 때,<br/>
`{ type: "increase" }`의 값은 counterReducer 함수의 action에 들어간다.<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/cf233ad3-a5a5-4805-b0fd-c3b815b18943)

action안의 type이라는 객체 속성을 이용하여 state의 정보를 상태 변경 후, store에 저장을 한다.<br/>

---

counterReducer에서 `else if(action.type === 'increase5')` 구문에서<br/>
`return { ...state, count: state.count + action.payload }`이 보인다.<br/>

```jsx title="Button.jsx의 increase5함수 내부 dispatch()"
const dispatch = useDispatch();

const increase5 = () => {
  dispatch({ type: "increase5", payload: 5 });
};
```

dispatch를 통하여 `{ type: "increase5", payload: 5 }`의 정보를 counterReducer의 action로 보낸다.<br/>

- `payload`는 action객체의 type 이외에 추가할 데이터를 의미<br/>

![image](https://github.com/JJamVa/JJamVa/assets/80045006/3440948d-b649-4c1a-b193-d7cd437da813)

위와 같이 action에 type과 payload의 속성을 확인이 가능하다.<br/>
counterReducer에 전달된 action 객체의 type속성으로 해당하는 state 정보를 업데이트 후, store에 저장한다.<br/>

---

```jsx
const rootReducer = combineReducers({ counterReducer, visibleReducer });

export default rootReducer;
```

store.js에는 총 2개의 Reducer인 counterReducer와 visibleReducer가 존재한다.<br/>
Redux의 store는 한개의 저장소만 존재해야하기 때문에 Reducer들을 결합하여야한다.<br/>
이때 `combineReducers`를 사용해야한다.<br/>
`combineReducers({counterReducer, visibleReducer})`를 통하여 하나의 Reducer로 정의를 하며,<br/>
index.js에서 **store를 생성**하기 때문에 rootReducer를 export 하였다.<br/>

:::

```jsx title="Button.jsx"
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Button() {
  const { count } = useSelector((state) => state.counterReducer);
  const { visible } = useSelector((state) => state.visibleReducer);

  const dispatch = useDispatch();

  const increase1 = () => {
    dispatch({ type: "increase" });
  };
  const increase5 = () => {
    dispatch({ type: "increase5", payload: 5 });
  };
  const decrease = () => {
    dispatch({ type: "decrease" });
  };
  const isVisible = () => {
    dispatch({ type: "on/off" });
  };

  return (
    <div>
      {visible && <p>{count}</p>}
      <button onClick={increase1}>1씩 증가</button>
      <button onClick={increase5}>5씩 증가</button>
      <button onClick={decrease}>-1씩 감소</button>
      <button onClick={isVisible}>숫자 {visible ? "가리기" : "켜기"}</button>
    </div>
  );
}

export default Button;
```

:::note
Button.jsx는 Redux store에 있는 data들을 사용하여 기능을 구현하는 코드이다.<br/>

- `useSelector`는 Redux store에서 상태를 읽어오며, 선택하는데 사용

![image](https://github.com/JJamVa/JJamVa/assets/80045006/77d4f543-ca4c-46be-9ab2-2c3e0605718b)

`console.log(useSelector((state) => state))`를 했을 때, 출력 결과물이다.<br/>
즉, useSelector는 Redux store에 있는 전체 상태 객체에서 원하는 데이터를 선택한다.<br/>

```jsx
const { count } = useSelector((state) => state.counterReducer);
const { visible } = useSelector((state) => state.visibleReducer);
```

위의 코드는 각 Redux store 안에 있는 Reducer들의 state값을 구조분해 할당으로 가져온 것이다.<br/>
상태가 변할때 마다 랜더링이 되어 각 state값을 새로 할당한다.<br/>

---

- `useDispatch`는 action을 Conponent 내부에서 발생시키고, Redux store에 action의 type 및 추가 데이터를 전달

```jsx
const dispatch = useDispatch();

const increase1 = () => {
  dispatch({ type: "increase" });
};
const increase5 = () => {
  dispatch({ type: "increase5", payload: 5 });
};
const decrease = () => {
  dispatch({ type: "decrease" });
};
const isVisible = () => {
  dispatch({ type: "on/off" });
};

return (
  <div>
    {visible && <p>{count}</p>}
    <button onClick={increase1}>1씩 증가</button>
    <button onClick={increase5}>5씩 증가</button>
    <button onClick={decrease}>-1씩 감소</button>
    <button onClick={isVisible}>숫자 {visible ? "가리기" : "켜기"}</button>
  </div>
);
```

위 코드에서 dispatch라는 변수에 `useDispatch()`함수를 정의한다.<br/>
각 버튼의 onClick 이벤트 핸들러를 함수를 추가한다.<br/>
만약 "1씩 증가"라는 버튼을 눌렀을 경우, `dispatch({type: "increase"})`가 실행된다.<br/>
그럼, store.js의 counterReducer함수에게 action 객체 정보가 전달이 된다.<br/>
이후 counterReducer함수에서 state상태가 업데이트 및 store에 저장이 되며 렌더링이 발생하여 값이 변경된다.<br/>

:::