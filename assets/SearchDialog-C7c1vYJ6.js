import { f as __toESM } from "./rolldown-runtime-CINmCwk_.js";
import { V as require_react } from "./chakra-ui-3tUd-FUe.js";
import { A as ModalBody, B as ModalContent, C as Modal, D as Input, G as FormLabel, I as CheckboxGroup, J as Checkbox, K as FormControl, M as Button, N as Box, Q as require_jsx_runtime, b as Wrap, c as Text, e as Tag, f as TagCloseButton, g as TagLabel, h as Tr, i as Thead, j as Th, k as Td, l as Tbody, m as Table, n as VStack, o as HStack, p as Stack, q as Select, x as ModalOverlay, y as ModalHeader, z as ModalCloseButton } from "./react-core-DvpziYFk.js";
import { c as parseSchedule, d as DAY_LABELS, f as useScheduleContext } from "./schedule-table-B3jhmuBq.js";
import { b as axios_default } from "./axios-CK9JGW64.js";

//#region src/services/lectureService.ts
var import_react = /* @__PURE__ */ __toESM(require_react());
/**
* Base URL을 가져옵니다.
* GitHub Pages 경로를 올바르게 처리하기 위해 현재 경로의 base를 추출합니다.
*/
const getBaseUrl = () => {
	const pathname = window.location.pathname;
	if (pathname !== "/" && pathname.endsWith("/")) return pathname.slice(0, -1);
	return pathname !== "/" ? pathname : "";
};
/**
* 전공 강의 목록을 가져옵니다.
*/
const fetchMajors = () => axios_default.get(`${getBaseUrl()}/schedules-majors.json`);
/**
* 교양 강의 목록을 가져옵니다.
*/
const fetchLiberalArts = () => axios_default.get(`${getBaseUrl()}/schedules-liberal-arts.json`);
/**
* 강의 데이터 캐시
* 한 번 불러온 강의 데이터를 모듈 단위에서 캐시하여
* 재호출을 방지합니다.
*/
let lecturesCache = null;
/**
* 모든 강의 데이터를 병렬로 가져옵니다.
* Promise.all을 사용하여 두 API를 동시에 호출하여 성능을 최적화합니다.
*
* @returns 강의 데이터 배열을 포함하는 Promise
*/
const fetchAllLectures = async () => {
	const results = await Promise.all([fetchMajors(), fetchLiberalArts()]);
	return results.flatMap((result) => result.data);
};
/**
* 캐시된 강의 데이터를 가져옵니다.
* 캐시가 없으면 API를 호출하여 데이터를 가져오고 캐시에 저장합니다.
*
* @returns 강의 데이터 배열을 포함하는 Promise
*/
const getLectures = async () => {
	if (lecturesCache && lecturesCache.length > 0) return lecturesCache;
	const lectures = await fetchAllLectures();
	lecturesCache = lectures;
	return lectures;
};

//#endregion
//#region src/hooks/useLectures.ts
/**
* 강의 데이터를 가져오는 커스텀 훅입니다.
* 캐시를 활용하여 한 번 불러온 데이터는 재호출하지 않습니다.
*
* @returns 강의 데이터 배열과 로딩 상태
*/
const useLectures = () => {
	const [lectures, setLectures] = (0, import_react.useState)([]);
	const [isLoading, setIsLoading] = (0, import_react.useState)(true);
	const [error, setError] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const loadLectures = async () => {
			try {
				setIsLoading(true);
				const start = performance.now();
				console.log("API 호출 시작: ", start);
				const data = await getLectures();
				const end = performance.now();
				console.log("모든 API 호출 완료 ", end);
				console.log("API 호출에 걸린 시간(ms): ", end - start);
				setLectures(data);
				setError(null);
			} catch (err) {
				const error$1 = err instanceof Error ? err : /* @__PURE__ */ new Error("강의 데이터를 불러오는데 실패했습니다.");
				setError(error$1);
				console.error("강의 데이터 로딩 실패:", error$1);
			} finally {
				setIsLoading(false);
			}
		};
		loadLectures();
	}, []);
	return {
		lectures,
		isLoading,
		error
	};
};

//#endregion
//#region src/utils/filterLectures.ts
/**
* 강의 목록을 검색 옵션에 따라 필터링합니다.
* 여러 개의 .filter() 체이닝을 하나의 순회로 통합하여 성능을 최적화합니다.
*
* @param lectures - 필터링할 강의 목록
* @param searchOptions - 검색 옵션
* @returns 필터링된 강의 목록
*/
const filterLectures = (lectures, searchOptions) => {
	const { query = "", credits, grades, days, times, majors } = searchOptions;
	const queryLower = query.toLowerCase();
	return lectures.filter((lecture) => {
		if (query && !lecture.title.toLowerCase().includes(queryLower) && !lecture.id.toLowerCase().includes(queryLower)) return false;
		if (grades.length > 0 && !grades.includes(lecture.grade)) return false;
		if (majors.length > 0 && !majors.includes(lecture.major)) return false;
		if (credits && !lecture.credits.startsWith(String(credits))) return false;
		if (days.length > 0) {
			const schedules = lecture.schedule ? parseSchedule(lecture.schedule) : [];
			if (!schedules.some((s) => days.includes(s.day))) return false;
		}
		if (times.length > 0) {
			const schedules = lecture.schedule ? parseSchedule(lecture.schedule) : [];
			if (!schedules.some((s) => s.range.some((time) => times.includes(time)))) return false;
		}
		return true;
	});
};
/**
* 강의 목록에서 고유한 전공 목록을 추출합니다.
*
* @param lectures - 강의 목록
* @returns 고유한 전공 목록 배열
*/
const extractUniqueMajors = (lectures) => {
	return [...new Set(lectures.map((lecture) => lecture.major))];
};

//#endregion
//#region src/hooks/useFilteredLectures.ts
const PAGE_SIZE = 100;
/**
* 강의 목록을 필터링하고 페이지네이션을 처리하는 커스텀 훅입니다.
* useMemo를 사용하여 불필요한 재계산을 방지합니다.
*
* @param options - 강의 목록, 검색 옵션, 현재 페이지
* @returns 필터링된 강의 목록, 보이는 강의 목록, 전공 목록, 전체 페이지 수
*/
const useFilteredLectures = ({ lectures, searchOptions, page }) => {
	const filteredLectures = (0, import_react.useMemo)(() => filterLectures(lectures, searchOptions), [lectures, searchOptions]);
	const lastPage = (0, import_react.useMemo)(() => Math.ceil(filteredLectures.length / PAGE_SIZE), [filteredLectures.length]);
	const visibleLectures = (0, import_react.useMemo)(() => filteredLectures.slice(0, page * PAGE_SIZE), [filteredLectures, page]);
	const allMajors = (0, import_react.useMemo)(() => extractUniqueMajors(lectures), [lectures]);
	return {
		filteredLectures,
		visibleLectures,
		allMajors,
		lastPage
	};
};

//#endregion
//#region src/components/SearchDialog/SearchFilters.tsx
var import_jsx_runtime = /* @__PURE__ */ __toESM(require_jsx_runtime());
const TIME_SLOTS = [
	{
		id: 1,
		label: "09:00~09:30"
	},
	{
		id: 2,
		label: "09:30~10:00"
	},
	{
		id: 3,
		label: "10:00~10:30"
	},
	{
		id: 4,
		label: "10:30~11:00"
	},
	{
		id: 5,
		label: "11:00~11:30"
	},
	{
		id: 6,
		label: "11:30~12:00"
	},
	{
		id: 7,
		label: "12:00~12:30"
	},
	{
		id: 8,
		label: "12:30~13:00"
	},
	{
		id: 9,
		label: "13:00~13:30"
	},
	{
		id: 10,
		label: "13:30~14:00"
	},
	{
		id: 11,
		label: "14:00~14:30"
	},
	{
		id: 12,
		label: "14:30~15:00"
	},
	{
		id: 13,
		label: "15:00~15:30"
	},
	{
		id: 14,
		label: "15:30~16:00"
	},
	{
		id: 15,
		label: "16:00~16:30"
	},
	{
		id: 16,
		label: "16:30~17:00"
	},
	{
		id: 17,
		label: "17:00~17:30"
	},
	{
		id: 18,
		label: "17:30~18:00"
	},
	{
		id: 19,
		label: "18:00~18:50"
	},
	{
		id: 20,
		label: "18:55~19:45"
	},
	{
		id: 21,
		label: "19:50~20:40"
	},
	{
		id: 22,
		label: "20:45~21:35"
	},
	{
		id: 23,
		label: "21:40~22:30"
	},
	{
		id: 24,
		label: "22:35~23:25"
	}
];
/**
* 검색 필터 컴포넌트
* React.memo로 메모이제이션하여 searchOptions나 allMajors가 변경되지 않으면 리렌더링하지 않음
*/
const SearchFilters = (0, import_react.memo)(({ searchOptions, allMajors, onChange, onScrollToTop }) => {
	const handleChange = (0, import_react.useCallback)((field, value) => {
		onChange(field, value);
		onScrollToTop();
	}, [onChange, onScrollToTop]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HStack, {
			spacing: 4,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "검색어" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				placeholder: "과목명 또는 과목코드",
				value: searchOptions.query,
				onChange: (e) => handleChange("query", e.target.value)
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "학점" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
				value: searchOptions.credits,
				onChange: (e) => handleChange("credits", e.target.value),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "",
						children: "전체"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "1",
						children: "1학점"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "2",
						children: "2학점"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "3",
						children: "3학점"
					})
				]
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HStack, {
			spacing: 4,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "학년" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGroup, {
				value: searchOptions.grades,
				onChange: (value) => handleChange("grades", value.map(Number)),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HStack, {
					spacing: 4,
					children: [
						1,
						2,
						3,
						4
					].map((grade) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Checkbox, {
						value: grade,
						children: [grade, "학년"]
					}, grade))
				})
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "요일" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxGroup, {
				value: searchOptions.days,
				onChange: (value) => handleChange("days", value),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HStack, {
					spacing: 4,
					children: DAY_LABELS.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						value: day,
						children: day
					}, day))
				})
			})] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(HStack, {
			spacing: 4,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "시간" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxGroup, {
				colorScheme: "green",
				value: searchOptions.times,
				onChange: (values) => handleChange("times", values.map(Number)),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
					spacing: 1,
					mb: 2,
					children: searchOptions.times.sort((a, b) => a - b).map((time) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
						size: "sm",
						variant: "outline",
						colorScheme: "blue",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TagLabel, { children: [time, "교시"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCloseButton, { onClick: () => handleChange("times", searchOptions.times.filter((v) => v !== time)) })]
					}, time))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
					spacing: 2,
					overflowY: "auto",
					h: "100px",
					border: "1px solid",
					borderColor: "gray.200",
					borderRadius: 5,
					p: 2,
					children: TIME_SLOTS.map(({ id, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Checkbox, {
						size: "sm",
						value: id,
						children: [
							id,
							"교시(",
							label,
							")"
						]
					}, id) }, id))
				})]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormControl, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormLabel, { children: "전공" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CheckboxGroup, {
				colorScheme: "green",
				value: searchOptions.majors,
				onChange: (values) => handleChange("majors", values),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wrap, {
					spacing: 1,
					mb: 2,
					children: searchOptions.majors.map((major) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tag, {
						size: "sm",
						variant: "outline",
						colorScheme: "blue",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagLabel, { children: major.split("<p>").pop() }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagCloseButton, { onClick: () => handleChange("majors", searchOptions.majors.filter((v) => v !== major)) })]
					}, major))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
					spacing: 2,
					overflowY: "auto",
					h: "100px",
					border: "1px solid",
					borderColor: "gray.200",
					borderRadius: 5,
					p: 2,
					children: allMajors.map((major) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Checkbox, {
						size: "sm",
						value: major,
						children: major.replace(/<p>/gi, " ")
					}, major) }, major))
				})]
			})] })]
		})
	] });
}, (prevProps, nextProps) => {
	return prevProps.searchOptions === nextProps.searchOptions && prevProps.allMajors === nextProps.allMajors && prevProps.onChange === nextProps.onChange && prevProps.onScrollToTop === nextProps.onScrollToTop;
});
var SearchFilters_default = SearchFilters;

//#endregion
//#region src/components/SearchDialog/LectureRow.tsx
/**
* 강의 목록의 각 행을 렌더링하는 컴포넌트
* React.memo로 메모이제이션하여 lecture나 onAddSchedule이 변경되지 않으면 리렌더링하지 않음
*/
const LectureRow = (0, import_react.memo)(({ lecture, index, onAddSchedule }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tr, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "100px",
			children: lecture.id
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "50px",
			children: lecture.grade
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "200px",
			children: lecture.title
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "50px",
			children: lecture.credits
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "150px",
			dangerouslySetInnerHTML: { __html: lecture.major }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "150px",
			dangerouslySetInnerHTML: { __html: lecture.schedule }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Td, {
			width: "80px",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				size: "sm",
				colorScheme: "blackAlpha",
				bg: "blackAlpha.900",
				color: "white",
				_hover: { bg: "blackAlpha.800" },
				onClick: () => onAddSchedule(lecture),
				children: "추가"
			})
		})
	] }, `${lecture.id}-${index}`);
}, (prevProps, nextProps) => {
	return prevProps.lecture === nextProps.lecture && prevProps.onAddSchedule === nextProps.onAddSchedule && prevProps.index === nextProps.index;
});
var LectureRow_default = LectureRow;

//#endregion
//#region src/components/SearchDialog/LectureTableHeader.tsx
/**
* 강의 목록 테이블의 헤더 컴포넌트
* React.memo로 메모이제이션하여 불필요한 리렌더링 방지
*/
const LectureTableHeader = (0, import_react.memo)(() => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thead, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tr, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
			width: "100px",
			children: "과목코드"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
			width: "50px",
			children: "학년"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
			width: "200px",
			children: "과목명"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
			width: "50px",
			children: "학점"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
			width: "150px",
			children: "전공"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, {
			width: "150px",
			children: "시간"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Th, { width: "80px" })
	] }) }) });
});
var LectureTableHeader_default = LectureTableHeader;

//#endregion
//#region src/components/SearchDialog/LectureTable.tsx
/**
* 강의 목록 테이블 컴포넌트
* React.memo로 메모이제이션하여 visibleLectures나 onAddSchedule이 변경되지 않으면 리렌더링하지 않음
*/
const LectureTable = (0, import_react.memo)(({ filteredLectures, visibleLectures, page, lastPage, onPageChange, onAddSchedule }) => {
	const loaderWrapperRef = (0, import_react.useRef)(null);
	const loaderRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const $loader = loaderRef.current;
		const $loaderWrapper = loaderWrapperRef.current;
		if (!$loader || !$loaderWrapper) return;
		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) onPageChange(Math.min(lastPage, page + 1));
		}, {
			threshold: 0,
			root: $loaderWrapper
		});
		observer.observe($loader);
		return () => observer.unobserve($loader);
	}, [
		page,
		lastPage,
		onPageChange
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, {
		align: "right",
		children: [
			"검색결과: ",
			filteredLectures.length,
			"개"
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LectureTableHeader_default, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
		overflowY: "auto",
		maxH: "500px",
		ref: loaderWrapperRef,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Table, {
			size: "sm",
			variant: "striped",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tbody, { children: visibleLectures.map((lecture, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LectureRow_default, {
				lecture,
				index,
				onAddSchedule
			}, `${lecture.id}-${index}`)) })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
			ref: loaderRef,
			h: "20px"
		})]
	})] })] });
}, (prevProps, nextProps) => {
	return prevProps.visibleLectures === nextProps.visibleLectures && prevProps.filteredLectures.length === nextProps.filteredLectures.length && prevProps.onAddSchedule === nextProps.onAddSchedule && prevProps.page === nextProps.page && prevProps.lastPage === nextProps.lastPage && prevProps.onPageChange === nextProps.onPageChange;
});
var LectureTable_default = LectureTable;

//#endregion
//#region src/SearchDialog.tsx
const SearchDialog = ({ searchInfo, onClose }) => {
	const { schedulesMap, setSchedules } = useScheduleContext();
	const loaderWrapperRef = (0, import_react.useRef)(null);
	const { lectures } = useLectures();
	const [page, setPage] = (0, import_react.useState)(1);
	const [searchOptions, setSearchOptions] = (0, import_react.useState)({
		query: "",
		grades: [],
		days: [],
		times: [],
		majors: []
	});
	const { filteredLectures, visibleLectures, allMajors, lastPage } = useFilteredLectures({
		lectures,
		searchOptions,
		page
	});
	const changeSearchOption = (0, import_react.useCallback)((field, value) => {
		setPage(1);
		setSearchOptions((prev) => ({
			...prev,
			[field]: value
		}));
	}, []);
	const handleScrollToTop = (0, import_react.useCallback)(() => {
		loaderWrapperRef.current?.scrollTo(0, 0);
	}, []);
	const handlePageChange = (0, import_react.useCallback)((newPage) => {
		setPage(newPage);
	}, []);
	const addSchedule = (0, import_react.useCallback)((lecture) => {
		if (!searchInfo) return;
		const { tableId } = searchInfo;
		const newSchedules = parseSchedule(lecture.schedule).map((schedule) => ({
			...schedule,
			lecture
		}));
		const currentSchedules = schedulesMap[tableId] || [];
		setSchedules(tableId, [...currentSchedules, ...newSchedules]);
		onClose();
	}, [
		searchInfo,
		schedulesMap,
		setSchedules,
		onClose
	]);
	(0, import_react.useEffect)(() => {
		setSearchOptions((prev) => ({
			...prev,
			days: searchInfo?.day ? [searchInfo.day] : [],
			times: searchInfo?.time ? [searchInfo.time] : []
		}));
		setPage(1);
	}, [searchInfo]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		isOpen: Boolean(searchInfo),
		onClose,
		size: "6xl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ModalContent, {
			maxW: "90vw",
			w: "1000px",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalHeader, { children: "수업 검색" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalCloseButton, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ModalBody, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(VStack, {
					spacing: 4,
					align: "stretch",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SearchFilters_default, {
						searchOptions,
						allMajors,
						onChange: changeSearchOption,
						onScrollToTop: handleScrollToTop
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LectureTable_default, {
						filteredLectures,
						visibleLectures,
						page,
						lastPage,
						onPageChange: handlePageChange,
						onAddSchedule: addSchedule
					})]
				}) })
			]
		})]
	});
};
var SearchDialog_default = (0, import_react.memo)(SearchDialog, (prevProps, nextProps) => {
	if (prevProps.searchInfo === nextProps.searchInfo && prevProps.onClose === nextProps.onClose) return true;
	return false;
});

//#endregion
export { SearchDialog_default as default };