# vue3 Basic Memo

### v-html 디렉티브를 이용한 HTML 표현
```
- v-html 디렉티브는 HTML 엘리먼트의 innerHTML 값에 변수값을 전달해 HTML 마크업 언어로 표현
- 변수는 반드시 HTML 평문이어야 하며, VUE의 문법을 사용해도 컴파일 되지않는다.
    <div v-html="<i>HTML TEXT</i>"><div>
```

### v-pre 디렉티브를 이용한 컴파일 무시
```
- v-pre 디렉티브를 이용하면 해당 엘리먼트를 포함한 모든 자식 엘리먼트들의 값을 컴파일 하지않는다.
 즉, 수염표기법으로 변수를 포기 하더라도 있는 그래도 출력이 된다.
     <div>{{msg}}</div> = msg = HELLO
     <div v-pre>{{msg}}</div> = msg = {{msg}}그대로 표현
```

### 데이터 결합을 통한 사용자 입력 처리
```
 [참조] declarativeRendering.Vue
 
- 탭플릿 내에서 v-bind 디렉티브 혹은 v-model 디렉티브를 이용할 경우 컴포넌트에서 선언한 변수와 HTML 태그 속성을 결합할 수 있다.
    v-bind:HTML속성 = "변수명" === :HTML속성="변수명" (콜론대체가능)
    => v-bind:title="title_value" , :title="title_value"
 * v-bind 디렉티브 : 단방향 결합 지원
   v-model 디렉티브 : 양방향 결합 지원
 #단방향 결합 : 변수의 값이 템플릿으로만 결합되어 템플릿의 HTML 태그가 변경한 값이 변수에 돌아오지 않는다는 뜻
 #양방향 결합 : 변수의 변경이 템플릿의 DOM에 영향을 미치는것 + 템플릿에서의 변경이 변수의 값을 변경
```

### v-model 디렉티브 수식어
```
 - v-model 디렉티브로 연결되는 변수명은 컴포넌트의 props에 정의하면 되는데, 변수명 뒤에 Modifiers라는 글자를 붙여
   props에 추가적으로 선언하면 사용자 수식어를 받아올 수 있다.
    props : [ "a" , "aModifiers" ]
```

### 이벤트 리스너를 이용한 사용자 입력 처리
```
 [참조] eventListenerEx
 - v-on 디렉티브는 HTML 태그뿐만 아니라 사용자가 만든 컴포넌트에서 발생된 이벤트를 캡쳐할 떄도 사용
   click = @click="스크립트 코드, 혹은 함수 호출"
   
 <이벤트 수식어>
 .stop : 이벤트 전파를 방지 ::stopPropagation()과 동일
 .prevent : 브라우저의 기본 동작을 금지한다. ::preventDefault()와 동일
 .capture : 이벤트리스너의 capture 옵션을 활성화시킨다.
 .self : 이벤트가 자식 엘리먼트가 아닌 현재 엘리먼트에서 발생했을 떄만 핸들러를 호출
 .once : 최대 한번의 클릭만 허용한다.
       ::once.prevent와 같이 사용하면 처음 클릭 시 태그의 본연 기능을 방지하고 원하는 기능을 수행할 수 있다.
 .passive : 이벤트리스너의 passive 옵션을 활성화 시킨다.
 .exact : 정확히 해당 키만 눌렸을 떄 핸들러를 호출한다.
 .left : 마우스 왼쪽 버튼이 눌렀을 떄 핸들러를 호출한다.
 .right : 마우스의 오른쪽 버튼이 눌렀을 때 핸들러를 호출한다.
 .middle : 마우스의 가운데 버튼이 눌렀을 떄 핸들러를 호출한다.
```