# vue3 Basic Memo

### v-html 디렉티브를 이용한 HTML 표현
```vue
- v-html 디렉티브는 HTML 엘리먼트의 innerHTML 값에 변수값을 전달해 HTML 마크업 언어로 표현
- 변수는 반드시 HTML 평문이어야 하며, VUE의 문법을 사용해도 컴파일 되지않는다.
    <div v-html="<i>HTML TEXT</i>"></div>
```

### v-pre 디렉티브를 이용한 컴파일 무시
```vue
- v-pre 디렉티브를 이용하면 해당 엘리먼트를 포함한 모든 자식 엘리먼트들의 값을 컴파일 하지않는다.
 즉, 수염표기법으로 변수를 포기 하더라도 있는 그래도 출력이 된다.
    <div>{{msg}}</div> = msg = HELLO
    <div v-pre>{{msg}}</div> = msg = {{msg}}그대로 표현
```

### 데이터 결합을 통한 사용자 입력 처리
```vue
 [참조] declarativeRendering.Vue
 
- 탭플릿 내에서 v-bind 디렉티브 혹은 v-model 디렉티브를 이용할 경우 컴포넌트에서 선언한 변수와 HTML 태그 속성을 결합할 수 있다.
    v-bind:HTML속성 = "변수명" === :HTML속성="변수명" (콜론대체가능)
    ⇒ v-bind:title="title_value" , :title="title_value"
 * v-bind 디렉티브 : 단방향 결합 지원
   v-model 디렉티브 : 양방향 결합 지원
 #단방향 결합 : 변수의 값이 템플릿으로만 결합되어 템플릿의 HTML 태그가 변경한 값이 변수에 돌아오지 않는다는 뜻
 #양방향 결합 : 변수의 변경이 템플릿의 DOM에 영향을 미치는것 + 템플릿에서의 변경이 변수의 값을 변경
```

### v-model 디렉티브 수식어
```vue
 - v-model 디렉티브로 연결되는 변수명은 컴포넌트의 props에 정의하면 되는데, 변수명 뒤에 Modifiers라는 글자를 붙여
   props에 추가적으로 선언하면 사용자 수식어를 받아올 수 있다.
    props : [ "a" , "aModifiers" ]
```

### 이벤트 리스너를 이용한 사용자 입력 처리
```vue
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

<이벤트수식어>
 - 버튼이 활성화되어 있을 떄 키보드의 Enter key를 누르면 해당 버튼이 클릭된 것과 같은 효과를 보인다.
 - 일반적으로 keyup 이벤트에 대해 수식어를 불여 키보드 입력을 수정한다.
     <input @keyup.enter.prevent/>
```

### 템플릿 내 조건문 (v-if)
```vue
  [참조] v-ifEx
 - v-if 디렉티브를 사용한 조건문은 일반적인 스크립트 문법을 따른다.
    <div v-if="cnt > 0"/>
    <div v-if="text === 'text"/>
 - v-if-else
    <div v-if="cnt > 0"/>
    <div v-else-if="cnt === 2"/>
    <div v-else/>
 
  # 템플릿의 역할
   - HTML로 구성된 부분으로 컴포넌트에서 생성된 데이터를 선언적으로 DOM과 결합시켜주는 역할
   - 템플릿은 Vue가 컴파일을 할 떄 가상 DOM 렌더함수(Vue.h)로 변경
   - 가상 DOM 렌더함수를 쓰는 이유 : 실제 DOM의 변경을 최소화 하기 위해서

  # v-if: 1. 조건이 변경되면 조건 내 DOM 엘리먼트를 처음부터 다시 그리지만 
          2. 빠르게 애플리케이션의 그림을 그려주지만 조건이 변경될 떄마다 다시 해당엘리먼트를 그려야 함
  # v-show : 1. 모든 조건의 DOM 엘리먼트를 그린 후 조건에 맞지 않는 엘리먼트는 hide 처리한다.
             2. 처음에는 조금 늦게 그릴지 몰라도 조건이 자주 변경될 떄는 매우 빠른 전환이 이뤄진다.

  ##따라서 .. 자주 안바뀔경우 v-if 자주 바뀌경우 v-show가 유리
```

### 템플릿 내 반복문 (v-for)
```vue
    <div v-for="item in itemList"/>
    <div v-for="(item,i) in itemList" :key="i"/>
 - v-for 디렉티브가 쓰여진 엘리먼트와 그 자식 노드들은 반복문이 도는 횟수만큼 생성한다.
 - 생성된 각 엘리먼트는 각 순회단계에서 나온 값을 반게 된다.
 - v-for 함수를 사용할 떄는 언제나 key 속성을 같이 사용하는것이 좋다.
   => 템플릿이 가상 DOM 렌더 함수로 변활될 때 같은 태그를 재활용 하기 떄문
   => Vue의 가상노드는 <input/>태그와 변수를 짝지울수 없다. 따라서, :key라는 속성을 각자 이름을 가지게 해야된다.
```

### Computed 속성
```vue 
[참조]computedEx
 - 계산된 속성 (Computed Properties)은 반응형 애플리케이션을 구현하는 데 가장 큰역할
 - Vue의 계산된 속성은 내부 반응성 변수의 값이 변하지 않는다면 그 결과를 캐시에서 바로 꺼내서 사용
  => 단순히 캐시에서 꺼내는 것이 아니라 DOM 업데이트 자체를 진행하지 않는다.
 #반면 함수는 호출되면 반드시 새롭게 계싼을 진행하고 DOM을 업데이트한다.
```

### Watch와 WatchEffect
```Vue
[참조] watchEx
- 데이터 변화를 가밎하여 사용자가 지정한 콜백함수를 호출할 수 있게 해주는 기능

 #WATCH
  - 개발자가 코드로 지정한 변수값의 변화를 감시하여 콜백함수로 하여금 부가적인 작업을 할 수 있게 해준다.
  - 특정한 변수의 감시와 더불어 값이 변경되기 이전 값을 참조할 수 있다는 강력한 장점이 존재한다.
  - 컴포넌트가 생성되어 초기화하는 과정에 WATCH는 이 과정을 데이터 변경으로 판단하지 않는다.
   * Immediate Option : 컴포넌트를 다시 불러올 떄 props의 처음 값을 볼 수 있게 한다. 
   * Deep Option : 감시대상이 객체나 리스트일시 용이 
                  => 객체나 배열의 변수가 참조하고 있는 메모리가 다시 중첩된 객체나 리스트의 요소의 메모리를 가리키고 있다.
                    즉, 값이 변경이 되어도 메모리가 변경되는 것이 아니기 떄문에, watch로 데이터변경을 알 수 없다.
                    => 강제로 객체나 리스트의 내용까지 감시하게 하기 위해선 Deep Option 사용
  
 #WATCHEFFECT
  - watchEffect는 기본적으로 초기 대입값부터 모두 감시                  
  - 어떤 값이 변경되었는지 알려주지않는다 => 과거 값도 모름
  - 불필요한 변수를 모두 감시하지않기위해 모든 변수의 대입값을 감시한 후에는 콜백함수에서 참조되는 함수만 감시한다.
  - 생성 시 반환함수를 받아 감시의 중단을 위해 활용할 수 있다. [참조] stop() 
  * Flush Option : default = pre 
                   pre : DOM이 업데이트하기 전에 콜백함수를 호출
                   post : DOM이 없데이트된 후 콜백함수를 호출                 
```

###컴포너트 생성
```vue
 - 컴포넌트 시스템은 Vue의 매우 중요한 요소 중 하나로, 하나의 커다란 애플리케이션을 작은 요소로 분해해 은닉하고 재사용성을 가지게 해준다.
  import { createAPP } from 'vue'
  const app = createApp({/* 인스턴스 옵션들 */})

  #component : 컴포넌트의 이름과 함수 혹은 객체로 이루어진 컴포넌트 정의를 인자로 받아 컴포넌트 생성
  #config : 애플리케이션의 전역설정을 담당하는 객체로 mount 메서드가 불리기 전에 설정해야 된다.
           1. errorHandler : 컴포넌트를 그리거나 감시할 때 에러가 발생하면 호출
           2. warnHandler : Vue 에서 경고를 발생할 때 호출
           3. globalProperties : 키와 값을 설정
           4. isCustomElement : 특정한 조건을 설정하여 Vue에서 생성되지 않은 컴포넌트를 명시
           5. optionMergeStrategies : 사용자 정의 속성이 있고, 부모 컴포넌트와 자식 컴포넌트가 해당 속성을 정의 했을 때 두 값을 어떻게 처리할 지 함수로 정의
           6. performance : devtool의 performance/timeline 패널에 성늘 관련 정보를 추적할 수 있게 해준다.
  #directive : 전역 사용자 디렉티브를 설정
  #mixin : 전역에서 사용할 수 있는 mixin을 설정
  #mount : 최상위 컴포넌트를 특정 DOM 엘리먼트에 장착
  #provide : 모든 자식 컴포넌트가 inject할 수 있는 값을 provide
  #unmount : 특정 DOM 엘리먼트 내 애플리케이션 인스턴스를 탈착
  #use : Vue 플러그인 객체를 사용할 수 있게 한다.

  * provide와 inject 개념
    provide는 제공 inject 주입
    기존 props는 부모에서 손자 component로 데이터를 전송할 시 여러번의 props의 사용이 필요하지만 이를 간단하게 하기위해
    provide를 설정해두고 각 필요한 자손component에서 inject하여 데이터 사용

 #Props
 - 컴포넌트에 데이터를 넘겨줄 수 있는 사용자 지정 속성
   props: ["name", "age" ]
       *props 상세속성 
        #type : 데이터 타입 정의
        #default : 해당 Props가 들어오지 않을 경우 사용할 기본값을 갖는다. 
                  *들어오는값이 Object일 경우 반드시 팩토리 함수를 이용해 값을 반환해야함
        #required : true로 설정시 props값이 안들어오면 콘솔 경고창 표시
        #validator : 잘못 들어온 인자를 개발자 코드로 직접 검사해 콘솔창에 경고를 낼 수 있다.
    <my-component tilte="Component 1" :data="[1,2,3]"></my-component> 
```