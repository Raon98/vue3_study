# vue3_Life Cycle

### beforeCreate
```
- 컴포넌트 생성전에 호출
- 생성한 DATA, 관찰할 수 있는 WATCH함수등 동작 X
```

### create
```
- 컴포넌트 생성되면 호출
- 컴포지션API의 setup 함수가 beforeCreate와 함께 create 대체
- 컴포넌트 옵션에 접근이 가능하기 때문에 
   data 옵션에 선언한 데이터들을 초기화 할떄 많이 사용
```

### beforeMount (onBeforeMount)
```
- Vue의 가상 노드가 render 함수를 호출하기 직전에 호출
 즉, 실제 DOM을 구성하기 직전에 호출
-이 사이클이 지나고나면 Vue는 Vurtual DOM에 가상으로 Rendering할 DOM을 미리 구성
- 이 과정은 onRenderTracked라는 생명주기 훅을 통해 관찰가능
```

### mounted (onMounted)
```
- 실제로 컴포넌트의 구성요소들이 DOM 엘리먼트로 마운트된 후 호출 
  [이 순간부터 실제 엘리먼트 참조]
  = ref와 같은 함수를 통해 엘리먼트의 참조변수를 만들었다면 mounted 사이클 이전까지는 초기화한 값으로만 들어있고,
    실제 엘리먼트를 참조 할 수 없던 반면, 해당 변수를 통해 엘리먼트에 접근할 수 있게 되는 것
- 실제 엘리먼트에 동적으로 변화를 줘야 할 경우 처리하면 용이
  = Virtual DOM이 실제 DOM에 반영이 되었음을 의미
  = 따라서 onRenderTriggered 라는 생명주기 훅이 이후 호출  
```

### beforeUpdate (onBeforeUpdate)
```
- 데이터는 변경되었지만 아직 DOM에 반영되지 않았을 떄 호출
 = Virtual DOM이 수정되고 이 수정사항이 DOM에 반영되기 직전 호출
 = 아직 변경사항이 DOM에 반영되지 않았으므로,
   실제 엘리먼트를 참조하는 변수로부터 아무것도 얻지못함
```

### update (onUpdated)
```
- 데이터가 변경도어 DOM이 변경완료된 시점에 호출
- DOM에 참조된 변수를 이용해 다양한 역할을 수행할 수 있다.
  * 주의할점
  - 해당 엘리먼트의 자식 노드들이 업데이트가 완료되었다고 보장X
  즉, 현재 컴포넌트만 수정이 되었으면 보장
  따라서 자식 컴포넌트까지 모두 수정된 것을 기다리기 위해서는 nextTick을 이용해 모든 자식의 업데이트가 완료됨을 기다려야함
      updated(){
       this.$nextTick(f() {
        //모든 자식이 업데이트 되었다.
        })
       }
```

### beforeUnmounted (onBeforeUnmounted)
```
- 컴포넌트가 탈착되기 직전에 호출
- 아직 모든기능을 사용할 수 있는 상태
```

### unmounted (onUnmounted)
```
- 컴포넌트가 탈착되고 나서 호출
- 이 순간부터 모든 디렉티브와 이벤트가 사용불가
```

### activated (onActivated)
```
- keep-alive 태그는 컴포넌트가 다시 렌더링되는 것을 방지하고, 상태를 유지하기 위해 쓰임
- 일반적으로 v-is함수와 사용, v-is디렉티브가 컴포넌트를 변경할 떄 기존 컴포넌트의 상태가 사라지지 않게 하기위해 사용
- 이러한 keep-alive 태그로 컴포넌트의 상태가 보존되기 시작하면
  onActivated 생명주기 훅 함수가 호출
     <keep-alive>
        <component v-is="currentComponent" />
     </keep-alive>
```

### deactivated (onDeactivated)
```
- keep-alive로 상태가 유지되던 컴포넌트가 효력을 상실하면 호출
- 소스코드를 수정한 후 저장하면 Vited의 HMR이 해당 컴포넌트를 다시 랜더링하게 되는데, 이 떄 keep-ailve로 activated된 컴포넌트에 deactivated가 호출됨을 확인 가능
```

### renderTracked (onRenderTracked)
```
- Virtual DOM이 변경될 떄마다 관찰을 목적으로 해당 생명주기 훅 호출
   #DebuggerEvent 객체를 살펴보면 어떠한 이유로 
    Virtual DOM이 변경이 되는지 알 수 있다.
        renderTracked(e) {
          console.log(e.target)
        }
```

### renderTriggered (onRenderTriggered)
```
- Virtual DOM이 DOM으로 반영되어야 할 떄 호출
 따라서, onMounted, onActivated, onUpdated와 같이 실제 DOM이 변경되기 직전에 호출됨을 알 수 있다.
- 위와 동일하게 DebuggerEvent를 이용
 Ex) 새로운 값이 추가되어 랜더링이 다시 시작되어야 한다면,
     DebuggerEvent를의 Type속성에는 'add', newValue속성에
     변화를 일으킨 새로운 값 확인가능
```

### errorCaptured (onErrorCaptured)
```
- 자손 컴포넌트에서 에러가 발생하면 어느 컴포넌트에서 어떤 에러가
  발생했는지 알려준다.
```


