import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 30px auto;
  width: 500px;
`;

const Panel = styled.div``;

interface IProps {}
class DragDrop extends React.Component<IProps> {
  render() {
    return (
      <Container>
        <Panel>Panel</Panel>
      </Container>
    );
  }
}

export default DragDrop;

// const Panel = styled.div`
//   background: #eee;
//   border: 2px solid #666;
//   border-radius: 5px;
//   padding: 10px;
//   text-align: center;
//   margin: 10px 0;
//   cursor: move;

//   &[data-draged="true"] {
//     opacity: 0.4;
//   }
// `;

// interface IPanel {
//   id: string;
//   label: string;
// }
// interface IProps {}
// interface IState {
//   panels: IPanel[];
//   dragingPanelIndex?: number;
//   dragoverPanelIndex?: number;
//   dragWhereOver?: "before" | "after";
// }
// class DragDrop extends React.Component<IProps, IState> {
//   constructor(props: IProps) {
//     super(props);

//     this.state = {
//       panels: [
//         { id: "A", label: "panel A" },
//         { id: "B", label: "panel B" },
//         { id: "C", label: "panel C" },
//         { id: "D", label: "panel D" }
//       ]
//     };
//   }

//   handleDragStart = (dragingPanelIndex: number) => {
//     this.setState({
//       dragingPanelIndex
//     });
//   };
//   handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     const { dragingPanelIndex } = this.state;
//     const dragoverPanelIndex = Number(
//       e.currentTarget.getAttribute("data-index")
//     );

//     if (dragoverPanelIndex === dragingPanelIndex) {
//       return;
//     }

//     const { top, height } = e.currentTarget.getBoundingClientRect();
//     const dragWhereOver = top + height / 2 > e.clientY ? "before" : "after";

//     this.setState({
//       dragoverPanelIndex,
//       dragWhereOver
//     });
//   };
//   handleDragEnd = () => {
//     //

//     this.setState({
//       dragingPanelIndex: undefined,
//       dragoverPanelIndex: undefined,
//       dragWhereOver: undefined
//     });
//   };

//   render() {
//     const {
//       panels,
//       dragingPanelIndex,
//       dragoverPanelIndex,
//       dragWhereOver
//     } = this.state;
//     return (
//       <Container>
//         {panels.map((p, i) => {
//           return (
//             <React.Fragment key={i}>
//               {dragoverPanelIndex === i && dragWhereOver === "before" && (
//                 <div>Drop here</div>
//               )}
//               <Panel
//                 data-index={i}
//                 data-draged={i === dragingPanelIndex}
//                 key={i}
//                 draggable={true}
//                 onDragStart={() => this.handleDragStart(i)}
//                 onDragEnd={this.handleDragEnd}
//                 onDragOver={this.handleDragOver}
//               >
//                 {p.label}
//               </Panel>
//               {dragoverPanelIndex === i && dragWhereOver === "after" && (
//                 <div>Drop here</div>
//               )}
//             </React.Fragment>
//           );
//         })}
//       </Container>
//     );
//   }
// }

// export default DragDrop;
