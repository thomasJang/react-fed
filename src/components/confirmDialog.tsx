import * as React from "react";
import { Modal } from "antd";

function dangerouslySetInnerHTML(
  rawMarkup: string,
  replacer?: (str: string) => string
) {
  return {
    dangerouslySetInnerHTML: {
      __html: replacer
        ? replacer(rawMarkup)
        : rawMarkup.replace(/\n/g, "<br />")
    }
  };
}

export interface IConfirmDialogOptions {
  title?: string | React.ReactNode;
  content: React.ReactNode;
}

const confirmDialog = function(options: IConfirmDialogOptions) {
  return new Promise((resolve, reject) => {
    const modalContent =
      typeof options.content === "string" ? (
        <span {...dangerouslySetInnerHTML(options.content)} />
      ) : (
        options.content
      );

    Modal.confirm({
      zIndex: 1040,
      okText: "Ok",
      cancelText: "Cancel",
      transitionName: "slidedown",
      title: options.title ? options.title : modalContent,
      content: options.title ? modalContent : "",
      onOk() {
        resolve(true);
      },
      onCancel() {
        reject("MODAL_CANCEL");
      }
    });
  });
};

export default confirmDialog;
