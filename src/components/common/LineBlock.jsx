import InputBlock from "./InputBlock";
import MethodBlock from "./MethodBlock";

import {
  BlockListContainer,
  LineBlockContainer,
  OrderNumber,
} from "../../style/BlockStyle";

const LineBlock = ({
  index,
  blocks,
  handleBlockDragStart,
  handleBlockDrop,
  handleLineBlockDragStart,
  handleLineBlockDragOver,
  handleLineBlockDrop,
  setSelectedBlockId,
}) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", "lineblock");

    handleLineBlockDragStart(index);
  };

  const updateDrop = (event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData("text/plain");

    if (data === "lineblock") {
      handleLineBlockDrop(index);
    } else {
      handleBlockDrop(index);
    }
  };

  return (
    <LineBlockContainer
      draggable
      onDragStart={handleDragStart}
      onDragOver={handleLineBlockDragOver}
      onDrop={updateDrop}
    >
      <BlockListContainer>
        <OrderNumber>{index}</OrderNumber>
        {blocks.map((block) => {
          switch (block.type) {
            case "input":
              return (
                <InputBlock
                  key={block.id}
                  parameter={block.parameter}
                  saveBlockData={handleBlockDragStart}
                  draggedValue={block.value}
                  inputBlockId={block.id}
                  setSelectedBlockId={setSelectedBlockId}
                  draggable
                  onDragStart={(event) => {
                    event.stopPropagation();
                    handleBlockDragStart(block.id, index);
                  }}
                />
              );
            case "method":
              return (
                <MethodBlock
                  key={block.id}
                  method={block.method}
                  saveBlockData={handleBlockDragStart}
                  methodBlockId={block.id}
                  setSelectedBlockId={setSelectedBlockId}
                  draggable
                  onDragStart={(event) => {
                    event.stopPropagation();
                    handleBlockDragStart(block.id, index);
                  }}
                />
              );
            default:
              return null;
          }
        })}
      </BlockListContainer>
    </LineBlockContainer>
  );
};

export default LineBlock;
