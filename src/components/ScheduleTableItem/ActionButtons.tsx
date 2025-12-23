import { Button, ButtonGroup } from "@chakra-ui/react";

interface ActionButtonsProps {
  tableId: string;
  disabledRemoveButton: boolean;
  onSearchInfoChange: (tableId: string) => void;
  onDuplicate: (tableId: string) => void;
  onRemove: (tableId: string) => void;
}

/**
 * 시간표 액션 버튼 그룹 컴포넌트
 */
export const ActionButtons = ({
  tableId,
  disabledRemoveButton,
  onSearchInfoChange,
  onDuplicate,
  onRemove,
}: ActionButtonsProps) => {
  return (
    <ButtonGroup size="sm" isAttached>
      <Button
        colorScheme="green"
        onClick={() => onSearchInfoChange(tableId)}
      >
        시간표 추가
      </Button>
      <Button colorScheme="green" mx="1px" onClick={() => onDuplicate(tableId)}>
        복제
      </Button>
      <Button
        colorScheme="green"
        isDisabled={disabledRemoveButton}
        onClick={() => onRemove(tableId)}
      >
        삭제
      </Button>
    </ButtonGroup>
  );
};

