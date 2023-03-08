import ReactDOM from "react-dom";

const Backdrop = () => {
  return <div />;
};

const ModalOverlay = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
