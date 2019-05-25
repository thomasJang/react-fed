export interface IMousePosition {
  pageX: number;
  pageY: number;
  clientX: number;
  clientY: number;
}

export type MouseEventSubscribeCallbackFn = (
  mpos: IMousePosition,
  stopEvent: () => void
) => void;

const mouseEventSubscribe = (
  callBack: MouseEventSubscribeCallbackFn,
  onEnd: () => void
) => {
  const onMousemoveWindow = (e: MouseEvent) => {
    callBack(
      {
        pageX: e.pageX,
        pageY: e.pageY,
        clientX: e.clientX,
        clientY: e.clientY
      },
      () => {
        onMouseupWindow();
      }
    );
  };

  const onMouseupWindow = (e?: MouseEvent) => {
    document.body.style.userSelect = "auto";
    document.removeEventListener("mousemove", onMousemoveWindow);
    document.removeEventListener("mouseup", onMouseupWindow);
    document.removeEventListener("mouseleave", onMouseupWindow);
    if (onEnd) {
      onEnd();
    }
  };

  document.body.style.userSelect = "none";
  document.addEventListener("mousemove", onMousemoveWindow, false);
  document.addEventListener("mouseup", onMouseupWindow);
  document.addEventListener("mouseleave", onMouseupWindow);
};

export default mouseEventSubscribe;
