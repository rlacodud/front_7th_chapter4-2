import { Button, ButtonGroup, Flex, Heading, Stack } from "@chakra-ui/react";
import ScheduleTable from "./ScheduleTable.tsx";
import { useScheduleContext } from "./ScheduleContext.tsx";
import SearchDialog from "./SearchDialog.tsx";
import { useCallback, useMemo, useState } from "react";

export const ScheduleTables = () => {
  const { schedulesMap, setSchedulesMap } = useScheduleContext();
  const [searchInfo, setSearchInfo] = useState<{
    tableId: string;
    day?: string;
    time?: number;
  } | null>(null);

  const disabledRemoveButton = Object.keys(schedulesMap).length === 1;

  const duplicate = useCallback((targetId: string) => {
    setSchedulesMap(prev => ({
      ...prev,
      [`schedule-${Date.now()}`]: [...prev[targetId]]
    }))
  }, [setSchedulesMap]);

  const remove = useCallback((targetId: string) => {
    setSchedulesMap(prev => {
      delete prev[targetId];
      return { ...prev };
    })
  }, [setSchedulesMap]);

  const handleSearchInfoChange = useCallback((timeInfo: { tableId: string; day?: string; time?: number }) => {
    setSearchInfo(timeInfo);
  }, []);

  const handleCloseSearchDialog = useCallback(() => {
    setSearchInfo(null);
  }, []);

  // 각 시간표별 핸들러 함수들을 useMemo로 메모이제이션
  // schedulesMap이 변경될 때만 재생성되도록 최적화
  const scheduleHandlers = useMemo(() => {
    const handlers: Record<string, {
      onScheduleTimeClick: (timeInfo: { day: string; time: number }) => void;
      onDeleteButtonClick: (timeInfo: { day: string; time: number }) => void;
    }> = {};

    Object.keys(schedulesMap).forEach((tableId) => {
      handlers[tableId] = {
        onScheduleTimeClick: (timeInfo: { day: string; time: number }) => {
          handleSearchInfoChange({ tableId, ...timeInfo });
        },
        onDeleteButtonClick: ({ day, time }: { day: string; time: number }) => {
          setSchedulesMap((prev) => ({
            ...prev,
            [tableId]: prev[tableId].filter(
              schedule => schedule.day !== day || !schedule.range.includes(time)
            )
          }));
        },
      };
    });

    return handlers;
  }, [schedulesMap, handleSearchInfoChange, setSchedulesMap]);

  return (
    <>
      <Flex w="full" gap={6} p={6} flexWrap="wrap">
        {Object.entries(schedulesMap).map(([tableId, schedules], index) => {
          const handlers = scheduleHandlers[tableId];
          return (
            <Stack key={tableId} width="600px">
              <Flex justifyContent="space-between" alignItems="center">
                <Heading as="h3" fontSize="lg">시간표 {index + 1}</Heading>
                <ButtonGroup size="sm" isAttached>
                  <Button colorScheme="green" onClick={() => setSearchInfo({ tableId })}>시간표 추가</Button>
                  <Button colorScheme="green" mx="1px" onClick={() => duplicate(tableId)}>복제</Button>
                  <Button colorScheme="green" isDisabled={disabledRemoveButton}
                          onClick={() => remove(tableId)}>삭제</Button>
                </ButtonGroup>
              </Flex>
              <ScheduleTable
                schedules={schedules}
                tableId={tableId}
                onScheduleTimeClick={handlers.onScheduleTimeClick}
                onDeleteButtonClick={handlers.onDeleteButtonClick}
              />
            </Stack>
          );
        })}
      </Flex>
      <SearchDialog searchInfo={searchInfo} onClose={handleCloseSearchDialog}/>
    </>
  );
}
