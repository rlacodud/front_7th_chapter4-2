# 과제 체크포인트

[과제 배포 경로](https://rlacodud.github.io/front_7th_chapter4-2)

## 과제 요구사항

- [x] 배포 후 url 제출

- [x] API 호출 최적화(`Promise.all` 이해)

- [x] SearchDialog 불필요한 연산 최적화
- [x] SearchDialog 불필요한 리렌더링 최적화

- [x] 시간표 블록 드래그시 렌더링 최적화
- [x] 시간표 블록 드롭시 렌더링 최적화

## 과제 셀프회고

<!-- 과제에 대한 회고를 작성해주세요 -->

### 기술적 성장
<!-- 예시
- 새로 학습한 개념
- 기존 지식의 재발견/심화
- 구현 과정에서의 기술적 도전과 해결
-->

## 🧐코드 최적화, 왜 해야할까?
최적화를 하는 것의 본질적인 목적은 **UX를 개선**하기 위해서라고 생각합니다.

결국 웹이든 앱이든 사용자가 있기 때문에 존재하고, **사용자의 존재 유무가 우리가 개발을 하는 이유**라고 생각한다면, 타겟인 사용자의 경험을 최적화해주고 개선하는 것이 중요하다고 생각합니다.

결론적으로 최적화는 측정값이 아니라 병목을 줄이는 행위입니다.
수치상으로는 개선되어보일 수 있지만 **그 결과가 UX 개선에 유의미한 영향**을 주지 않았다면 불필요한 추상화, 마이크로테스크일 수 있습니다.

## 💡 과제 진행 과정
### (1) 개념 정립
늘 그렇듯, 최적화 관련하여 이해해야 하는 개념들에 대해 발제 자료를 보면서 정리하는 시간을 가졌습니다.

### (2) 진행 방식 계획 수립
이번 과제는 코드 개선 및 최적화를 하는 과제였기 때문에 전략적으로 분석하고 개선하는 과정에 대한 계획을 세우고 진행하는 게 중요하다고 생각했습니다.

그래서 아래와 같은 계획을 수립했습니다.

#### (2-1) 눈으로 보이는 문제점 파악
- 어떤 동작에서
- 무엇이 느리거나 이상한지
- 사용자 입장에서 어떤 불편인지

#### (2-2) 전문 tool 기반 문제점 파악
**1️⃣ React DevTools**
- 어떤 컴포넌트가
- 왜 리렌더링되는지
- 렌더링 시간(ms)

**2️⃣ Chrome DevTools**
- Performance 탭
  - 드래그 중 프레임 드랍
  - layout / scripting 비중 확인
- Network 탭
 - API 호출 중복 여부
 - waterfall 구조

**3️⃣ PageSpeed Insights**
- 사이트 성능 측정

#### (2-3) workflow yml로 자동화
workflow yml로 만들어서 푸시할 때마다 퍼포먼스 보고서 이슈를 생성하도록 합니다.

**✅ 갑자기 드는 의문점**
> 근데 workflow를 구축하다보니 갑자기 의문이 들었습니다.
> 지금 워크플로우가 푸시할 때마다 실행되는데 과제가 아니라 실제 프로젝트라고 생각했을 때
> 그냥 푸시할 때마다 실행되면 초반 구축이나 기본 세팅을 할 때도 실행되고
> => 그에 따른 불필요한 issue 히스토리가 쌓여서 관리가 어렵지 않을까?
> => 그렇게 반복되면 “어차피 또 뜨는 거잖아”하고 무시하게 되고 팀 피로도가 늘어나지 않을까?
>
> 결론은 의미있는 변화만 감지해서 분석하도록 해야 하는 거 아닐까?

처음에 든 생각은 **커밋 메시지에 트리거 키워드를 설정할까?**였습니다.

그러다 일단 수범님이랑 얘기를 나눠봤는데 실무에서는 사실 **성능 개선용 브렌치**를 생성하고 해당 브렌치에서만 실행되도록 하는 게 효율적이지 않을까 싶었습니다.
<img width="2372" height="1398" alt="image" src="https://github.com/user-attachments/assets/fd944b85-4f05-473d-9337-c3dc0cf194af" />
본 과제에서는 성능 개선 과제라는 특성을 고려해 커밋 메시지 트리거 기반으로 Lighthouse CI를 선택 실행하도록 구성했습니다.

**✅ 수동 실행에 대한 필요성**

그리고 처음부터 계획한 건 아니었지만 ci를 설정하다보니 **이미 푸시한 내용**에 대해 성능 검사를 하고 싶었을 때에 대한 처리가 있으면 좋을 것 같아서 커밋 메시지를 입력할 수 있는 필드를 추가했습니다.
<img width="710" height="1014" alt="image" src="https://github.com/user-attachments/assets/3afdf0af-49eb-4fa4-8e29-d6ca8b53cc6f" />

**✅ 최종 개선 방식 - 수동/자동**
**[수동 실행 시]**
```
1. commit_id 입력
   ↓
2. 해당 커밋으로 checkout
   ↓
3. 해당 커밋 기준 빌드 & 배포 (deploy job)
   ↓
4. Lighthouse CI 실행 (lighthouse-audit job)
   ↓
5. Issue 생성 (커밋 메시지 + diff + 성능 결과)
   ↓
6. 최신 커밋으로 복구 (restore-latest job)
```

**[자동 실행 시(perf 트리거 푸시)]**
```
1. 'perf' 커밋 푸시
   ↓
2. 현재 커밋 기준 빌드 & 배포 (deploy job)
   ↓
3. Lighthouse CI 실행 (lighthouse-audit job)
   ↓
4. Issue 생성 (커밋 메시지 + diff + 성능 결과)
```
### (3) API 호출 최적화(Promise.all 이해)
#### (3-1) 기존 문제점
Promise.all이 현재 잘못 사용되고 있습니다.
```js
const fetchAllLectures = async () => await Promise.all([
  (console.log('API Call 1', performance.now()), await fetchMajors()),
  (console.log('API Call 2', performance.now()), await fetchLiberalArts()),
  (console.log('API Call 3', performance.now()), await fetchMajors()),
  (console.log('API Call 4', performance.now()), await fetchLiberalArts()),
  (console.log('API Call 5', performance.now()), await fetchMajors()),
  (console.log('API Call 6', performance.now()), await fetchLiberalArts()),
]);
```
<img width="381" height="258" alt="image" src="https://github.com/user-attachments/assets/35b8fdab-069f-486d-9453-5de7e081de3b" />

performance.now는 페이지가 로드되고 나서 해당 호출이 실행되었을 때의 시간을 찍어주는 용도로 실행하는건데
병렬 실행이 보장되었다면 완전히 동일할 필요는 없지만, 직렬 실행에서처럼 누적되는 시간 차이는 발생하지 않아야 합니다.

하지만 콘솔을 보면 차이가 꽤 나는 걸 알 수 있습니다.

**❗️코드에서의 문제점**

**1️⃣ 중복 호출**

호출해야 하는 API는 /schedules-majors.json, /schedules-liberal-arts.json 두개인데 불필요하게 3번씩 중복으로 실행하고 있습니다.
```js
const fetchAllLectures = async () => await Promise.all([
  (console.log('API Call 1', performance.now()), await fetchMajors()),
  (console.log('API Call 2', performance.now()), await fetchLiberalArts()),
  (console.log('API Call 3', performance.now()), await fetchMajors()),
  (console.log('API Call 4', performance.now()), await fetchLiberalArts()),
  (console.log('API Call 5', performance.now()), await fetchMajors()),
  (console.log('API Call 6', performance.now()), await fetchLiberalArts()),
]);
```
<img width="536" height="208" alt="image" src="https://github.com/user-attachments/assets/8f2888a8-4429-4757-ba6e-9fa85d01e3ec" />

**2️⃣ 취지에 맞지 않는 사용방식**

게다가 Promise.all의 사용 목적에 부합하지 않는 사용 방식입니다.

Promise.all은 **객체 안에 있는 코드의 내용을 동시에 실행**하고 준비가 되었을 때 그에 대한 결과가 실행되고 넘어가게 하기 위해 사용하는 것인데,
Promise.all 안에 await을 사용하게 되면서 **개별적으로 비동기 처리**를 진행하고 그에 대한 결과는 Promise.all의 내용으로 넘기면서 의미없는 Promise.all이 됩니다.

#### (3-2) 해결 방법
일단 불필요한 중복 호출을 없애고 Promise.all의 취지에 맞도록 **await을 제외**해서 코드를 개선했습니다.
```js
const fetchAllLectures = () =>
  Promise.all([
    (console.log("API Call 1", performance.now()), fetchMajors()),
    (console.log("API Call 2", performance.now()), fetchLiberalArts()),
  ]);
```
개선 효과는 호출 시간을 비교해봤을 때 체감할 수 있습니다.

이전에는 호출당 50ms정도의 차이가 있었다면,
개선 후에는 0.2ms정도의 차이만 있고 총 API 호출에 걸린 시간도 131 => 59로 절반 이상 성능이 향상됐습니다!

| Before | After |
|---|---|
| <img width="381" height="258" alt="image" src="https://github.com/user-attachments/assets/1b940838-f41e-4c3b-84db-5bb3487b4079" /> | <img width="732" height="294" alt="image" src="https://github.com/user-attachments/assets/04395ef4-81e9-46aa-b1ea-c8ffb29fd0a1" /> |

다만 이 수치 자체보다, 초기 로딩 시 **체감되는 대기 시간**이 줄어든 것이 더 중요하다고 느꼈습니다.

### (4) SearchDialog 불필요한 연산 최적화
#### (4-1) 기존 문제점
SearchDialog가 열릴 때마다 내부에 있는 함수들이 실행되는데,
그 때 내부에 있는 연산에 대한 결과값이 **변경되지 않았음에도 매번 호출**하게 되어있어 불필요한 메모리 낭비를 하고 있습니다.

**1️⃣ filteredLectures**

팝업이 열릴 때마다 filteredLectures에 getFilteredLectures를 호출하여 엄청난 체이닝 필터 함수를 실행합니다.
<img width="1364" height="734" alt="image" src="https://github.com/user-attachments/assets/83b77ec3-4260-4517-9256-8383b083a567" />

**2️⃣ allMajors**

큰 변동이 일어나지 않을 전공 데이터에 대해서도 매번 new Set으로 재정의하고 있습니다.
```js
const allMajors = [...new Set(lectures.map((lecture) => lecture.major))];
```

**3️⃣ 엄청난 filter 체이닝**

불필요하게 엄청난 filter 체이닝을 진행하고 있습니다.
```js
  const getFilteredLectures = () => {
    const { query = "", credits, grades, days, times, majors } = searchOptions;
    return lectures
      .filter(
        (lecture) =>
          lecture.title.toLowerCase().includes(query.toLowerCase()) ||
          lecture.id.toLowerCase().includes(query.toLowerCase())
      )
      .filter(
        (lecture) => grades.length === 0 || grades.includes(lecture.grade)
      )
      .filter(
        (lecture) => majors.length === 0 || majors.includes(lecture.major)
      )
      .filter(
        (lecture) => !credits || lecture.credits.startsWith(String(credits))
      )
      .filter((lecture) => {
        if (days.length === 0) {
          return true;
        }
        const schedules = lecture.schedule
          ? parseSchedule(lecture.schedule)
          : [];
        return schedules.some((s) => days.includes(s.day));
      })
      .filter((lecture) => {
        if (times.length === 0) {
          return true;
        }
        const schedules = lecture.schedule
          ? parseSchedule(lecture.schedule)
          : [];
        return schedules.some((s) =>
          s.range.some((time) => times.includes(time))
        );
      });
  };
```

#### (4-2) 해결 방법
**useCallback**을 사용하여 의존성이 바뀌지 않는 한 같은 참조를 유지하게 해줍니다.
이 경우 계산 결과 자체를 캐싱하는 useMemo도 고려할 수 있었지만, 기존 구조상 함수 참조 안정화가 더 우선이라고 판단했습니다.
```js
const duplicate = useCallback((targetId: string) => {
    setSchedulesMap(prev => ({
      ...prev,
      [`schedule-${Date.now()}`]: [...prev[targetId]]
    }))
    };
}, [setSchedulesMap]);
...
  const remove = useCallback((targetId: string) => {
    setSchedulesMap(prev => {
      delete prev[targetId];
      return { ...prev };
    })
  };
  }, [setSchedulesMap]);

  const handleSearchInfoChange = useCallback((timeInfo: { tableId: string; day?: string; time?: number }) => {
    setSearchInfo(timeInfo);
  }, []);

  const handleCloseSearchDialog = useCallback(() => {
    setSearchInfo(null);
  }, []);
```

### (5) ScheduleTable
#### (5-1) 기존 문제점
**1️⃣ useMemo의 부재**

ScheduleTable에 핸들러 함수가 매 렌더링마다 새로 생성되어 getColor와 getActiveTableId가 매 렌더링마다 실행됩니다.
즉, 부모(ScheduleTables)가 리렌더링되면 모든 자식(ScheduleTable)도 리렌더링됩니다.

```js
const ScheduleTable = ({ tableId, schedules, onScheduleTimeClick, onDeleteButtonClick }: Props) => {

  const getColor = (lectureId: string): string => {
    ...
  };
	...
  const getActiveTableId = () => {}
  ...
  const activeTableId = getActiveTableId();
```

**2️⃣ 스케줄 핸들러**

각 스케줄 핸들러가 독립되어있지 않아 스케줄 수정 시 **영향이 없는 다른 스케줄 테이블 컴포넌트 렌더에도 영향**을 주고 있습니다.
```js
<ScheduleTable
  key={`schedule-table-${index}`}
  schedules={schedules}
  tableId={tableId}
  onScheduleTimeClick={(timeInfo) => handleSearchInfoChange({ tableId, ...timeInfo })}
  onDeleteButtonClick={({ day, time }) => setSchedulesMap((prev) => ({
    ...prev,
    [tableId]: prev[tableId].filter(schedule => schedule.day !== day || !schedule.range.includes(time))
  }))}
/>
```

#### (5-2) 해결 방법
**1️⃣ useMemo와 useCallback을 활용한 연산 최적화**

비용이 큰 연산(색상 맵 생성, 고유 ID 추출)을 useMemo로 메모이제이션하고
함수는 useCallback으로 메모이제이션하여 참조 안정성을 확보합니다.
```js
export const useScheduleTable = ({
  schedules,
  onScheduleTimeClick,
  onDeleteButtonClick,
}: UseScheduleTableProps) => {
  // schedules가 변경될 때만 재계산
  const uniqueLectureIds = useMemo(
    () => extractUniqueLectureIds(schedules),
    [schedules]
  );

  // uniqueLectureIds가 변경될 때만 재생성
  const colorMap = useMemo(
    () => createColorMap(uniqueLectureIds),
    [uniqueLectureIds]
  );

  // 참조는 항상 같지만, 최신 값을 사용할 수 있도록 함
  const onScheduleTimeClickRef = useRef(onScheduleTimeClick);
  useEffect(() => {
    onScheduleTimeClickRef.current = onScheduleTimeClick;
  }, [onScheduleTimeClick]);

  const onDeleteButtonClickRef = useRef(onDeleteButtonClick);
  useEffect(() => {
    onDeleteButtonClickRef.current = onDeleteButtonClick;
  }, [onDeleteButtonClick]);

  // 의존성이 없으므로 항상 같은 참조 유지
  const handleCellClick = useCallback(
    (day: string, time: number) => {
      onScheduleTimeClickRef.current?.({ day, time });
    },
    []  // 빈 의존성 배열로 항상 같은 함수 참조 유지
  );

  // schedules가 변경될 때만 재생성
  const deleteHandlers = useMemo(() => {
    return schedules.map((schedule) => {
      return () =>
        onDeleteButtonClickRef.current?.({
          day: schedule.day,
          time: schedule.range[0],
        });
    });
  }, [schedules]);

  // schedules나 colorMap이 변경될 때만 재계산
  const scheduleBgs = useMemo(() => {
    return schedules.map((schedule) =>
      getScheduleColor(schedule.lecture.id, colorMap)
    );
  }, [schedules, colorMap]);

  return {
    scheduleBgs,
    deleteHandlers,
    handleCellClick,
  };
};
```

**2️⃣ useRef를 활용한 핸들러 참조 안정화**

핸들러 함수를 useRef로 저장하여 참조는 항상 같게 유지하고 useEffect로 핸들러 함수를 업데이트합니다.
```js
const onScheduleTimeClickRef = useRef(onScheduleTimeClick);
useEffect(() => {
  onScheduleTimeClickRef.current = onScheduleTimeClick;
}, [onScheduleTimeClick]);

// 항상 같은 참조를 반환하지만, 최신 함수를 호출
const handleCellClick = useCallback(
  (day: string, time: number) => {
    onScheduleTimeClickRef.current?.({ day, time });
  },
  []  // 의존성이 없어서 항상 같은 참조
);
```

**3️⃣ React.memo를 활용한 컴포넌트 메모이제이션**

ScheduleTable 컴포넌트를 React.memo로 감싸서 props가 변경되지 않으면 리렌더링을 방지하고
커스텀 비교 함수를 제공하여 핸들러 참조 변경은 무시하고 실제 데이터 변경만 감지하도록 합니다.
```js
export default memo(ScheduleTable, (prevProps, nextProps) => {
  // tableId와 schedules 배열 참조가 변경되지 않았으면 리렌더링 방지
  // 핸들러 함수는 참조가 변경될 수 있지만, schedules가 같으면 리렌더링할 필요 없음
  if (
    prevProps.tableId === nextProps.tableId &&
    prevProps.schedules === nextProps.schedules
  ) {
    return true; // props가 같으면 리렌더링 안 함
  }
  return false; // props가 다르면 리렌더링
});
```
### (6) 시간표 블록 드래그&드롭시 렌더링 최적화
처음엔 왜 드래그와 드롭을 나눠서 TODO에 적으셨을지 궁금했습니다.
왜냐하면 결국 같은 이유로 리렌더링이 일어난다고 생각했기 때문입니다.

하지만 진행해보니 다른 원인으로 인한 문제였기 때문에 분리되어있었습니다!

**드래그(Drag)**
- 문제: 드래그 중 상태 변경으로 인한 리렌더링
- 원인: 전역 DndContext 공유 → 모든 시간표가 useDndContext() 구독
- 해결: 각 시간표에 독립적인 DndContext 제공 (1단계로 해결)

**드롭(Drop)**
- 문제: 드롭 후 데이터 변경으로 인한 리렌더링
- 원인: schedulesMap 객체 전체 업데이트 → Context 구독 컴포넌트 전체 리렌더링
- 해결: 세밀한 Context 업데이트 + React.memo + 핸들러 안정화 (여러 단계 필요)

#### (6-1) 기존 문제점
시간표 블록을 드래그하는동안 다른 시간표 컴포넌트도 리렌더링되고 다른 시간대로 이동하여 드롭했을 때도 모든 시간표가 함께 리렌더링되는 현상이 발생했습니다.
<img width="3000" height="1675" alt="image" src="https://github.com/user-attachments/assets/8d1d18d6-bbd6-4173-98dd-b57ad21636ef" />

게다가 dev tools로 보여지는 것뿐만 아니라 사용자가 직접 조작하는 인터랙션 구간에서 끊김이 느껴진다는 점이 가장 큰 문제였습니다.

**1️⃣ 전역 DnD Context 공유**

모든 시간표가 하나의 DnD Context를 공유하고 있었기 때문에 한 시간표에서 드래그 이벤트가 발생하면 모든 시간표가 useDndContext를 구독한 상태로 함께 리렌더링되고 있었습니다.
```js
<ScheduleDndProvider>
  <ScheduleTables />
</ScheduleDndProvider>
```
즉, 한 곳의 인터랙션이 전체로 전파되는 구조였습니다.

**2️⃣ schedulesMap 객체 전체 업데이트**

특정 시간표만 변경되었음에도 불구하고 schedulesMap 객체 전체가 새로 생성되면서 => 이를 구독하는 모든 컴포넌트가 리렌더링되는 문제가 있었습니다.
```js
setSchedulesMap((prev) => ({
  ...prev,
  [tableId]: newSchedules,
}));
```

#### (6-2) 해결 방법
최종 보스같은 느낌이 들어서 차근차근 하나씩 적용해보면서 개선시켜나갔습니다.

**1️⃣단계: 시간표별 독립적인 DnD Context 제공**

일단 제일 문제라고 생각했던 모든 시간표가 같은 context를 공유한다는 부분을 개선하기 위해
각 시간표별 독립적인 context를 가질 수 있도록 했습니다.
```js
{tableIds.map((tableId) => (
  <ScheduleDndProvider tableId={tableId}>
    <ScheduleTable ... />
  </ScheduleDndProvider>
))}
```

**결과**
- 드래그 중에는 해당 시간표만 리렌더링됨
- 다른 시간표는 DnD 이벤트의 영향을 받지 않음
하지만 드롭 이후에는 여전히 다른 시간표까지 리렌더링되는 문제가 남아 있었습니다.

**2️⃣단계: Context 구조 개선 - 시간표 단위 상태 관리**

각 시간표의 schedules를 독립적으로 업데이트할 수 있도록 Context 구조를 개선했고 변경되지 않은 시간표의 schedules 배열은 참조를 유지하도록 했습니다.
```js
const setSchedules = useCallback((tableId, schedules) => {
  setSchedulesMap((prev) => {
    if (prev[tableId] === schedules) return prev;
    return {
      ...prev,
      [tableId]: schedules,
    };
  });
}, []);
```

**결과**
- 변경된 시간표의 schedules만 갱신됨
- 불필요한 schedules 배열 생성 감소
하지만 여전히 상위 컴포넌트에서 schedulesMap 객체 자체가 변경되면서 렌더링 체인이 완전히 끊어지지는 않았습니다.

**3️⃣단계: 시간표 컴포넌트 단위 분리**

각 시간표를 독립적인 컴포넌트로 분리하고 schedules 배열 참조만을 기준으로 메모이제이션했습니다.
```js
const ScheduleTableItem = memo(({ tableId, schedules }) => {
  return (
    <ScheduleDndProvider tableId={tableId}>
      <ScheduleTable schedules={schedules} />
    </ScheduleDndProvider>
  );
}, (prev, next) =>
  prev.tableId === next.tableId &&
  prev.schedules === next.schedules
);
```

**결과**
- 변경되지 않은 시간표는 리렌더링되지 않음
- 드롭 시에도 영향을 받는 범위가 명확해짐

### (7) 추가적인 개선 - 접근성, SEO
#### (7-1) 기존 문제점
**1️⃣ 색상 대비**

chakra는 반성하세요.
버튼 배경 색상과 텍스트 색상 대비가 충분하지 않은 문제가 있었습니다.
<img width="834" height="609" alt="image" src="https://github.com/user-attachments/assets/e46c1d40-b24d-4835-99b3-dd16c516e612" />

**2️⃣ main 태그 부재**

main 태그의 부재로 스크린 리더 사용자들에게 웹 페이지 이용 시 불편을 줄 수 있습니다.
<img width="808" height="347" alt="image" src="https://github.com/user-attachments/assets/6aa3ce72-24dd-408c-bd19-397decb7d360" />

#### (7-2) 해결방법
background: black, color: white로 버튼 스타일을 변경하여 색상 대비를 보장합니다!
```js
  <Button
    colorScheme="blackAlpha"
    bg="blackAlpha.900"
    color="white"
    _hover={{ bg: "blackAlpha.800" }}
    onClick={() => onSearchInfoChange(tableId)}
  >
    시간표 추가
  </Button>
```

main 태그로 감싸줍니다!
```js
<main>
  <ScheduleTables/>
</main>
```

100% 완료입니다!
<img width="559" height="153" alt="image" src="https://github.com/user-attachments/assets/b249f0ca-6fba-42d3-ba36-8725da1825fc" />

## 리뷰 받고 싶은 내용
### 1. 실무에서의 성능 최적화 진행 방식에 대해 궁금합니다
성능 최적화에 대한 기준이나 방향성은 어느 정도 감이 잡혔지만,  
실무에서는 성능 최적화를 어떤 방식으로 진행하는지 궁금합니다.

- 기본 구현 단계부터 성능을 염두에 두고 작업하는지
- 아니면 성능 이슈가 발견되었을 때 별도의 task나 브랜치를 생성해 진행하는지
- 실제로는 어느 수준까지를 “최적화가 필요하다”고 판단하는지

실무에서의 일반적인 흐름을 알고 싶습니다.

### 2. 성능 최적화를 위한 CI 설계에 대해 궁금합니다
이번 과제에서 성능 최적화를 위해 CI 워크플로우를 직접 설계해보았습니다.
다만 이 과정에서 다음과 같은 고민이 들었습니다.

- 실무에서도 성능 측정을 위한 CI가 별도로 존재하는지
- 성능 CI를 항상 자동으로 돌리는 것이 실제로 효율적인지
- CI 설계 및 유지보수 역시 일반적으로 개발자의 역할로 보는지

실무에서는 이러한 부분을 어떻게 운영하는지 궁금합니다.


<!--
피드백 받고 싶은 내용을 구체적으로 남겨주세요
모호한 요청은 피드백을 남기기 어렵습니다.

참고링크: https://chatgpt.com/share/675b6129-515c-8001-ba72-39d0fa4c7b62

모호한 요청의 예시)
- 코드 스타일에 대한 피드백 부탁드립니다.
- 코드 구조에 대한 피드백 부탁드립니다.
- 개념적인 오류에 대한 피드백 부탁드립니다.
- 추가 구현이 필요한 부분에 대한 피드백 부탁드립니다.

구체적인 요청의 예시)
- 현재 함수와 변수명을 보면 직관성이 떨어지는 것 같습니다. 함수와 변수를 더 명확하게 이름 지을 수 있는 방법에 대해 조언해주실 수 있나요?
- 현재 파일 단위로 코드가 분리되어 있지만, 모듈화나 계층화가 부족한 것 같습니다. 어떤 기준으로 클래스를 분리하거나 모듈화를 진행하면 유지보수에 도움이 될까요?
- MVC 패턴을 따르려고 했는데, 제가 구현한 구조가 MVC 원칙에 맞게 잘 구성되었는지 검토해주시고, 보완할 부분을 제안해주실 수 있을까요?
- 컴포넌트 간의 의존성이 높아져서 테스트하기 어려운 상황입니다. 의존성을 낮추고 테스트 가능성을 높이는 구조 개선 방안이 있을까요?
-->


---

자세한 구현 과정과 회고는 아래 블로그에 정리했습니다! 😊

[10주차_코드 관점의 성능 최적화](https://chaeng03.tistory.com/entry/%ED%95%AD%ED%95%B499-10%EC%A3%BC%EC%B0%A8%EC%BD%94%EB%93%9C-%EA%B4%80%EC%A0%90%EC%9D%98-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94)

[WIL 10주차_Chapter 4-2. 코드 관점의 성능 최적화](https://chaeng03.tistory.com/entry/%ED%95%AD%ED%95%B499-WIL-10%EC%A3%BC%EC%B0%A8Chapter-4-2-%EC%BD%94%EB%93%9C-%EA%B4%80%EC%A0%90%EC%9D%98-%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94)
