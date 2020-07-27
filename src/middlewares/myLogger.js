const myLogger = (store) => (next) => (action) => {
  //store, next, action은 함수의 함수의 함수이지 매개변수가 아니다.
  console.log("미들웨어 로그", action);
  console.log("\t이전: ", store.getState());
  const result = next(action); //액션을 다음 미들웨어나 리듀서에게 전달하는 코드
  console.log("\t다음: ", store.getState());
  return result; //여기서 반환하는 result는 container에서 dispatch되었을 때의 결과물이 미들웨어에서 반환하는 값
};

export default myLogger;

/*
개발하면서 직접 만들어 쓸 경우는 거의 없다.
이해를 위해서 작성.
redux thunk는...
액션이 객체가 아니라 함수 타입으로 받아오게 만들어서 받아오면 호출하도록 하는 설정도 미들웨어에서 가능하다.
dispatch, getState 파라미터를 받아서 미들웨어 단에서 dispatch를 할 수도 있음. 
redux-thunk는 간단한 코드이지만 엄청난 라이브러리이다.

thunk
1.	(둔탁한 소리를) 내다.
2.	푹
3.	탁
*/
