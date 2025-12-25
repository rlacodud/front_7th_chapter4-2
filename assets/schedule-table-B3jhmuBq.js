const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/SearchDialog-C7c1vYJ6.js","assets/react-core-DvpziYFk.js","assets/chakra-ui-3tUd-FUe.js","assets/rolldown-runtime-CINmCwk_.js","assets/axios-CK9JGW64.js"])))=>i.map(i=>d[i]);
import { f as __toESM } from "./rolldown-runtime-CINmCwk_.js";
import { V as require_react } from "./chakra-ui-3tUd-FUe.js";
import { E as GridItem, F as Grid, H as Flex, L as ButtonGroup, M as Button, N as Box, Q as require_jsx_runtime, c as Text, d as Heading, p as Stack, r as PopoverTrigger, s as PopoverContent, t as PopoverCloseButton, u as PopoverBody, v as PopoverArrow, w as Popover } from "./react-core-DvpziYFk.js";
import { e as CSS } from "./dnd-kit-B7m6WuA7.js";
import { c as DndContext, d as PointerSensor, e as useDndContext, f as useDraggable, g as useSensor, h as useSensors } from "./react-dom-Mqi_vPhy.js";

//#region src/dummyScheduleMap.ts
var dummyScheduleMap_default = {
	"schedule-1": [
		{
			"day": "월",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6
			],
			"room": "2공521",
			"lecture": {
				"id": "529540",
				"title": "SW융합코딩1",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "월1~6(2공521)",
				"grade": 1
			}
		},
		{
			"day": "화",
			"range": [
				1,
				2,
				3
			],
			"room": "미디어509",
			"lecture": {
				"id": "527790",
				"title": "객체지향프로그래밍(SW)",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "화1~3(미디어509)<p>목1~3(미디어509)",
				"grade": 2
			}
		},
		{
			"day": "목",
			"range": [
				1,
				2,
				3
			],
			"room": "미디어509",
			"lecture": {
				"id": "527790",
				"title": "객체지향프로그래밍(SW)",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "화1~3(미디어509)<p>목1~3(미디어509)",
				"grade": 2
			}
		},
		{
			"day": "수",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6
			],
			"room": "소프트304",
			"lecture": {
				"id": "540970",
				"title": "파이썬프로그래밍(SW융합)",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "수1~6(소프트304)",
				"grade": 2
			}
		},
		{
			"day": "금",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6
			],
			"room": "2공524",
			"lecture": {
				"id": "359210",
				"title": "선형대수",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "금1~6(2공524)",
				"grade": 2
			}
		},
		{
			"day": "목",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17,
				18
			],
			"room": "소프트414",
			"lecture": {
				"id": "548310",
				"title": "실무중심종합설계프로젝트(티맥스)",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "목1~18(소프트414)<p>토1~18(소프트414)",
				"grade": 3
			}
		},
		{
			"day": "토",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11,
				12,
				13,
				14,
				15,
				16,
				17,
				18
			],
			"room": "소프트414",
			"lecture": {
				"id": "548310",
				"title": "실무중심종합설계프로젝트(티맥스)",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "목1~18(소프트414)<p>토1~18(소프트414)",
				"grade": 3
			}
		}
	],
	"schedule-2": [
		{
			"day": "월",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6
			],
			"room": "국제205_PC",
			"lecture": {
				"id": "525770",
				"title": "자료구조기초및실습",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "월1~6(국제205_PC)",
				"grade": 2
			}
		},
		{
			"day": "화",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6
			],
			"room": "소프트227",
			"lecture": {
				"id": "372460",
				"title": "알고리즘",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "화1~6(소프트227)",
				"grade": 3
			}
		},
		{
			"day": "수",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9
			],
			"room": "2공524",
			"lecture": {
				"id": "388600",
				"title": "인공지능",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "수1~9(2공524)",
				"grade": 3
			}
		},
		{
			"day": "목",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6
			],
			"room": "소프트516",
			"lecture": {
				"id": "524820",
				"title": "오픈소스SW활용",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "목1~6(소프트516)",
				"grade": 3
			}
		},
		{
			"day": "금",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11
			],
			"room": "소프트414",
			"lecture": {
				"id": "548300",
				"title": "인공지능입문및실습(티맥스)",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "금1~11(소프트414)",
				"grade": 3
			}
		},
		{
			"day": "토",
			"range": [1, 2],
			"room": "",
			"lecture": {
				"id": "451150",
				"title": "노래-목소리3",
				"credits": "1(0)",
				"major": "음악·예술대학<p>공연영화학부 뮤지컬전공",
				"schedule": "토1~2",
				"grade": 3
			}
		}
	],
	"schedule-3": [
		{
			"day": "월",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11
			],
			"room": "소프트414",
			"lecture": {
				"id": "548290",
				"title": "운영체제및실습(티맥스)",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "월1~11(소프트414)",
				"grade": 4
			}
		},
		{
			"day": "화",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9,
				10,
				11
			],
			"room": "소프트414",
			"lecture": {
				"id": "548280",
				"title": "데이터베이스와SQL실습(티맥스)",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합경제경영전공",
				"schedule": "화1~11(소프트414)",
				"grade": 4
			}
		},
		{
			"day": "수",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6
			],
			"room": "소프트406",
			"lecture": {
				"id": "366770",
				"title": "시스템분석및설계",
				"credits": "3(0)",
				"major": "SW융합대학<p>SW융합학부<p>SW융합바이오전공",
				"schedule": "수1~6(소프트406)",
				"grade": 4
			}
		},
		{
			"day": "목",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6
			],
			"room": "미디어403",
			"lecture": {
				"id": "539800",
				"title": "캡스톤디자인(정보통계)",
				"credits": "3(0)",
				"major": "SW융합대학<p>정보통계학과",
				"schedule": "목1~6(미디어403)",
				"grade": 4
			}
		},
		{
			"day": "금",
			"range": [1, 2],
			"room": "치114",
			"lecture": {
				"id": "394090",
				"title": "임상보철학2",
				"credits": "1(0)",
				"major": "치과대학<p>치의학과",
				"schedule": "금1~2(치114)",
				"grade": 4
			}
		},
		{
			"day": "토",
			"range": [
				1,
				2,
				3,
				4,
				5,
				6
			],
			"room": "",
			"lecture": {
				"id": "550040",
				"title": "반도체기초공학및산업의이해",
				"credits": "3(0)",
				"major": "공과대학<p>반도체WAVE융합전공",
				"schedule": "토1~6",
				"grade": 4
			}
		}
	],
	"schedule-4": [
		{
			"day": "월",
			"range": [
				11,
				12,
				13,
				14,
				15,
				16
			],
			"room": "예323",
			"lecture": {
				"id": "343070",
				"title": "문학사세미나",
				"credits": "3(0)",
				"major": "예술대학<p>문예창작과",
				"schedule": "월11~16(예323)",
				"grade": 1
			}
		},
		{
			"day": "화",
			"range": [
				3,
				4,
				5,
				6,
				7,
				8
			],
			"room": "예018",
			"lecture": {
				"id": "361960",
				"title": "소설창작세미나1",
				"credits": "3(0)",
				"major": "예술대학<p>문예창작과",
				"schedule": "화3~8(예018)",
				"grade": 3
			}
		},
		{
			"day": "수",
			"range": [
				3,
				4,
				5,
				6,
				7,
				8
			],
			"room": "예술관D동207",
			"lecture": {
				"id": "533510",
				"title": "영상문학의이론과창작",
				"credits": "3(0)",
				"major": "예술대학<p>문예창작과",
				"schedule": "수3~8(예술관D동207)",
				"grade": 2
			}
		},
		{
			"day": "목",
			"range": [
				3,
				4,
				5,
				6,
				7,
				8
			],
			"room": "예술관D동308",
			"lecture": {
				"id": "533520",
				"title": "비평창작연습",
				"credits": "3(0)",
				"major": "예술대학<p>문예창작과",
				"schedule": "목3~8(예술관D동308)",
				"grade": 3
			}
		},
		{
			"day": "금",
			"range": [
				3,
				4,
				5,
				6,
				7,
				8
			],
			"room": "예술관D동308",
			"lecture": {
				"id": "481130",
				"title": "소설창작연습",
				"credits": "3(0)",
				"major": "예술대학<p>문예창작과",
				"schedule": "금3~8(예술관D동308)",
				"grade": 2
			}
		}
	],
	"schedule-5": [
		{
			"day": "월",
			"range": [
				3,
				4,
				5,
				6
			],
			"room": "의228",
			"lecture": {
				"id": "432030",
				"title": "해부학",
				"credits": "2(0)",
				"major": "간호대학<p>간호학과",
				"schedule": "월3~6(의228)",
				"grade": 1
			}
		},
		{
			"day": "화",
			"range": [
				1,
				2,
				3
			],
			"room": "의228",
			"lecture": {
				"id": "323070",
				"title": "기본간호학1",
				"credits": "3(0)",
				"major": "간호대학<p>간호학과",
				"schedule": "화1~3(의228)<p>목10~12(의228)",
				"grade": 2
			}
		},
		{
			"day": "목",
			"range": [
				7,
				8,
				9
			],
			"room": "의228",
			"lecture": {
				"id": "323070",
				"title": "기본간호학1",
				"credits": "3(0)",
				"major": "간호대학<p>간호학과",
				"schedule": "화1~3(의228)<p>목10~12(의228)",
				"grade": 2
			}
		},
		{
			"day": "수",
			"range": [
				1,
				2,
				3,
				4
			],
			"room": "의230",
			"lecture": {
				"id": "411690",
				"title": "지역사회간호학3",
				"credits": "2(0)",
				"major": "간호대학<p>간호학과",
				"schedule": "수1~4(의230)",
				"grade": 4
			}
		},
		{
			"day": "금",
			"range": [
				1,
				2,
				3
			],
			"room": "인521",
			"lecture": {
				"id": "409440",
				"title": "중급일본어강독1",
				"credits": "3(0)",
				"major": "외국어대학<p>아시아중동학부 일본학전공",
				"schedule": "화15~17(인521)<p>목8~10(인424)",
				"grade": 2
			}
		},
		{
			"day": "목",
			"range": [
				1,
				2,
				3
			],
			"room": "인424",
			"lecture": {
				"id": "409440",
				"title": "중급일본어강독1",
				"credits": "3(0)",
				"major": "외국어대학<p>아시아중동학부 일본학전공",
				"schedule": "화15~17(인521)<p>목8~10(인424)",
				"grade": 2
			}
		}
	],
	"schedule-6": [
		{
			"day": "화",
			"range": [9, 10],
			"room": "음악133",
			"lecture": {
				"id": "471870",
				"title": "연주A",
				"credits": "1(0)",
				"major": "음악·예술대학<p>음악학부 기악전공(피아노)",
				"schedule": "화9~10(음악133)",
				"grade": 1
			}
		},
		{
			"day": "토",
			"range": [3, 4],
			"room": "",
			"lecture": {
				"id": "502420",
				"title": "피아노실기A",
				"credits": "1(0)",
				"major": "음악·예술대학<p>음악학부 기악전공(피아노)",
				"schedule": "토3~4",
				"grade": 1
			}
		},
		{
			"day": "토",
			"range": [7, 8],
			"room": "",
			"lecture": {
				"id": "502420",
				"title": "피아노실기A",
				"credits": "1(0)",
				"major": "음악·예술대학<p>음악학부 기악전공(피아노)",
				"schedule": "토7~8",
				"grade": 1
			}
		},
		{
			"day": "월",
			"range": [
				13,
				14,
				15,
				16
			],
			"room": "음악104",
			"lecture": {
				"id": "318720",
				"title": "국악사1",
				"credits": "2(0)",
				"major": "음악·예술대학<p>음악학부 기악전공",
				"schedule": "월13~16(음악104)",
				"grade": 2
			}
		},
		{
			"day": "목",
			"range": [
				9,
				10,
				11,
				12
			],
			"room": "음악106",
			"lecture": {
				"id": "358200",
				"title": "서양음악사1",
				"credits": "2(0)",
				"major": "음악·예술대학<p>음악학부 기악전공",
				"schedule": "목9~12(음악106)",
				"grade": 2
			}
		},
		{
			"day": "화",
			"range": [
				1,
				2,
				3,
				4
			],
			"room": "음악105",
			"lecture": {
				"id": "367110",
				"title": "시창청음",
				"credits": "2(0)",
				"major": "음악·예술대학<p>음악학부 기악전공",
				"schedule": "화5~8(음악105)",
				"grade": 1
			}
		},
		{
			"day": "금",
			"range": [
				5,
				6,
				7,
				8
			],
			"room": "음악105",
			"lecture": {
				"id": "358200",
				"title": "서양음악사1",
				"credits": "2(0)",
				"major": "음악·예술대학<p>음악학부 기악전공",
				"schedule": "금5~8(음악105)",
				"grade": 2
			}
		}
	]
};

//#endregion
//#region src/ScheduleContext.tsx
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
const ScheduleContext = (0, import_react.createContext)(void 0);
const useScheduleContext = () => {
	const context = (0, import_react.useContext)(ScheduleContext);
	if (context === void 0) throw new Error("useSchedule must be used within a ScheduleProvider");
	return context;
};
const ScheduleProvider = ({ children }) => {
	const [schedulesMap, setSchedulesMap] = (0, import_react.useState)(dummyScheduleMap_default);
	const setSchedules = (0, import_react.useCallback)((tableId, schedules) => {
		setSchedulesMap((prev) => {
			if (prev[tableId] === schedules) return prev;
			return {
				...prev,
				[tableId]: schedules
			};
		});
	}, []);
	const getSchedules = (tableId) => {
		return schedulesMap[tableId] || [];
	};
	const addTable = (0, import_react.useCallback)((tableId, schedules) => {
		setSchedulesMap((prev) => ({
			...prev,
			[tableId]: schedules
		}));
	}, []);
	const removeTable = (0, import_react.useCallback)((tableId) => {
		setSchedulesMap((prev) => {
			const newMap = { ...prev };
			delete newMap[tableId];
			return newMap;
		});
	}, []);
	const getAllTableIds = (0, import_react.useCallback)(() => {
		return Object.keys(schedulesMap);
	}, [schedulesMap]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleContext.Provider, {
		value: {
			schedulesMap,
			setSchedules,
			getSchedules,
			addTable,
			removeTable,
			getAllTableIds
		},
		children
	});
};

//#endregion
//#region src/utils/scheduleUtils.ts
/**
* 고유한 강의 ID 목록을 추출합니다.
*/
const extractUniqueLectureIds = (schedules) => {
	return [...new Set(schedules.map(({ lecture }) => lecture.id))];
};
/**
* 강의 ID에 대한 색상 맵을 생성합니다.
*/
const createColorMap = (lectureIds) => {
	const colors = [
		"#fdd",
		"#ffd",
		"#dff",
		"#ddf",
		"#fdf",
		"#dfd"
	];
	const map = /* @__PURE__ */ new Map();
	lectureIds.forEach((lectureId, index) => {
		map.set(lectureId, colors[index % colors.length]);
	});
	return map;
};
/**
* 강의 ID에 해당하는 색상을 가져옵니다.
*/
const getScheduleColor = (lectureId, colorMap) => {
	return colorMap.get(lectureId) || "#fdd";
};
/**
* 스케줄에서 특정 시간의 스케줄을 필터링합니다.
*/
const filterScheduleByTime = (schedules, day, time) => {
	return schedules.filter((schedule) => schedule.day !== day || !schedule.range.includes(time));
};
/**
* 새로운 시간표 ID를 생성합니다.
*/
const generateTableId = () => {
	return `schedule-${Date.now()}`;
};

//#endregion
//#region src/hooks/useScheduleTables.ts
/**
* 시간표 목록 관리 비즈니스 로직을 담당하는 훅
*/
const useScheduleTables = () => {
	const { schedulesMap, getAllTableIds, addTable, removeTable } = useScheduleContext();
	const [searchInfo, setSearchInfo] = (0, import_react.useState)(null);
	const tableIds = (0, import_react.useMemo)(() => getAllTableIds(), [getAllTableIds]);
	const disabledRemoveButton = tableIds.length === 1;
	const duplicate = (0, import_react.useCallback)((targetId) => {
		const targetSchedules = schedulesMap[targetId] || [];
		addTable(generateTableId(), [...targetSchedules]);
	}, [schedulesMap, addTable]);
	const remove = (0, import_react.useCallback)((targetId) => {
		removeTable(targetId);
	}, [removeTable]);
	const handleSearchInfoChange = (0, import_react.useCallback)((timeInfo) => {
		setSearchInfo(timeInfo);
	}, []);
	const handleCloseSearchDialog = (0, import_react.useCallback)(() => {
		setSearchInfo(null);
	}, []);
	return {
		tableIds,
		disabledRemoveButton,
		searchInfo,
		duplicate,
		remove,
		handleSearchInfoChange,
		handleCloseSearchDialog
	};
};

//#endregion
//#region src/hooks/useScheduleHandlers.ts
/**
* 시간표 관련 핸들러를 관리하는 훅
*/
const useScheduleHandlers = ({ tableIds, schedulesMap }) => {
	const { setSchedules } = useScheduleContext();
	const deleteHandlers = (0, import_react.useMemo)(() => {
		const handlers = {};
		tableIds.forEach((tableId) => {
			handlers[tableId] = ({ day, time }) => {
				const currentSchedules = schedulesMap[tableId] || [];
				const newSchedules = filterScheduleByTime(currentSchedules, day, time);
				if (newSchedules.length !== currentSchedules.length) setSchedules(tableId, newSchedules);
			};
		});
		return handlers;
	}, [
		tableIds,
		schedulesMap,
		setSchedules
	]);
	return { deleteHandlers };
};

//#endregion
//#region src/constants.ts
const DAY_LABELS = [
	"월",
	"화",
	"수",
	"목",
	"금",
	"토"
];
const CellSize = {
	WIDTH: 80,
	HEIGHT: 30
};
const 초 = 1e3;
const 분 = 60 * 초;

//#endregion
//#region src/utils/dndUtils.ts
/**
* 드래그 중 스냅 모디파이어를 생성합니다.
*/
function createSnapModifier() {
	return ({ transform, containerNodeRect, draggingNodeRect }) => {
		const containerTop = containerNodeRect?.top ?? 0;
		const containerLeft = containerNodeRect?.left ?? 0;
		const containerBottom = containerNodeRect?.bottom ?? 0;
		const containerRight = containerNodeRect?.right ?? 0;
		const { top = 0, left = 0, bottom = 0, right = 0 } = draggingNodeRect ?? {};
		const minX = containerLeft - left + 120 + 1;
		const minY = containerTop - top + 40 + 1;
		const maxX = containerRight - right;
		const maxY = containerBottom - bottom;
		return {
			...transform,
			x: Math.min(Math.max(Math.round(transform.x / CellSize.WIDTH) * CellSize.WIDTH, minX), maxX),
			y: Math.min(Math.max(Math.round(transform.y / CellSize.HEIGHT) * CellSize.HEIGHT, minY), maxY)
		};
	};
}
/**
* 드래그 종료 시 스케줄을 업데이트하는 비즈니스 로직
*/
const updateScheduleOnDragEnd = (event, currentSchedules) => {
	const { active, delta } = event;
	const { x, y } = delta;
	const index = Number(String(active.id).split(":")[1]);
	const schedule = currentSchedules[index];
	const nowDayIndex = DAY_LABELS.indexOf(schedule.day);
	const moveDayIndex = Math.floor(x / 80);
	const moveTimeIndex = Math.floor(y / 30);
	const newDay = DAY_LABELS[nowDayIndex + moveDayIndex];
	const newRange = schedule.range.map((time) => time + moveTimeIndex);
	const hasChanged = schedule.day !== newDay || schedule.range.length !== newRange.length || schedule.range.some((time, i) => time !== newRange[i]);
	if (!hasChanged) return currentSchedules;
	return currentSchedules.map((targetSchedule, targetIndex) => {
		if (targetIndex !== index) return targetSchedule;
		return {
			...targetSchedule,
			day: newDay,
			range: newRange
		};
	});
};

//#endregion
//#region src/ScheduleDndProvider.tsx
const modifiers = [createSnapModifier()];
/**
* 각 시간표별로 독립적인 DnD Context를 제공하는 Provider
* 한 테이블에서 드래그할 때 다른 테이블은 리렌더링되지 않도록 최적화
*/
function ScheduleDndProvider({ children, tableId }) {
	const { getSchedules, setSchedules } = useScheduleContext();
	const sensors = useSensors(useSensor(PointerSensor, { activationConstraint: { distance: 8 } }));
	const handleDragEnd = (event) => {
		const currentSchedules = getSchedules(tableId);
		const newSchedules = updateScheduleOnDragEnd(event, currentSchedules);
		setSchedules(tableId, newSchedules);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DndContext, {
		sensors,
		onDragEnd: handleDragEnd,
		modifiers,
		children
	});
}

//#endregion
//#region src/hooks/useScheduleTable.ts
/**
* 시간표 관련 비즈니스 로직을 관리하는 훅
*/
const useScheduleTable = ({ schedules, onScheduleTimeClick, onDeleteButtonClick }) => {
	const onScheduleTimeClickRef = (0, import_react.useRef)(onScheduleTimeClick);
	(0, import_react.useEffect)(() => {
		onScheduleTimeClickRef.current = onScheduleTimeClick;
	}, [onScheduleTimeClick]);
	const onDeleteButtonClickRef = (0, import_react.useRef)(onDeleteButtonClick);
	(0, import_react.useEffect)(() => {
		onDeleteButtonClickRef.current = onDeleteButtonClick;
	}, [onDeleteButtonClick]);
	const uniqueLectureIds = (0, import_react.useMemo)(() => extractUniqueLectureIds(schedules), [schedules]);
	const colorMap = (0, import_react.useMemo)(() => createColorMap(uniqueLectureIds), [uniqueLectureIds]);
	const handleCellClick = (0, import_react.useCallback)((day, time) => {
		onScheduleTimeClickRef.current?.({
			day,
			time
		});
	}, []);
	const prevHandlersRef = (0, import_react.useRef)([]);
	const prevSchedulesRef = (0, import_react.useRef)([]);
	const deleteHandlers = (0, import_react.useMemo)(() => {
		if (schedules === prevSchedulesRef.current) return prevHandlersRef.current;
		const newHandlers = schedules.map((schedule, index) => {
			const prevSchedule = prevSchedulesRef.current[index];
			const prevHandler = prevHandlersRef.current[index];
			if (prevSchedule === schedule && prevHandler) return prevHandler;
			return () => onDeleteButtonClickRef.current?.({
				day: schedule.day,
				time: schedule.range[0]
			});
		});
		prevHandlersRef.current = newHandlers;
		prevSchedulesRef.current = schedules;
		return newHandlers;
	}, [schedules]);
	const prevBgsRef = (0, import_react.useRef)([]);
	const prevSchedulesForBgsRef = (0, import_react.useRef)([]);
	const scheduleBgs = (0, import_react.useMemo)(() => {
		if (schedules === prevSchedulesForBgsRef.current) return prevBgsRef.current;
		const newBgs = schedules.map((schedule, index) => {
			const prevSchedule = prevSchedulesForBgsRef.current[index];
			const prevBg = prevBgsRef.current[index];
			if (prevSchedule === schedule && prevBg) return prevBg;
			return getScheduleColor(schedule.lecture.id, colorMap);
		});
		prevBgsRef.current = newBgs;
		prevSchedulesForBgsRef.current = schedules;
		return newBgs;
	}, [schedules, colorMap]);
	return {
		scheduleBgs,
		deleteHandlers,
		handleCellClick
	};
};

//#endregion
//#region src/components/ScheduleTable/DragOutline.tsx
/**
* 드래그 중 outline 표시를 위한 컴포넌트
* useDndContext를 구독하여 드래그 중에만 리렌더링되도록 최적화
*/
const DragOutline = (0, import_react.memo)(() => {
	const dndContext = useDndContext();
	const isDragging = dndContext.active !== null;
	if (!isDragging) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		outline: "5px dashed",
		outlineColor: "blue.300",
		pointerEvents: "none",
		zIndex: 1
	});
});

//#endregion
//#region src/utils.ts
const fill2 = (n) => `0${n}`.substr(-2);
const parseHnM = (current) => {
	const date = new Date(current);
	return `${fill2(date.getHours())}:${fill2(date.getMinutes())}`;
};
const getTimeRange = (value) => {
	const [start, end] = value.split("~").map(Number);
	if (end === void 0) return [start];
	return Array(end - start + 1).fill(start).map((v, k) => v + k);
};
const parseSchedule = (schedule) => {
	const schedules = schedule.split("<p>");
	return schedules.map((schedule$1) => {
		const reg = /^([가-힣])(\d+(~\d+)?)(.*)/;
		const [day] = schedule$1.split(/(\d+)/);
		const range = getTimeRange(schedule$1.replace(reg, "$2"));
		const room = schedule$1.replace(reg, "$4")?.replace(/\(|\)/g, "");
		return {
			day,
			range,
			room
		};
	});
};

//#endregion
//#region src/utils/timeUtils.ts
/**
* 시간표에 표시할 시간 슬롯 목록을 생성합니다.
*/
const generateTimeSlots = () => {
	return [...Array(18).fill(0).map((v, k) => v + k * 30 * 분).map((v) => `${parseHnM(v)}~${parseHnM(v + 30 * 분)}`), ...Array(6).fill(540 * 분).map((v, k) => v + k * 55 * 분).map((v) => `${parseHnM(v)}~${parseHnM(v + 50 * 분)}`)];
};

//#endregion
//#region src/components/ScheduleTable/DayHeader.tsx
/**
* 요일 헤더를 별도 컴포넌트로 분리하여 메모이제이션
*/
const DayHeader = (0, import_react.memo)(() => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridItem, {
		borderColor: "gray.300",
		bg: "gray.100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
			justifyContent: "center",
			alignItems: "center",
			h: "full",
			w: "full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				fontWeight: "bold",
				children: "교시"
			})
		})
	}, "교시"), DAY_LABELS.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridItem, {
		borderLeft: "1px",
		borderColor: "gray.300",
		bg: "gray.100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
			justifyContent: "center",
			alignItems: "center",
			h: "full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
				fontWeight: "bold",
				children: day
			})
		})
	}, day))] });
});

//#endregion
//#region src/components/ScheduleTable/ScheduleCell.tsx
/**
* 각 셀을 별도 컴포넌트로 분리하여 메모이제이션
* 드롭 후에도 변경되지 않은 셀은 리렌더링되지 않도록 최적화
*/
const ScheduleCell = (0, import_react.memo)(({ day, timeIndex, onClick }) => {
	const onClickRef = (0, import_react.useRef)(onClick);
	(0, import_react.useEffect)(() => {
		onClickRef.current = onClick;
	}, [onClick]);
	const handleClick = (0, import_react.useCallback)(() => {
		onClickRef.current(day, timeIndex + 1);
	}, [day, timeIndex]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridItem, {
		borderWidth: "1px 0 0 1px",
		borderColor: "gray.300",
		bg: timeIndex > 17 ? "gray.100" : "white",
		cursor: "pointer",
		_hover: { bg: "yellow.100" },
		onClick: handleClick
	});
}, (prevProps, nextProps) => {
	return prevProps.day === nextProps.day && prevProps.timeIndex === nextProps.timeIndex;
});

//#endregion
//#region src/components/ScheduleTable/TimeBlock.tsx
/**
* 시간 블럭을 별도 컴포넌트로 분리하여 메모이제이션
*/
const TimeBlock = (0, import_react.memo)(({ time, timeIndex, onCellClick }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GridItem, {
		borderTop: "1px solid",
		borderColor: "gray.300",
		bg: timeIndex > 17 ? "gray.200" : "gray.100",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
			justifyContent: "center",
			alignItems: "center",
			h: "full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
				fontSize: "xs",
				children: [
					fill2(timeIndex + 1),
					" (",
					time,
					")"
				]
			})
		})
	}), DAY_LABELS.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleCell, {
		day,
		timeIndex,
		onClick: onCellClick
	}, `${day}-${timeIndex + 2}`))] });
}, (prevProps, nextProps) => {
	return prevProps.time === nextProps.time && prevProps.timeIndex === nextProps.timeIndex;
});

//#endregion
//#region src/components/ScheduleTable/ScheduleGrid.tsx
const TIMES = generateTimeSlots();
/**
* Grid를 별도 컴포넌트로 분리하여 드래그 중 불필요한 리렌더링 방지
*/
const ScheduleGrid = (0, import_react.memo)(({ onCellClick }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Grid, {
		templateColumns: `120px repeat(${DAY_LABELS.length}, ${CellSize.WIDTH}px)`,
		templateRows: `40px repeat(${TIMES.length}, ${CellSize.HEIGHT}px)`,
		bg: "white",
		fontSize: "sm",
		textAlign: "center",
		outline: "1px solid",
		outlineColor: "gray.300",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayHeader, {}), TIMES.map((time, timeIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimeBlock, {
			time,
			timeIndex,
			onCellClick
		}, `시간-${timeIndex + 1}`))]
	});
}, () => {
	return true;
});

//#endregion
//#region src/components/ScheduleTable/DraggableSchedule.tsx
/**
* 드래그 가능한 스케줄 블록 컴포넌트
*/
const DraggableSchedule = (0, import_react.memo)(({ id, data, bg, onDeleteButtonClick }) => {
	const onDeleteButtonClickRef = (0, import_react.useRef)(onDeleteButtonClick);
	(0, import_react.useEffect)(() => {
		onDeleteButtonClickRef.current = onDeleteButtonClick;
	}, [onDeleteButtonClick]);
	const { day, range, room, lecture } = data;
	const { attributes, setNodeRef, listeners, transform } = useDraggable({ id });
	const leftIndex = DAY_LABELS.indexOf(day);
	const topIndex = range[0] - 1;
	const size = range.length;
	const handleDeleteClick = (0, import_react.useCallback)(() => {
		onDeleteButtonClickRef.current();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Popover, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverTrigger, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
		position: "absolute",
		left: `${120 + CellSize.WIDTH * leftIndex + 1}px`,
		top: `${40 + (topIndex * CellSize.HEIGHT + 1)}px`,
		width: CellSize.WIDTH - 1 + "px",
		height: CellSize.HEIGHT * size - 1 + "px",
		bg,
		p: 1,
		boxSizing: "border-box",
		cursor: "pointer",
		ref: setNodeRef,
		transform: CSS.Translate.toString(transform),
		...listeners,
		...attributes,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			fontSize: "sm",
			fontWeight: "bold",
			children: lecture.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
			fontSize: "xs",
			children: room
		})]
	}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverContent, {
		onClick: (event) => event.stopPropagation(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverArrow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PopoverCloseButton, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PopoverBody, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "강의를 삭제하시겠습니까?" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				colorScheme: "red",
				size: "xs",
				onClick: handleDeleteClick,
				children: "삭제"
			})] })
		]
	})] });
}, (prevProps, nextProps) => {
	return prevProps.id === nextProps.id && prevProps.data === nextProps.data && prevProps.bg === nextProps.bg;
});

//#endregion
//#region src/ScheduleTable.tsx
/**
* 시간표 컴포넌트
* 비즈니스 로직은 useScheduleTable 훅에서 처리
*/
const ScheduleTable = ({ tableId, schedules, onScheduleTimeClick, onDeleteButtonClick }) => {
	const { scheduleBgs, deleteHandlers, handleCellClick } = useScheduleTable({
		schedules,
		onScheduleTimeClick,
		onDeleteButtonClick
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
		position: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DragOutline, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleGrid, { onCellClick: handleCellClick }),
			schedules.map((schedule, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DraggableSchedule, {
				id: `${tableId}:${index}`,
				data: schedule,
				bg: scheduleBgs[index],
				onDeleteButtonClick: deleteHandlers[index]
			}, `${schedule.lecture.title}-${index}`))
		]
	});
};
var ScheduleTable_default = (0, import_react.memo)(ScheduleTable, (prevProps, nextProps) => {
	if (prevProps.tableId !== nextProps.tableId) return false;
	if (prevProps.schedules === nextProps.schedules) return true;
	if (prevProps.schedules.length !== nextProps.schedules.length) return false;
	for (let i = 0; i < prevProps.schedules.length; i++) if (prevProps.schedules[i] !== nextProps.schedules[i]) return false;
	return true;
});

//#endregion
//#region src/components/ScheduleTableItem/ActionButtons.tsx
/**
* 시간표 액션 버튼 그룹 컴포넌트
*/
const ActionButtons = ({ tableId, disabledRemoveButton, onSearchInfoChange, onDuplicate, onRemove }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ButtonGroup, {
		size: "sm",
		isAttached: true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				colorScheme: "blackAlpha",
				bg: "blackAlpha.900",
				color: "white",
				_hover: { bg: "blackAlpha.800" },
				onClick: () => onSearchInfoChange(tableId),
				children: "시간표 추가"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				colorScheme: "blackAlpha",
				bg: "blackAlpha.900",
				color: "white",
				_hover: { bg: "blackAlpha.800" },
				mx: "1px",
				onClick: () => onDuplicate(tableId),
				children: "복제"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				colorScheme: "blackAlpha",
				bg: "blackAlpha.900",
				color: "white",
				isDisabled: disabledRemoveButton,
				onClick: () => onRemove(tableId),
				children: "삭제"
			})
		]
	});
};

//#endregion
//#region src/components/ScheduleTableItem/TableHeader.tsx
/**
* 시간표 헤더 컴포넌트
*/
const TableHeader = ({ index, tableId, disabledRemoveButton, onSearchInfoChange, onDuplicate, onRemove }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
		justifyContent: "space-between",
		alignItems: "center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Heading, {
			as: "h3",
			fontSize: "lg",
			children: ["시간표 ", index + 1]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionButtons, {
			tableId,
			disabledRemoveButton,
			onSearchInfoChange,
			onDuplicate,
			onRemove
		})]
	});
};

//#endregion
//#region src/components/ScheduleTableItem/ScheduleTableItem.tsx
/**
* 각 시간표를 완전히 독립적인 컴포넌트로 분리
* 각 컴포넌트가 자신의 schedules만 구독하도록 함
*/
const ScheduleTableItem = (0, import_react.memo)(({ tableId, index, schedules, disabledRemoveButton, onSearchInfoChange, onDuplicate, onRemove, onDeleteButtonClick }) => {
	const handleSearchInfoChange = (0, import_react.useCallback)((timeInfo) => {
		onSearchInfoChange({
			tableId,
			...timeInfo
		});
	}, [tableId, onSearchInfoChange]);
	const handleHeaderSearchInfoChange = (0, import_react.useCallback)((tableId$1) => {
		onSearchInfoChange({ tableId: tableId$1 });
	}, [onSearchInfoChange]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stack, {
		width: "600px",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, {
			index,
			tableId,
			disabledRemoveButton,
			onSearchInfoChange: handleHeaderSearchInfoChange,
			onDuplicate,
			onRemove
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleDndProvider, {
			tableId,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleTable_default, {
				schedules,
				tableId,
				onScheduleTimeClick: handleSearchInfoChange,
				onDeleteButtonClick
			})
		})]
	});
}, (prevProps, nextProps) => {
	return prevProps.tableId === nextProps.tableId && prevProps.schedules === nextProps.schedules && prevProps.disabledRemoveButton === nextProps.disabledRemoveButton;
});

//#endregion
//#region \0vite/preload-helper.js
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
	return "/front_7th_chapter4-2/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
	let promise = Promise.resolve();
	if (true               && deps && deps.length > 0) {
		const links = document.getElementsByTagName("link");
		const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
		const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
		function allSettled(promises$2) {
			return Promise.all(promises$2.map((p) => Promise.resolve(p).then((value$1) => ({
				status: "fulfilled",
				value: value$1
			}), (reason) => ({
				status: "rejected",
				reason
			}))));
		}
		promise = allSettled(deps.map((dep) => {
			dep = assetsURL(dep, importerUrl);
			if (dep in seen) return;
			seen[dep] = true;
			const isCss = dep.endsWith(".css");
			const cssSelector = isCss ? "[rel=\"stylesheet\"]" : "";
			const isBaseRelative = !!importerUrl;
			if (isBaseRelative) for (let i$1 = links.length - 1; i$1 >= 0; i$1--) {
				const link$1 = links[i$1];
				if (link$1.href === dep && (!isCss || link$1.rel === "stylesheet")) return;
			}
			else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) return;
			const link = document.createElement("link");
			link.rel = isCss ? "stylesheet" : scriptRel;
			if (!isCss) link.as = "script";
			link.crossOrigin = "";
			link.href = dep;
			if (cspNonce) link.setAttribute("nonce", cspNonce);
			document.head.appendChild(link);
			if (isCss) return new Promise((res, rej) => {
				link.addEventListener("load", res);
				link.addEventListener("error", () => rej(/* @__PURE__ */ new Error(`Unable to preload CSS for ${dep}`)));
			});
		}));
	}
	function handlePreloadError(err$2) {
		const e$1 = new Event("vite:preloadError", { cancelable: true });
		e$1.payload = err$2;
		window.dispatchEvent(e$1);
		if (!e$1.defaultPrevented) throw err$2;
	}
	return promise.then((res) => {
		for (const item of res || []) {
			if (item.status !== "rejected") continue;
			handlePreloadError(item.reason);
		}
		return baseModule().catch(handlePreloadError);
	});
};

//#endregion
//#region src/ScheduleTables.tsx
const SearchDialog = (0, import_react.lazy)(() => __vitePreload(() => import("./SearchDialog-C7c1vYJ6.js"), true               ? __vite__mapDeps([0,1,2,3,4]) : void 0));
/**
* 시간표 목록 컴포넌트
* 비즈니스 로직은 hooks로 분리
*/
const ScheduleTables = () => {
	const { schedulesMap } = useScheduleContext();
	const { tableIds, disabledRemoveButton, searchInfo, duplicate, remove, handleSearchInfoChange, handleCloseSearchDialog } = useScheduleTables();
	const { deleteHandlers } = useScheduleHandlers({
		tableIds,
		schedulesMap
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
		w: "full",
		gap: 6,
		p: 6,
		flexWrap: "wrap",
		children: tableIds.map((tableId, index) => {
			const schedules = schedulesMap[tableId] || [];
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScheduleTableItem, {
				tableId,
				index,
				schedules,
				disabledRemoveButton,
				onSearchInfoChange: handleSearchInfoChange,
				onDuplicate: duplicate,
				onRemove: remove,
				onDeleteButtonClick: deleteHandlers[tableId]
			}, tableId);
		})
	}), searchInfo && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, {
		fallback: null,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchDialog, {
			searchInfo,
			onClose: handleCloseSearchDialog
		})
	})] });
};

//#endregion
export { ScheduleTables as b, parseSchedule as c, DAY_LABELS as d, ScheduleProvider as e, useScheduleContext as f };