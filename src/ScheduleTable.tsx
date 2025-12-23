import { memo } from "react";
import { Box } from "@chakra-ui/react";
import { Schedule } from "./types.ts";
import { useScheduleTable } from "./hooks/useScheduleTable.ts";
import { DragOutline } from "./components/ScheduleTable/DragOutline.tsx";
import { ScheduleGrid } from "./components/ScheduleTable/ScheduleGrid.tsx";
import { DraggableSchedule } from "./components/ScheduleTable/DraggableSchedule.tsx";

interface Props {
  tableId: string;
  schedules: Schedule[];
  onScheduleTimeClick?: (timeInfo: { day: string; time: number }) => void;
  onDeleteButtonClick?: (timeInfo: { day: string; time: number }) => void;
}

/**
 * 시간표 컴포넌트
 * 비즈니스 로직은 useScheduleTable 훅에서 처리
 */
const ScheduleTable = ({
  tableId,
  schedules,
  onScheduleTimeClick,
  onDeleteButtonClick,
}: Props) => {
  const { scheduleBgs, deleteHandlers, handleCellClick } = useScheduleTable({
    schedules,
    onScheduleTimeClick,
    onDeleteButtonClick,
  });

  return (
    <Box position="relative">
      <DragOutline />
      <ScheduleGrid onCellClick={handleCellClick} />

      {schedules.map((schedule, index) => (
        <DraggableSchedule
          key={`${schedule.lecture.title}-${index}`}
          id={`${tableId}:${index}`}
          data={schedule}
          bg={scheduleBgs[index]}
          onDeleteButtonClick={deleteHandlers[index]}
        />
      ))}
    </Box>
  );
};

// React.memo로 컴포넌트 메모이제이션하여 불필요한 리렌더링 방지
// schedules 배열 참조가 같으면 리렌더링하지 않음 (핸들러 참조 변경은 무시)
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
