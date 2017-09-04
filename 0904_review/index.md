# JS STUDY REVIEW
> [산출물](https://hizikim.github.io/study/)

## 01 : Javascript / jQuery 선택자
### # Practice
```javascript
// 서로 매칭되는 선택자

// id
$('#id');
document.getElementById('id');
document.querySelector('#id');

// tag
$('button');
document.getElementsByTagName('button');
document.querySelectorAll('button');

// class
$('.class');
document.getElementsByClassName('class');
document.querySelectorAll('.class');
```

### # Point
- DOM에 접근하는 방식에 따라 반환 객체가 다름
    - ```$('p')``` -> jQuery.fn.init
    - ```document.querySelectorAll('p')``` -> HTMLCollection
    - ```document.getElementsByTagName('p')``` -> NodeList
    > 참고 링크  
<http://www.nextree.co.kr/p9747/>
<http://poiemaweb.com/js-dom>
<https://stackoverflow.com/questions/15627385/what-is-the-difference-between-a-htmlcollection-and-a-nodelist-in-dom>

2. IE8+ 지원
    - ```getElementsByClassName('selector')```
    - ```querySelector('selector')```
    - ```querySelectorAll('selectors')```

---

## 02 : Prototype
### # Practice
1. 프로토타입 객체
    - 자신이 다른 객체의 원형이 되는 객체

2. 프로토타입 체인
    - 특정 객체의 프로퍼티나 메소드에 접근하려고 할 때, 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 [[Prototype]] 프로퍼티가 가리키는 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색

3. 기본 내장 프로토타입
    - Object.prototype
    - Array.prototype
    - String.prototype

### # Point
- 프로토타입을 왜 사용할까?
    - 생성자 함수등으로 새로운 인스턴스를 생성해도 같은 프로토타입을 참조하고 있기 때문에 고유 속성을 상속받아서 사용할 수 있음

    > 참고 링크  
    <http://www.nextree.co.kr/p7323/>
    <http://poiemaweb.com/js-prototype>

---

## 03 : 조건문
### # Practice
- 현재 인덱스를 저장하는 변수 활용
    - 현재 인덱스 초기화
    - 버튼을 누를 때마다 인덱스 값 1씩 증가/감소

### # Point
- 인덱스 값의 범위 제한
    - 인덱스 값이 리스트의 개수보다 크거나 작지 않도록 조건문 추가
    - if문 대신 Math함수로 대체 가능
        ```javascript 
        curIndex1 = Math.min(curIndex1 + 1, list1.length);
        /*
        if (curIndex1 > list1.length) {
            curIndex1 = list1.length;
        }
        */

        curIndex2 = Math.max(curIndex2 - 1, 0);
        /*
        if (curIndex2 < 0) {
            curIndex2 = 0;
        } */
        ```

---

## 04 : 반복문
### # Practice
- 일반적인 반복문에는 for를 사용하고 while은 종료시점이 명확하지 않을 때 사용
- DOM에 접근하는 횟수를 최대한 줄일 것
    - 반복문이 돌 때마다 접근하면 성능이 떨어지는 이슈
    - 배열에 코드를 넣고 한꺼번에 배열의 값을 빼는 방식으로 코드 출력

```javascript
var exWrap1 = $('.exam_q').eq(0),
    exArr1 = [],
    exCount1 = 0;

while (exCount1 < 5){
    exArr1.push('<div><input type="text" value="'+(exCount1+1)+'"></div>');
    exCount1++;
}

exWrap1.get(0).innerHTML = exArr1.join('');
```

### # Point
- `jquerySelector.get(0);` 
    - = `jquerySelector[0];`
    - jQurey 선택자를 DOM의 요소노드로 변경
    - innerHTML와 함께 쓰기 위해 사용

---

## 05 : 객체, this 바인딩
### # Practice
- 객체 생성 방법
    ```javascript
    // 객체 리터럴
    var obj1 = {};
    obj1.name = 'Heejin';

    // Object() 생성자 함수
    var obj2 = new Object();
    obj2.name = 'Heejin';

    // 생성자 함수
    function F() {}
    var obj3 = new F();
    obj3.name = 'Heejin';
    ```
- 인스턴스 생성
    - 함수 정의 후 `new` 연산자로 인스턴스 생성
    - 각 인스턴스는 동일한 메소드, 변수를 소유
- this의 사용
    - 객체A 내에서의 this
        - Window
    - 객체A 내 메서드a에서의 this
         객체 A
    - 객체A 내 메서드a에서 같은 객체에 있는 메서드b를 호출하려면 
        - `this.b();` 

---

## 06 : 배열
### # Practice
1. 객체를 활용하는 연습
    - 객체 생성 후 기능별로 메서드 분리
        - 초기화 (init)
        - 요소 지정 (setElements)
        - 요소-이벤트 바인딩 (bindEvents)
        - 클릭 이벤트가 실행되면 일어나는 동작 (onClickFunc)
        - 브라우저에 보여지는 동작 (viewFunc)
            - answerCode의 리턴값을 DOM에 출력
    - 문제별로 인스턴스 생성 (exam1 ~ 8)
    - 각 인스턴스별 풀이 과정/답안을 answercode 메서드의 리턴값으로 지정
2. 주요 사용 메소드 (참고: [배열 프로토타입](https://hizikim.github.io/study/0717_prototype/index.html#array))
    - Array.slice() : 배열 복사
    - Array.reverse() : 배열 반전
    - Array.join() : 배열 요소를 연결해 문자열로 변환
    - Array.sort(function (a, b){return b - a}) : 오름차순으로 정렬
    - Math.random() : 0 ~ 1 사이의 난수 생성
    - Math.floor() : 소수점 내린 정수 반환
3. 8번 문제 2가지 풀이
    - 하나의 배열로 앞 요소와 비교해서 중복 거르기
        ```javascript
        // 먼저 하나 뽑고 다음 번이 중복이면 다시 반복문 실행
        var arr = [];
        for (var i = 0, imax = 6; i < imax; i++) {
            arr[i] = Math.floor(Math.random() * 6);
            for (var j = 0; j < i; j++) {
                if (arr[i] == arr[j]) {
                    i--;
                    break;
                }
            }
        }
        ```
    - 두 개의 배열로 랜덤 인덱스 활용
        ```javascript
        var arr = [],
            arr2 = [];
        for (var i = 0, imax = 6; i < imax; i++) {
            arr[i] = i;
        }
        // 원본 배열(arr)에서 선택한 인덱스가 랜덤으로 빠지고, 다음 반복문에서는 이전에 빠진 요소를 제외하고 랜덤 실행
        for (var i = 0 ; i < 6; i++) {
            var randIdx = Math.floor( Math.random() * arr.length );
            arr2[i] = arr.splice(randIdx,1)[0];
        }
        return '[' + arr2 + ']';
        ```

### # Point
1. `if( 0 === this.arr.length )`은 `if( !this.arr.length )`로 쓸 것
2. `$.map(obj, function(val, key){return val});`
    - obj 객체의 키값(val)를 요소로 갖는 배열을 생성
    - 참고 : [jQuery API](https://goo.gl/UpnfRN)

---

## 07 : [실습] LINE PLAY
### # Practice
- 어떤 과정이 필요한지
    - 클릭 전 (init)
        - 요소 지정
        - 요소-이벤트 바인딩
        - 초기화면 설정
            - 하나의 li만 보이고 나머지 다 숨김
            - 그 하나의 li도 랜덤으로 할당해야 함
    - 버튼을 클릭할 때 마다 실행되는 것들 (onClickFunc)
        - 이전 li는 없어지고 새로운 li가 보여져야 함
        - 이전/새로운 li를 구분하기 위해서는 해당 인덱스를 변수에 저장해야 함
- 랜덤 인덱스와 li의 인덱스를 매칭
    ```javascript
    initArray : function() {
        this.numArr = [];
        for (var i = 0; i < this.itemLength; i++) {
            this.numArr.push(i);
        }
    },
    randomPop : function() {
        var randNum = Math.floor(Math.random() * this.numArr.length);
        this.resultIdx = this.numArr.splice(randNum, 1)[0];
        this.selectIdx = this.resultIdx;
        this.selectItem = this.examItem.eq(this.selectIdx);
        this.viewFunc();
    }

### # Point
1. 현재 인덱스와 이전 인덱스를 활용
    - 3번 경우를 대비하여 인덱스를 구분
    - 랜덤 인덱스(`resultIdx`)가 이전 인덱스가 되고, 다음 클릭이 발생하기 전에 현재 인덱스(`selectIdx`)에 값 할당
    - 보여지는 li(`selectItem`)는 랜덤번째(`selectIdx`) li
2. 더 이상 slice할 요소가 없을 때 `numArr` 초기화 
    ```javascript
    if (!numArr.length)
        this.initArray();
    ```
3. 랜덤 순서가 한바퀴 다 돌았을 때 다음 요소 중복 검사
    ```javascript
    if(this.resultIdx === this.selectIdx){
        var randNum2 = Math.floor(Math.random() * this.numArr.length);
        this.resultIdx = this.numArr.splice(randNum2, 1, this.resultIdx)[0];
    }
    ```
---

## 08 : [실습] 폴라베어 프로모션  
### # Practice
```javascript
    // 예외경우 정의. 해당 경우가 아니면 true값을 반환
    checkEvents : function(){
        if(this.selectIdx === -1){
            alert('곰을 선택해주세요.');
            return false;
        }
        if(!this.isJoined){
            alert('이미 참여하셨습니다.');
            return false;
        }
        return true;
    },
```
```javascript
    // 라디오버튼의 개수만큼 이벤트 바인딩
    // on 메서드의 data 파라미터로 해당 인덱스를 받아옴
    bindEvents : function(){
        for (var i = 0; i < this.radioBtn.length; i++)
            this.radioBtn.eq(i).on('change', i ,$.proxy(this.onSelectFunc, this));
    },
    onSelectFunc : function(e){
        this.selectIdx = e.data;
    }
```

### # Point
1. form 요소의 prop을 체크할 때는 `change` 이벤트로 바인딩
2. 변수의 값에 따라 실행 여부 체크
    - selectIdx
        - 실행 전 : -1
        - 실행 후 : 선택된 라디오버튼의 인덱스
        - 값이 바뀌는 때 : 라디오버튼의 prop이 변경되었을 때
    - isJoined
        - 실행 전 : true
        - 실행 후 : false
        - 값이 바뀌는 때 : 버튼을 클릭했는데 예외경우가 아닐 때  
        (`checkEvents()`의 값이 `true`일 때)
3. animate() 사용시 유의할 점
    - stop()을 사용하여 해당 모션이 실행될 때 이전 모션은 중지되도록 해야함  
    `$('html, body').stop().animate({scrollTop : '400'}, 400);`

---

## 09 : [실습] 레이어 팝업
### # Practice
1. 레이어 내에서 포커스를 제어해서 접근성을 준수하도록 만듦
    - 레이어 객체 앞뒤로 포커스를 넘기는 더미 태그를 생성
    - 포커스 작동 순서 (정방향)
        - 레이어  
        -> 레이어 내 요소들  
        -> 레이어 내 마지막 요소  
        -> 뒤쪽 더미 태그 (->) 레이어  
        -> (반복)
    - 포커스 작동 순서 (역방향)
        - 레이어  
        -> 앞쪽 더미 태그 (->) 레이어 내 마지막 요소  
        -> 레이어 내 요소들  
        -> 레이어  
        -> (반복)
2. 레이어 이외의 영역을 클릭하면 레이어 닫힘
    - jquery.ba-outside-events.min.js 활용
        - this.layerContent.on(`'clickoutside'`, $.proxy(this.onLayerCloseFunc, this);
        - 실행 시 약간의 딜레이 추가해야 함  
        (`setTimeout($.proxy(this.onOutsideFunc, this), 1)`)
    - 또는 조건문 추가

### # Point
1. 이벤트 프로퍼티
    - `event.target`
        - 이벤트를 발생시킨 요소
    - `event.currentTarget`
        - 이벤트 리스너에 바인딩된 요소
        - 이벤트 핸들러 함수 내의 **this**와 동일 ($.proxy(this.onOutsideFunc, **this**)
2. 포커스가 잡히게 하기 위해서 button/a가 아닌 영역에 `tabindex` 속성 추가
3. 레이어가 닫히면 outside 이벤트 해제하기  
`this.layerContent.off('clickoutside');`

---

## 10 : [실습] Tab / Slide
### # Practice
1. 컨벤션을 적용하는 연습
    - Window에 객체를 생성
        - 선언 시 변경될 만한 옵션 등을 정의하고 merge
    - 생성한 객체의 프로토타입에 객체의 기능에 해당하는 구문 선언
    - 실행 시 `new` 연산자로 객체의 인스턴스를 생성하여 해당 프로토타입을 상속(재사용)함
2. 현재 인덱스와 이전 인덱스를 활용하여 각 요소의 인덱스를 매칭
3. `changeMotion`의 값에 따라 화면 전환 효과 변경
    ```javascript
    // 기본 : show / hide
    win.castBox = new win.projectName.tabFunc('.cast_box');
    // fade : fadeIn / fadeOut
    win.slideBox = new win.projectName.tabFunc('.slide_box', {changeMotion: 'fade'});
    ```

### # Point
1. 이벤트 메서드
    - `Event.preventDefault()`
        - 이벤트의 기본 동작을 취소함.  
        - a 태그의 경우 클릭하면 위로 튀는 현상이 있는데 그런 경우를 막아줌
2. finish() vs stop()
    - finish()
        - 바로 종료되지 않고 마지막을 적용한 후 종료
        - 애니메이션을 skip 할 때 사용
    - stop()
        - 진행 상황 그 상태에서 바로 종료
        - 애니메이션 중복 실행 방지할 때 사용
3. 얕은 복사 vs 깊은 복사
    - $.extend({}, defParams, (args || {}));
    - UTIL.def(defParams, (args || {}));
---

## 11 : [실습] checkbox / radio / select 
### # Practice
1. 플러그인을 만드는 연습
    - 동일한 기능을 하는 요소는 플러그인으로 만들어 재사용함 
    - 해당 플러그인이 선언된 횟수만큼 객체의 인스턴스 생성
2. 클래스 추가/삭제 기준
    - checkbox/radio : checked 여부에 따라 부모영역에 클래스 추가/삭제
    - select : 클래스가 추가되면 플래그 변수값을 변경하여 체크 

3. 주요 사용 메서드
    - [filter()](http://api.jquery.com/filter/)
        ```javascript
        $('input').filter(':checked');
        ```
    - [prop()](http://api.jquery.com/prop/)
        ```javascript
        $('input').prop('checked');
        ```
    - [toggleClass()](http://api.jquery.com/toggleclass/)
        ```javascript
        $('selector').toggleClass(className, addState);
        ```
    - [closest()](http://api.jquery.com/closest/)
        ```javascript
        $('selector').closest(element);
        ```

### # Point
1. prop() vs attr()
    ```javascript
    console.log($('input').attr('checked')); // checked
    console.log($('input').prop('checked')); // true
    ```
    - .attr()
        - **HTML의 속성**을 취급
        - 태그속성의 값을 변경하고자 할 때 사용
        - HTML의 속성값이 모두 String 으로 넘어옴

    - .prop()
        - **JavaScript 프로퍼티**를 취급
        - 태그속성에 따라서 기능이 제어되는 속성에 사용
        - boolean, date, function 등도 가져올 수 있음

---

## 12 : [실습] Sort table
### # Practice
```javascript
sortDatas : function (arg) {
    var dataMap = this.dataRows.map(function () {
        var data = $('td', this),
            dataObj = {
                num : data.eq(0).text(),
                title : data.eq(1).text(),
                name : data.eq(2).text()
            };
        return dataObj[arg];
    });
    this.dataArray = $.makeArray(dataMap),
    this.sortArray = this.dataArray.slice(0).sort(function (a, b) {return a > b ? true : false});
},
bindEvents : function () {
    this.sortNumBtn.on('click', $.proxy(this.onSortNumFunc, this));
    this.sortTitleBtn.on('click', $.proxy(this.onSortTitleFunc, this));
    this.sortNameBtn.on('click', $.proxy(this.onSortNameFunc, this));
},
onSortNumFunc : function () {
    this.sortDatas('num');
    this.changeView();
},
onSortTitleFunc : function () {
    this.sortDatas('title');
    this.changeView();
},
onSortNameFunc : function () {
    this.sortDatas('name');
    this.changeView();
}
```
1. 데이터 분류에 따라 사용할 수 있는 메서드(`sortDatas`) 생성
    - `map()` 메서드 사용
        - 각 분류를 키로 갖고 있는 객체를 생성 (dataObj). 
        - 반환되는 값은 dataObj 객체의 키 값(분류). 반환 값은 배열의 형태로 `dataMap`에 저장되지만 타입은 Object임.
     - `dataMap` 객체를 sort하기 위해 배열 타입으로 변환 (`dataArray`)
    - 복사한 배열을 오름차순으로 정렬
2. 각 분류별 버튼을 클릭하면 각각의 인자값을 전달하며 `sortDatas`메서드 실행

### # Point
- 요소를 제거하지 않고 순서만 변경하도록 할 것
    - 원본 배열과 정렬된 배열의 요소를 비교해서, 요소가 같아질 때 인덱스를 인덱스배열에 차례대로 저장
    - 인덱스배열을 활용하여 tr의 순서를 변경

---

## 13 : [실습] Sticky / Top button  
### # Practice
1. `scroll` 이벤트 타입 활용
    ```javascript
    getCoordinates : function () {
        this.objOffsetTop = this.obj.offset().top;
    },
    bindEvents : function () { 
        $(win).on('scroll', $.proxy(this.onScrollFunc, this));
    },
    onScrollFunc : function () {
        var winTopCoords = $(win).scrollTop();
        if (winTopCoords >= this.objOffsetTop) {
            if (!this.obj.hasClass(this.opts.activeClass)) {
                this.obj.addClass(this.opts.activeClass);
            }
        } else {
            if (this.obj.hasClass(this.opts.activeClass)) {
                this.obj.removeClass(this.opts.activeClass);
            }
        }
    }
    ```
2. 주요 사용 메서드
    - [offset()](http://api.jquery.com/offset/)
        ```javascript
        this.objOffsetTop = this.obj.offset().top;
        ```
    - [scrollTop()](http://api.jquery.com/scrollTop/)
        ```javascript
        $(win).scrollTop()
        ```
    - [outerHeight()](http://api.jquery.com/outerHeight/)
        ```javascript
        this.objHeight = this.obj.outerHeight(true);
        ```
    - [hasClass()](http://api.jquery.com/hasClass/)
        ```javascript
        if (this.obj.hasClass(this.opts.activeClass)) {
            this.obj.removeClass(this.opts.activeClass);
        }
        ```

---

## 14 : [실습] Anchor를 이용한 섹션 이동
### # Practice
- 브라우저 열면 실행되는 주요 동작
    - 요소 설정 (setElements)
        - 퀵메뉴 버튼들은 href 속성이 있는 a태그만 골라서 가져옴
    - 이벤트 바인딩 (bindEvents)
    - 각 섹션의 상단 좌표 체크 (getCoordinates)
- 퀵메뉴 누르면 실행되는 동작
    - 해당 섹션으로 이동 (moveToSection)
    - 퀵메뉴 버튼 클래스 추가/제거 (skipSection)
- 탑버튼 누르면 실행되는 동작
    - 맨 위로 이동 (moveToTop)
- 스크롤시 실행되는 동작
    - 퀵메뉴 고정 (fixedMenu)
    - 현재 인덱스 설정(offScrollFunc)
        - 0.05초 후에 실행
        - 스크롤 좌표가 해당 섹션의 상단 좌표보다 크거나 같을 때 : 해당 섹션의 인덱스
        - 스크롤 좌표가 첫번째 섹션의 상단 좌표보다 작을 때 : null
    - 현재 인덱스의 값에 따라 클래스를 추가/제거(skipSection)


### # Point
1. 1번에서 3번 또는 3번에서 1번 컨테이너로 스크롤 이동 시 2번 앵커가 활성화되면 안됨
    ```javascript
    onScrollFunc : function () {
        this.fixedMenu();
        win.clearTimeout(this.scrollEndTime);
        this.scrollEndTime = win.setTimeout($.proxy(this.offScrollFunc, this), 50);
    },
    ```
2. css를 직접변경하는 방법보다 클래스를 추가/제거하는 방법으로 할 것
    - css()로 변경할 때 다른 스타일이 제거될 수 있음

---

## 15 : [실습] 반응형 GNB
### # Practice
```javascript
setPcEvent : function (type) {
    if (type) {
        this.listChild.on('mouseenter mouseleave focusin', $.proxy(this.setPcHover, this));
        this.listChild.on('focusoutside', $.proxy(this.setPcFocusOut, this));
    } else {
        this.listChild.off('mouseenter mouseleave focusin');
        this.listChild.off('focusoutside');
    }
},
setPcHover : function (e) {
    var target = $(e.currentTarget);
    if (e.type === 'mouseenter' || e.type === 'focusin') {
        target.find(this.opts.listContent).show();
    } else if (e.type === 'mouseleave') {
        target.find(this.opts.listContent).hide();
    }
}
```
1. 하나의 셀렉터에 여러개의 이벤트 타입을 바인딩할 수 있음
2. 이벤트 타입을 `e.type`으로 받아와서 해당 타입별로 기능을 정의할 수 있음

### # Point
1. win.testProject.common.util에 있는 `isSupportTransform`을 이용해 반응형이 가능한 브라우저인지 체크
2. `resize` 이벤트가 일어나는 동안 반응형 구간 체크
    - 구간에 해당하는 type, layout, event를 실행하고, 해당하지 않는 구간의 event는 해제