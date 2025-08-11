<br>
<br>
<div align="center">

**Testable95**는 Playwright 기반 E2E **테스트 코드 생성기**입니다.

<br>

<a href="https://testable95.site/">
  <img alt="로고" src="https://github.com/user-attachments/assets/08d424bc-c80b-4e9d-98f9-b0838e88902a">
</a>

<br>
<br>

[<img alt="배포 사이트 접속 버튼" src="https://github.com/user-attachments/assets/b229a8e9-44d6-439f-b9d4-e63c03cfa6a1">](https://testable95.site/)

<br>

테스트 코드는 프로젝트의 품질을 보장하는 데 필요하지만<br>
작성하기 번거롭고 시간이 많이 소요됩니다.<br>
이를 해결하고자 누구나 쉽게 **테스트 코드**를 **생성**할 수 있는 도구를 개발하였습니다.

[서버 레포지토리](https://github.com/loadify/testable95-server)

</div>
<br>
<span id="top"></span>
<br>

## 목차

<!-- toc -->

- [1. 미리보기](#1-%EB%AF%B8%EB%A6%AC%EB%B3%B4%EA%B8%B0)
- [2. 프로젝트를 위한 의사 결정](#2-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%EB%A5%BC-%EC%9C%84%ED%95%9C-%EC%9D%98%EC%82%AC-%EA%B2%B0%EC%A0%95)
  - [2-1. 어떤 유형의 테스트 코드를 생성하나요?](#2-1-%EC%96%B4%EB%96%A4-%EC%9C%A0%ED%98%95%EC%9D%98-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%83%9D%EC%84%B1%ED%95%98%EB%82%98%EC%9A%94)
  - [2-2. 왜 Playwright 기반 테스트인가?](#2-2-%EC%99%9C-playwright-%EA%B8%B0%EB%B0%98-%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9D%B8%EA%B0%80)
  - [2-3. 누구나 쉽게 코드를 생성할 수 있는 적절한 방식은 뭘까요?](#2-3-%EB%88%84%EA%B5%AC%EB%82%98-%EC%89%BD%EA%B2%8C-%EC%BD%94%EB%93%9C%EB%A5%BC-%EC%83%9D%EC%84%B1%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%EC%A0%81%EC%A0%88%ED%95%9C-%EB%B0%A9%EC%8B%9D%EC%9D%80-%EB%AD%98%EA%B9%8C%EC%9A%94)
  - [2-4. 왜 MongoDB를 사용했나요?](#2-4-%EC%99%9C-mongodb%EB%A5%BC-%EC%82%AC%EC%9A%A9%ED%96%88%EB%82%98%EC%9A%94)
- [3. 자연어 기반 테스트 코드 생성기 구현 과정](#3-%EC%9E%90%EC%97%B0%EC%96%B4-%EA%B8%B0%EB%B0%98-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EC%83%9D%EC%84%B1%EA%B8%B0-%EA%B5%AC%ED%98%84-%EA%B3%BC%EC%A0%95)
  - [3-1. 라이브러리없이 블록 코딩 구현하기](#3-1-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC%EC%97%86%EC%9D%B4-%EB%B8%94%EB%A1%9D-%EC%BD%94%EB%94%A9-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0)
    - [(1) 메서드를 담당하는 메서드 블록](#1-%EB%A9%94%EC%84%9C%EB%93%9C%EB%A5%BC-%EB%8B%B4%EB%8B%B9%ED%95%98%EB%8A%94-%EB%A9%94%EC%84%9C%EB%93%9C-%EB%B8%94%EB%A1%9D)
    - [(2) 매개변수를 담당하는 인풋 블록](#2-%EB%A7%A4%EA%B0%9C%EB%B3%80%EC%88%98%EB%A5%BC-%EB%8B%B4%EB%8B%B9%ED%95%98%EB%8A%94-%EC%9D%B8%ED%92%8B-%EB%B8%94%EB%A1%9D)
    - [(3) 테스트 코드의 한 줄을 의미하는 라인 블록](#3-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C%EC%9D%98-%ED%95%9C-%EC%A4%84%EC%9D%84-%EC%9D%98%EB%AF%B8%ED%95%98%EB%8A%94-%EB%9D%BC%EC%9D%B8-%EB%B8%94%EB%A1%9D)
    - [(4) 블록 코딩의 완성, 드래그 앤 드롭](#4-%EB%B8%94%EB%A1%9D-%EC%BD%94%EB%94%A9%EC%9D%98-%EC%99%84%EC%84%B1-%EB%93%9C%EB%9E%98%EA%B7%B8-%EC%95%A4-%EB%93%9C%EB%A1%AD)
  - [3-2. AI를 활용한 자연어 처리하기](#3-2-ai%EB%A5%BC-%ED%99%9C%EC%9A%A9%ED%95%9C-%EC%9E%90%EC%97%B0%EC%96%B4-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0)
    - [(1) Wit AI를 선택한 이유](#1-wit-ai%EB%A5%BC-%EC%84%A0%ED%83%9D%ED%95%9C-%EC%9D%B4%EC%9C%A0)
    - [(2) Wit AI를 통한 학습 진행](#2-wit-ai%EB%A5%BC-%ED%86%B5%ED%95%9C-%ED%95%99%EC%8A%B5-%EC%A7%84%ED%96%89)
  - [3-3. 테스트 코드 부드럽게 생성하기](#3-3-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EC%BD%94%EB%93%9C-%EB%B6%80%EB%93%9C%EB%9F%BD%EA%B2%8C-%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0)
    - [(1) 대체 화면이 없다면?](#1-%EB%8C%80%EC%B2%B4-%ED%99%94%EB%A9%B4%EC%9D%B4-%EC%97%86%EB%8B%A4%EB%A9%B4)
    - [(2) 조건부 렌더링 구현 과정](#2-%EC%A1%B0%EA%B1%B4%EB%B6%80-%EB%A0%8C%EB%8D%94%EB%A7%81-%EA%B5%AC%ED%98%84-%EA%B3%BC%EC%A0%95)
    - [(3) 대체 화면으로 사용자의 경험 향상 기대하기](#3-%EB%8C%80%EC%B2%B4-%ED%99%94%EB%A9%B4%EC%9C%BC%EB%A1%9C-%EC%82%AC%EC%9A%A9%EC%9E%90%EC%9D%98-%EA%B2%BD%ED%97%98-%ED%96%A5%EC%83%81-%EA%B8%B0%EB%8C%80%ED%95%98%EA%B8%B0)
- [4. 함께 일했던 방식](#4-%ED%95%A8%EA%BB%98-%EC%9D%BC%ED%96%88%EB%8D%98-%EB%B0%A9%EC%8B%9D)
  - [4-1. 다음 작업에도 활용할 수 있는 회의록 기록](#4-1-%EB%8B%A4%EC%9D%8C-%EC%9E%91%EC%97%85%EC%97%90%EB%8F%84-%ED%99%9C%EC%9A%A9%ED%95%A0-%EC%88%98-%EC%9E%88%EB%8A%94-%ED%9A%8C%EC%9D%98%EB%A1%9D-%EA%B8%B0%EB%A1%9D)
  - [4-2. 작업의 시간을 단축시키는 PR 리뷰 방식](#4-2-%EC%9E%91%EC%97%85%EC%9D%98-%EC%8B%9C%EA%B0%84%EC%9D%84-%EB%8B%A8%EC%B6%95%EC%8B%9C%ED%82%A4%EB%8A%94-pr-%EB%A6%AC%EB%B7%B0-%EB%B0%A9%EC%8B%9D)
- [5. 프로젝트 정보](#5-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%A0%95%EB%B3%B4)
  - [5-1. 기술 스택](#5-1-%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D)
  - [5-2. 프로젝트 구조](#5-2-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EA%B5%AC%EC%A1%B0)
    - [(1) 단 하나의 스타일 테마 파일](#1-%EB%8B%A8-%ED%95%98%EB%82%98%EC%9D%98-%EC%8A%A4%ED%83%80%EC%9D%BC-%ED%85%8C%EB%A7%88-%ED%8C%8C%EC%9D%BC)
    - [(2) 독립적인 타입별 블록 컴포넌트](#2-%EB%8F%85%EB%A6%BD%EC%A0%81%EC%9D%B8-%ED%83%80%EC%9E%85%EB%B3%84-%EB%B8%94%EB%A1%9D-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8)
    - [(3) 반복되는 API 요청 로직](#3-%EB%B0%98%EB%B3%B5%EB%90%98%EB%8A%94-api-%EC%9A%94%EC%B2%AD-%EB%A1%9C%EC%A7%81)

<!-- tocstop -->

<br>
<br>

## 1. 미리보기

<img alt="미리보기" src="https://github.com/user-attachments/assets/209024c8-757d-44b7-accb-f788f3705ac9">

<br>
<br>

## 2. 프로젝트를 위한 의사 결정

### 2-1. 어떤 유형의 테스트 코드를 생성하나요?

> 이 프로젝트에서는 서비스의 전체적인 흐름을 파악할 수 있는 **E2E** 유형의 테스트 코드를 생성합니다.

테스트는 QA엔지니어 혹은 기획자 같은 **비개발자**도 애플리케이션의 기능을 이해하고 그 결과가 실제 사용자 경험에 어떤 영향을 미치는지 보다 명확하게 파악할 수 있도록 돕는 도구라고 생각합니다.

그 중 실제 사용 사례에 초점을 맞추어 **비개발자**도 쉽게 이해하고 사용할 수 있는 **테스트 시나리오를 생성**할 수 있게 하는 **E2E 테스트**가 이 프로젝트와 가장 적합하다고 생각했습니다. 또한 사용자의 경험을 전체적으로 점검하고, 실제 사용 환경에서 애플리케이션이 어떻게 작동하는지 평가하는 **E2E 테스트** 생성기는 실제 협업에서 사용하기에 유용할 거라 판단했습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

### 2-2. 왜 Playwright 기반 테스트인가?

> **Playwright**는 **다양한 언어**를 지원하고 **병렬 처리**도 가능합니다.

프로젝트에 적합한 **E2E** 테스트 자동화 도구를 선정하기 위해, 저희 팀은 **Playwright**, **Selenium**, 그리고 **Cypress** 등 주요 프레임워크들을 비교 분석하였습니다.

<br>

|           | Playwright           | Selenium             | Cypress                   |
| --------- | -------------------- | -------------------- | ------------------------- |
| 지원 언어 | **다양한** 언어 지원 | **다양한** 언어 지원 | 자바스크립트              |
| 병렬 처리 | **내장 지원**        | **내장 지원**        | 추가 라이브러리 설치 필요 |

<br>

이 중, **Playwright**는 자바스크립트 뿐만 아니라 **다양한 프로그래밍 언어**를 지원하기 때문에 사용자 각자가 선호하는 언어로 테스트 코드를 작성할 수 있게 하여, 누구나 사용할 수 있도록 **접근성**을 높여준다고 판단했습니다. 또한 **병렬 처리**를 내장 지원하기 때문에 별도 도구를 추가 설치할 필요없이 대규모 테스트 실행 시간을 단축시켜 작업의 **효율성**을 향상시켜준다고 생각했습니다.

<br>

<div align="center">
  <img width="600" alt="GitHub Star 수 비교" src="https://github.com/user-attachments/assets/5b5f9536-77e1-403d-9efb-b435a166201b">

_GitHub Star 수 비교_

</div>

<br>

또한, **Playwright**의 **높은 스타 수**는 널리 사용되고 있다고 생각했습니다. 이는 **Playwright**가 안정적이고 신뢰할 수 있으며, 활발한 커뮤니티 지원을 받으며 **검증된 기술**이라고 판단하였습니다.

이러한 근거들로 비추어 볼 때, 많은 사용자들을 보유하고 성능이 우수한 **Playwright**를 최종적으로 선택하게 되었습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

### 2-3. 누구나 쉽게 코드를 생성할 수 있는 적절한 방식은 뭘까요?

> 누구나 쉽게 코드를 생성할 수 있게 제작하기 위해 **자연어**를 처리하는 **블록 코딩** 방식을 도입하였습니다.

비개발자들에게 테스트 코드를 작성하는 데에 있어 가장 큰 장벽 중 하나는 **프로그래밍 언어의 문법과 로직**을 이해해야 한다는 점이라고 생각했습니다. 이러한 장벽을 허물기 위한 직관적이고 접근성을 높이는 방법을 모색하였고 **자연어**를 활용하는 방안을 고려하게 되었습니다. **자연어**를 코드로 처리할 수 있는 방안을 모색하던 중, 저희는 **스크래치(Scratch)** 라는 서비스에서 영감을 받아 **블록 코딩** 방식을 도입하기로 결정했습니다.

**스크래치**는 전 세계 수백만 명의 사용자들이 그래픽 인터페이스를 통해 복잡한 코드를 작성할 필요 없이 **블록**을 조합하는 형태로 프로그램을 구성할 수 있는 서비스입니다.

<div align="center">
  <img width="260" height="242" alt="스크래치는 많은 사람들이 사용한다는 기사" src="https://github.com/user-attachments/assets/e6b38dd0-2083-4e54-bae4-c4bfe7f7e23b"><img width="540" alt ="스크래치 사용 예시" src="https://github.com/user-attachments/assets/2c94efca-cc55-4497-a768-496d78b9f7f9">

_수백만의 사람들이 사용하는 스크래치 서비스_

</div>

이 프로젝트는 이러한 스크래치의 **블록 코딩** 원리를 적용하여, 개발자 뿐만 아니라 **QA 엔지니어나 기획자**도 직관적으로 코드 블록을 선택하고 조합함으로써 원하는 **테스트 코드를 생성**할 수 있도록 하였습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

### 2-4. 왜 MongoDB를 사용했나요?

> 동적으로 변하는 테스트 코드와 관련된 블록 데이터를 안전하게 관리하기 위해 **NoSQL** 데이터베이스인 **Mongo DB**를 활용하였습니다.

이 프로젝트에서는 **Playwright** 테스트 코드에서 자연어로 변환된 블록 데이터를 안정적으로 관리해야 했습니다. 하지만 테스트 코드 블록의 특성상 다음과 같은 문제가 있었습니다:

1. **끊임없이 변화하는 코드 버전** <br>
   **Playwright**는 정기적으로 업데이트되며, 새로운 버전에서는 기존에 사용하던 메서드가 제거되거나 새로운 메서드가 추가되거나 기존 방식이 **레거시**로 전환되면서, 점차 최신 방식으로 변경해야 하는 상황 발생합니다. 이런 변화에 따라 테스트 블록 데이터도 지속적으로 업데이트되어야 하며, 이를 효과적으로 관리할 필요가 있었습니다.

   <div align="center">
      <img alt="Playwright의 42개의 버전들" src="https://github.com/user-attachments/assets/b4a69277-b6b6-4e4d-b815-8073e2e3335e">

   _Playwright의 42개의 버전들_

   </div>

2. **200개가 넘는 테스트 코드의 메서드**<br>
   **Playwright**는 200개가 넘는 방대한 메서드를 제공하며, 이를 모두 자연어로 구현하려면 대규모 데이터를 저장하고 관리할 공간이 필요했습니다. 블록 데이터는 단순히 저장만 하는 것이 아니라, 효율적으로 검색하고 수정할 수 있어야 했습니다.

결국 블록 데이터를 관리하기 위해 **안전하게**, **유연하게** 대규모 데이터를 보관할 공간의 필요성이 느껴졌습니다. 이러한 요구 사항들을 충족하기 위해 팀원들과 함께 **NoSQL** 데이터베이스인 **MongoDB**를 선택하기로 결정하였습니다. **MongoDB**는 선택하게 된 배경은 아래와 같습니다.

- **안전하게 데이터 관리하기** <br>
  서버를 통한 데이터베이스에 접근하는 방식은 클라이언트가 데이터베이스에 접근하는 방식보다 안전합니다. 클라이언트가 접근하는 방식은 악의적인 사용자가 데이터베이스를 조작할 수 있는 위험이 있지만 서버를 중간 레이어로 사용하게 되면 이러한 위험을 방지하고 보안 계층을 강화할 수 있습니다.

- **유연하게 데이터 관리하기** <br>
  관계형 데이터베이스는 고정된 스키마를 사용하기 때문에 변경된다면 이에 따른 마이그레이션 비용이 발생하게 됩니다. 물론 **MongoDB** 역시 스키마를 정의할 수 있지만 수정 사항이 발생할 때 변경된 구조만 반영하면 되므로 테이블 전체의 재구성을 고려해야 하는 관계형 데이터베이스에 비해 효율적입니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>
<br>

## 3. 자연어 기반 테스트 코드 생성기 구현 과정

### 3-1. 라이브러리없이 블록 코딩 구현하기

> 사용자 경험을 위해 커스터마이징하고 팀원들과 블록 코딩의 논리를 명확하게 이해하기 위해 **블록 코딩**을 **직접 구현**하였습니다.

자연어를 처리하여 코드로 변환하기 위해서는 기존의 블록 코딩과 **차별점**이 필요하다고 생각하였습니다. 또한 팀원들이 함께 작업하는 만큼 블록 코딩의 원리를 잘 이해해야 추후 유지보수 및 기능 확장에 도움이 될 거라 판단하였습니다. 그리하여 팀원들과 협의 후, 라이브러리를 사용하지 않고 **직접 구현**하는 방향으로 결정하였습니다.

이 프로젝트에서는 **블록**을 `Playwright` 테스트 코드 구성 요소로 삼아 크게 **세 가지** 주요 유형으로 분류합니다.

#### (1) 메서드를 담당하는 메서드 블록

<img width="164" alt="메서드 블록" src="https://github.com/user-attachments/assets/720c7859-6a23-481f-8acc-cf53744d9fcf"><br>
특정 기능을 **수행**하는 코드 조각을 의미하며, 하나 또는 여러 인풋 블록과 결합하여 사용되는 블록입니다.

#### (2) 매개변수를 담당하는 인풋 블록

<img width="164" alt="인풋 블록" src="https://github.com/user-attachments/assets/4300fac0-3ef9-411f-8c2d-67a75b60e524"><br>
서드 블록과 관련이 있는 **세부 정보**가 담긴 **매개변수**를 제공하는 역할로 사용자가 직접 값을 입력할 수 있는 블록입니다. 사용자의 입력 값에 따라 매개변수가 동적으로 변경되기 때문에 **지역 상태 관리**를 활용한 **제어 컴포넌트** 방식으로 구현하였습니다.

```jsx
  const InputBlock = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
      const targetValue = event.target.value;
      setInputValue(targetValue);
    };

    return (
      <InputBlockContainer>
        <input onChange={handleInputChange} value={inputValue}>
      </InputBlockContainer>
    );
  };
```

**인풋 블록**을 제어 컴포넌트 방식으로 구현하면서 입력 값이 변경될 때마다 실시간으로 UI에 반영할 수 있었습니다. 이를 통해, 상태와 사용자의 입력 값이 동기화되기 떄문에 입력 오류나 지연 없이 부드러운 화면을 제공하게 되었습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

#### (3) 테스트 코드의 한 줄을 의미하는 라인 블록

<img alt="라인 블록" src="https://github.com/user-attachments/assets/c17e9b7f-0a43-4571-9800-ff9734adc92b"><br>
**코드 한 줄**을 나타내며, 하나 이상의 메서드 블록이나 인풋 블록을 포함하는 블록입니다.

**라인 블록**이 생성되기 위해서는 아래 조건을 만족해야 코드 한 줄이 **완성**된 것으로 간주되어 다음 **라인 블록**을 **생성**할 수 있도록 구현했습니다. 다음 조건들로 사용자들이 불필요한 테스트 코드 생성을 방지하고 코드 문법이 어색한 비개발자들도 **효율적**으로 코드를 생성할 수 있도록 도와줍니다.

- **하나의 메서드 블록**만 존재하는 경우

  ```jsx
  await page.waitFor();
  ```

    <img width="347" alt="하나의 메서드 블록만 존재하는 경우" src="https://github.com/user-attachments/assets/e19712b2-6557-4e0f-908f-98438decf65b">

  <br>

- 한 쌍의 **메서드 블록과 인풋 블록**이 배치되는 경우

  ```jsx
  await page.goto("www.naver.com");
  ```

    <img width="369" alt="한 쌍의 메서드 블록과 인풋 블록이 배치되는 경우" src="https://github.com/user-attachments/assets/f2cb4139-bb76-48ac-a70d-8117d728cf1f">

  </details>

  <br>

- **하나의 메서드 블록과 다수의 인풋 블록**이 배치되는 경우

  ```jsx
  await page.locator("#order-sent").waitForTimeout(5000);
  ```

    <img width="533" alt="하나의 메서드 블록과 다수의 인풋 블록이 배치되는 경우" src="https://github.com/user-attachments/assets/6ac2ac65-ce4f-4de1-be3f-14bdb8ae04e5">

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

#### (4) 블록 코딩의 완성, 드래그 앤 드롭

블록의 위치를 조절하기 위해 마우스 이벤트를 통해 블록의 `id`를 **저장**하고 **생성**합니다. 이 후, `id`는 **비교**과정을 통해 위치를 지정하는 데 사용됩니다.

<br>

<div align="center">
  <img width="600" alt="블록의 id를 활용하여 드래그 앤 드롭 구하기 시각화" src="https://github.com/user-attachments/assets/62d675bd-a46b-4a25-b532-34d685ea892d">

</div>

<br>

블록 코딩을 구현하기 위해 사용자의 마우스 움직임을 통해 블록의 위치를 조정해야 했습니다. 이 프로젝트에서는 **드래그 앤 드롭** 방식을 적용하여 사용자의 상호작용을 기반으로 블록의 `id`를 관리합니다. 블록의 **드래그 앤 드롭** 동작은 아래 세 가지 마우스 이벤트로 구성됩니다.

<br>

<div align="center">
  <img width="600" alt="블록과 마우스 이벤트 연결" src="https://github.com/user-attachments/assets/9a0e600f-c92e-467b-b3bc-478a125418cb">
  
  _블록과 마우스 이벤트 연결_
</div>

<br>

1. `onDragStart`: 사용자가 블록 **드래그를 시작**할 때, 드래그된 블록의 `id`와 그 블록이 속한 라인 블록의 `id`를 **기록**합니다.

2. `onDragEnter`: 사용자가 블록을 **드래그하는 도중** 다른 블록 위로 마우스를 이동할 때, 드롭될 위치의 블록 `id`와 드래그 중인 `id`를 실시간으로 **추적**합니다.

3. `onDrop`: 사용자가 블록을 **드롭**할 때, 해당 블록에 새로운 `id`를 **부여**하고, 드롭된 라인 블록의 `id`와 함께 이 정보를 **저장**합니다.

이러한 마우스 이벤트들을 통해 블록의 정보를 관리하고 블록이 놓일 위치는 정보에 담긴 `id`를 비교하여 결정됩니다. 블록의 **위치**는 `onDrop` 이벤트가 발생하는 시점에 `id`를 **비교**하여 아래의 조건을 통해 **업데이트**됩니다.

<br>

<div align="center">
  <img width="600" alt="블록의 위치를 결정하는 조건" src="https://github.com/user-attachments/assets/b4ce1c67-3ae3-4d79-b662-4330a6f1850e">

_블록의 위치를 결정하는 조건_

</div>

<br>

- **(같은 / 다른) 라인 블록**에 드롭합니다. : 드래그된 블록이 속한 라인 블록과 드롭할 **라인 블록**의 `id`를 **비교**합니다.
- 드롭할 위치에 다른 블록이 **인접**해 있나요? : 드래그된 블록과 **드롭할 위치의 블록**의 `id`를 **비교**합니다.

이러한 과정을 통해 조건을 설정하여 사용자들이 블록을 **직관적**으로 **이동**시킬 수 있도록 구현하였습니다. 또한 팀원들과 직접 구현하면서 프로젝트의 논리적 구성을 함께 이해하고 **코드 개선**에 대해 **수월하게** 점검하고 개선할 수 있었습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>
<br>

### 3-2. AI를 활용한 자연어 처리하기

> 사용자 친화성과 자연어 처리 기능을 고려하여 **Wit AI**를 선택하였습니다.

#### (1) Wit AI를 선택한 이유

팀원들과 함께 **Wit AI**를 선택하게 된 가장 큰 이유는 사용자가 입력한 **자연어 어순에 상관없이 동일하게 코드를 생성**할 수 있는 이점 때문이었습니다. 블록 코딩을 할 때, 사용자는 프로그래밍 언어의 구문을 완벽히 이해하지 못할 수도 있습니다. 특히 비개발자가 테스트 코드를 작성하는 경우, 명령어의 순서를 정확히 배치하는 것이 어려울 수 있습니다.

예를 들어, 블록의 순서를 **다르게 배치**했지만 **동일한 코드를 생성**하고 싶은 두 사용자가 있습니다.
만약 어순에 따라 다르게 자연어를 처리한다면 둘 중 하나는 에러를 발생하거나 예상치 못한 결과를 반환할거라 예상할 수 있습니다.

<br>

<div align="center">
  <img width="500" alt="역순으로 블록을 배치했을 때 발생하는 에러" src="https://github.com/user-attachments/assets/6e471b6c-d5e7-4d08-b980-ce3a6baf1fab">

_역순으로 블록을 배치했을 때 발생하는 에러_

</div>

하지만 **Wit AI**는 아래와 같이 **의도**와 **세부 정보**를 키워드로 추출하기 때문에 **동일한 코드**를 생성할 수 있습니다.

```jsx
const { intents, entities } = await witAI.message(blocks);

const intent = intents.name;
const entity = entities.value;
```

이러한 키워드를 `Playwright` 문법에 맞게 배치하면 사용자는 원하는 코드를 생성할 수 있습니다.

<div align="center">
  <img width="500" alt="역순으로 블록을 배치해도 처리하는 Wit AI" src="https://github.com/user-attachments/assets/0549ace0-c0e0-4eac-a597-f2f2823d0dde">

_역순으로 블록을 배치해도 처리하는 Wit AI_

</div>

따라서, 어순에 관계없이 자연어를 처리할 수 있는 **Wit AI**의 유연함때문에 선택하게 되었습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

#### (2) Wit AI를 통한 학습 진행

**Wit AI**는 입력된 자연어에서 **의도(Intent)** 와 **세부 정보(Entity)** 를 추출하여 자연어를 정확히 파악하고, 관련 데이터를 처리하는 자연어 처리 플랫폼입니다. 또한 개발자가 직접 **의도** 와 **세부 정보**의 연관성 를 **학습**시켜 원하는 목적과 관련 정보를 효과적으로 분석해주는 기능을 갖추고 있습니다.

아래의 과정을 진행하여 **Wit AI**의 원활한 분석을 위해 의도와 세부 정보의 연관성에 대한 **학습**을 진행할 수 있습니다.

<div align="center">
  <img width="400" alt="의도와 세부 정보 연관성 학습" src="https://github.com/user-attachments/assets/5a8506eb-8db0-4904-9d1f-95201edb52ee">

_의도와 세부 정보 연관성 학습_

</div>

Wit AI는 이러한 학습을 통해 **의도**와 **세부 정보**의 **연관성**을 **강화**할 수 있습니다. 아래는 실제 팀원들과 "이동합니다."라는 의도와 `url`이라는 세부 정보의 연관성을 강화하는 학습을 진행한 자료입니다.

<div align="center">

<img width="400" alt="이동합니다라는 의도와 url라는 세부정보의 연관성 강화 학습 기록" src="https://github.com/user-attachments/assets/fe710360-f3f6-4148-a41f-b42ae1409b55">

_"이동합니다."와 `url` 연관성 강화 학습 기록_

</div>

학습을 거친 **Wit AI**는 **의도**와 **세부 정보**를 아래와 같이 분석하고 **추출**합니다.

<br>

<div align="center">
  <img width="400" alt="Wit AI의 의도와 세부 정보" src="https://github.com/user-attachments/assets/81fbc6f7-dd21-4a6b-a8ec-a9a9beb15906">

_Wit AI의 의도와 세부 정보_

</div>

<br>

1. 입력된 자연어를 통해 **의도**를 파악합니다.
2. 학습된 정보를 통해 **의도**의 이름을 **추출**합니다.
3. 학습된 정보를 통해 **의도**와 관련된 **세부 정보**를 파악합니다.
4. **세부 정보**에 포함된 동적 값을 분석하여 **의도**에 필요한 **값**(매개변수)으로 **추출**합니다.

<br>

위와 같은 일련의 과정을 거쳐 **Wit AI**는 입력된 자연어를 **의도**의 이름과 **세부 정보**의 값을 추출하고 테스트 코드 생성에 직접적으로 활용합니다. 사용자가 입력한 블록을 활용한 테스트 코드 생성 과정은 아래와 같이 진행됩니다.

<br>

<div align="center">

  <img width="800" alt="블록을 테스트 코드로 변환하는 과정" src="https://github.com/user-attachments/assets/16d0c24b-cc38-4fc4-bd1b-e15939b3e4d7">

_블록을 테스트 코드로 변환하는 과정_

</div>

<br>

1. 사용자가 `www.naver.com` (`url`) "이동합니다." 라는 블록을 입력합니다.
2. **Wit AI**는 학습된 내용을 바탕으로 "이동합니다."라는 **의도**를 `goto`라는 이름으로 추출합니다.
3. **Wit AI**는 학습된 내용을 바탕으로 `goto`라는 **의도**와 `url`이라는 **세부 정보**와의 연관성을 파악합니다.
4. **Wit AI**는 사용자가 입력한 `www.naver.com`를 **세부 정보** `url`의 값으로 추출합니다.
5. **세부 정보**에 담긴 값(`www.naver.com`)과 의도의 이름(`goto`)를 활용하여 테스트 코드를 생성합니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>
<br>

### 3-3. 테스트 코드 부드럽게 생성하기

> 비동기 적으로 테스트 코드를 생성하는 과정에서 **대체 UI**를 제공하여 사용자 경험을 향상시켰습니다.

#### (1) 대체 화면이 없다면?

테스트 코드 생성은 비동기 작업으로 네트워크 요청을 보내면 서버에서 테스트 코드를 생성할 때까지 시간이 필요합니다. 이 과정에서 사용자가 로딩 중인지 아니면 오류가 발생하는지 알 수 없다면 애플리케이션이 멈췄다고 생각하여 잘못된 동작을 수행할 가능성이 높습니다. 따라서, 로딩 중, 에러 발생, 정상적인 테스트 코드 생성과 같은 상태를 사용자에게 직관적이고 예측 가능하게 제공하여, 애플리케이션의 상태를 명확히 전달하는 것을 목표로 구현하였습니다.

#### (2) 조건부 렌더링 구현 과정

로딩 상태를 관리하기 위해 **조건부 렌더링**을 활용하여 구현하였습니다. 다양한 비동기 상태를 직관적으로 표현하기 위해 `isLoading`, `isError`와 같은 플래그를 사용하여 명확하고 간결하게 상태를 관리할 수 있도록 하였습니다.

- `isLoading`: 테스트 코드 생성하기 전, **로딩 화면**을 렌더링
- `isError`: 테스드 생성 실패 시, **에러 화면**을 렌더링
- `isLoading`과 `isError`가 아닐 경우: **테스트 코드 생성 화면**을 렌더링

  ```jsx
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  <Content>
    {isError ? (
      <Fallback text="Error" />
    ) : isLoading ? (
      <Fallback text="Loading" />
    ) : (
      <CodeBox code={testCode} />
    )}
  </Content>;
  ```

로딩 대체 화면을 **React**의 `Suspense`를 활용하여 구현할 수 있었지만, 이 프로젝트에서는 테스트 코드 생성 과정과 같이 **단순한 비동기 상태**만 처리하면 되므로, `isLoading`과 `isError` 같은 상태로 충분히 구현할 수 있었습니다. 만약 `Suspense`를 사용할 경우 구조가 더 복잡해질 가능성이 있어, 단순하고 직관적인 접근 방식을 선택하게 되었습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

#### (3) 대체 화면으로 사용자의 경험 향상 기대하기

조건부 렌더링과 직관적인 상태(`isLoading`, `isError`)를 활용하여, 비동기 작업 중 발생할 수 있는 혼란을 방지하고 예측 가능한 사용자 경험을 제공하였습니다. 이를 통해 테스트 코드 생성 과정을 더욱 부드럽고 직관적으로 처리할 수 있었습니다.

<div align="center">
  <img width="600" alt="대체 화면 구현한 영상" src="https://github.com/user-attachments/assets/db0a759e-9483-42f7-a478-b951e3369cf8">
</div>

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>
<br>

## 4. 함께 일했던 방식

### 4-1. 다음 작업에도 활용할 수 있는 회의록 기록

> 회의록을 **꾸준히** 작성하여 추후 진행하는 작업에 도움이 되었습니다.

회의 스케줄과 기록의 꾸준한 관리는 프로젝트의 효율성을 크게 향상시키는 요소라 생각합니다. 저희 팀은 개발 기간동안 **일일 스크럼**과 **저녁 마무리 회의**를 아래와 같이 진행하였습니다.

<br>

|              | 일일 스크럼                                  | 저녁 마무리 회의                   |
| ------------ | -------------------------------------------- | ---------------------------------- |
| 시간         | 매일 오전 10시 (20분)                        | 매일 오후 9시 (30분)               |
| 공유<br>내용 | 개인 컨디션<br> 작업 진행 상황<br> 당일 목표 | 어려움 <br>작업 정리<br> 익일 계획 |

<br>

아래는 팀원들의 **일일 스크럼**과 **저녁 마무리 회의** 진행 자료 입니다.

<div align="center">
  <img width="400" alt="개발 기간 20일 동안 55개의 회의록을 작성한 기록" src="https://github.com/user-attachments/assets/74b25ae8-f42a-427f-b492-cc02633f616d">

_개발 기간 20일 동안 55개의 회의록을 작성하였습니다._

</div>

회의록을 작성하면서 팀원들과 구두로 나눈 대화는 시간이 지나면서 잊혀지기 쉽지만 기록을 통해 중요한 아이디어와 결정사항을 **보존**하고, 추후에 **참고자료로 활용**하였습니다. 또한 프로젝트에 관련된 중요 결정들이 어떤 고민과 논의를 통해 이루어졌는지 추적하고 **비슷한 상황에서 의사결정**을 하는데 도움을 주기도 하였습니다.

<br>

| 8월 5일 (E2E 테스트 프레임워크 비교)                                                                                                     | 8월 7일 (자연어 처리 API 비교)                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| <img width="400" alt="E2E 테스트 프레임워크 비교" src="https://github.com/user-attachments/assets/5a8d858b-e6c0-4df7-8c65-78cbe9c39a28"> | <img width="400" alt="자연어 처리 API 비교" src="https://github.com/user-attachments/assets/4f659666-e772-4f8a-9bf7-8ce28dd625a5"> |

<br>

**8월 5일** 회의에서 기록한 E2E 테스트 프레임 워크를 비교한 방식을 **8월 7일** 자연어 처리 API 비교하는데 활용할 수 있었습니다. 이러한 회의록의 활용 방식은 팀원들의 작업 **효율성**을 높이는데 기여할 수 있었습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

### 4-2. 작업의 시간을 단축시키는 PR 리뷰 방식

> 수정이 필요한 리뷰는 **근거 있는** 자료와 **링크** 및 **시각 자료**는 반드시 첨부해야 합니다.

팀원들과의 긴 PR 리뷰 시간이 많은 어려움을 일으키는 주된 원인으로, 수정이 필요한 코드에 대해 추가 조사가 필요하다는 점을 파악했습니다. 이로 인해 리뷰 과정이 지연되고, 팀의 생산성이 저하되는 문제가 발생하였습니다.

<br>
<div align="center">
  <img width="400" alt="코드 리뷰에 대한 팀원들의 어려움" src="https://github.com/user-attachments/assets/3b2e93dc-2054-4d1d-b6a0-b7ceb3aa4dba">

_코드 리뷰에 대한 팀원들의 어려움_

</div>

<br>

이 문제를 해결하기 위해, 우리 팀은 PR 리뷰에 **근거 있는 자료**와 함께 **시각 자료**를 첨부하는 방식을 도입하였습니다.

1. **근거 있는 리뷰**<br>
   코드 수정이 필요하다고 판단되는 경우, 그 이유와 **공신력 있는 근거 자료**를 명확히 제시합니다.

2. **링크와 시각 자료**<br>
   관련 근거 자료를 뒷받침하는 외부 링크와 그에 해당하는 **시각 자료**를 첨부합니다.

  <br>

아래는 개선된 리뷰 방식을 적용하기 전과 후를 비교한 자료입니다.

<br>

| Before                                                                                                                                                 | After                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img width="802" alt="리뷰 방식 적용 전" src="https://github.com/user-attachments/assets/f816fb0f-09ba-4f87-bd52-54565489589b"> | <img width="802" alt="리뷰 방식 적용 후" src="https://github.com/user-attachments/assets/d312293a-0019-4303-9fd7-d7adbd59c52a"> |

<br>

이러한 리뷰 양식의 새로운 접근 방식은 팀원들이 리뷰 과정에서 발생할 수 있는 **불필요한 시간 소모를 줄이고**, 각 **리뷰의 목적과 필요성**을 명확히 이해할 수 있도록 하였습니다. 또한, 리뷰에 첨부된 시각 자료는 팀원들이 복잡한 정보를 빠르게 이해하도록 도와주며, 전반적인 작업 효율을 크게 개선하였습니다. 이러한 변화는 팀원들의 개발 프로세스의 전반적인 **효율성**을 높이는 데 기여했다고 생각합니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>
<br>

## 5. 프로젝트 정보

### 5-1. 기술 스택

#### Client

![React](https://img.shields.io/badge/react-%23404d59.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23404d59.svg?style=for-the-badge&logo=vite&logoColor=w)
![Axios](https://img.shields.io/badge/axios-%23404d59.svg?style=for-the-badge&logo=axios&logoColor=w)
![Zustand](https://img.shields.io/badge/zustand-%23404d59.svg?style=for-the-badge&logo=react&logoColor=black)
![Styled-components](https://img.shields.io/badge/styled_component-404d59.svg?style=for-the-badge&logo=styledcomponents&logoColor=DB7093)

#### Server

![NodeJS](https://img.shields.io/badge/node.js-404d59?style=for-the-badge&logo=node.js&logoColor=6DA55F)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB & Mongoose](https://img.shields.io/badge/MongoDB%20&%20Mongoose-%23404d59.svg?style=for-the-badge&logo=mongodb&logoColor=w)
![WitAi](https://img.shields.io/badge/wit%20ai-404d59?style=for-the-badge&logo=facebook&logoColor=w)

#### Deploy

![Firebase](https://img.shields.io/badge/firebase-%23404d59.svg?style=for-the-badge&logo=firebase&logoColor=red)
![Amazon Web Service](https://img.shields.io/badge/amazon%20web%20service-%23404d59.svg?style=for-the-badge&logo=amazon&logoColor=b)

#### Test

![Vitest](https://img.shields.io/badge/vitest-%23404d59.svg?style=for-the-badge&logo=vitest&logoColor=b)

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

### 5-2. 프로젝트 구조

#### (1) 단 하나의 스타일 테마 파일

프로젝트 전반에서 **일관된 디자인**을 유지하고 **유지보수의 용이함**을 위해 스타일을 중앙에서 관리하기 위해 테마 파일을 생성하였습니다.

```jsx
🗂️ style
 ㄴ 📁 Theme.jsx
```

테마 파일에서 주로 사용되는 **폰트 크기**와 **색상**을 공통 스타일로 지정하여 파일에서 수정하면 전체적으로 수정이 반영될 수 있도록 설계하였습니다.

```jsx
const fontSize = {
  small: "1.2rem",
  medium: "1.4rem",
  large: "1.6rem",
};

const color = {
  whiteColor: "#FFFFFF",
  blackColor: "#000000",
  redColor: "#FD0101",
};
```

이를 통해, 디자인의 **일관성**을 유지하며, 프로젝트의 **확장성**과 **유지보수성**을 크게 향상시킬 수 있었습니다. 또한, 공통 스타일을 사용하는 CSS 속성 값을 직접 지정하므로써 코드의 **가독성**도 높일 수 있었습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

#### (2) 독립적인 타입별 블록 컴포넌트

프로젝트의 유지보수성을 높이기 위해, **단일 책임 원칙**을 적용하여 블록 컴포넌트를 독립적으로 분리하여 관리하였습니다.

```jsx
🗂️ components
 ㄴ 📁 InputBlock.jsx
 ㄴ 📁 LineBlock.jsx
 ㄴ 📁 MethodBlock.jsx
```

성격이 각기 다른 블록 컴포넌트들이 하나의 책임만 갖도록 설계하여 역할이 명확하고 독립적으로 동작할 수 있도록 구현하였습니다. 이 원칙을 기반으로 각 블록은 자신의 타입과 관련된 **역할만 담당**하도록 분리하였습니다.

이를 통해, 하나의 컴포넌트에 의존하지 않고, 수정이 필요한 부분에만 집중적으로 접근할 수 있어 **유지보수**와 **디버깅**의 효율성을 높이고, 각 컴포넌트의 역할이 명확해져 코드의 **가독성**과 **재사용성** 또한 강화할 수 있었습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>

<br>

#### (3) 반복되는 API 요청 로직

API 요청을 처리할 때마다 반복적인 설정을 작성해야 하는 경우를 효율적으로 개선하기 위해 **Axios** 공통 인스턴스를 생성하여 활용하였습니다.

```jsx
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default axiosInstance;
```

`baseURL`과 같이 반복적으로 요청하는 주소를 인스턴스에서 한 번만 정의하여 모든 요청에 자동으로 적용되도록 구현하였습니다.

```jsx
const fetchBlocks = async () => {
  const response = await axiosInstance.get("/blocks");

  return response.data;
};

const handleBlocks = async (blockData) => {
  const response = await axiosInstance.post("/blocks/generate", { blockData });

  return response.data;
};
```

이를 통해, 블록을 불러오거나 테스트 코드 생성을 위해 사용자의 입력 값을 담은 블록을 처리하는 로직을 간결하게 작성하여 코드의 **가독성**을 향상시킬 수 있었습니다.

#### <p align="right"><a href="#top">목차👆🏼</a></p>
