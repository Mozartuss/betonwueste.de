import "../style/ModalComponent.scss";
import { CSSProperties, useRef } from "react";

const ModalComponent = ({
    show,
    handleModalClick,
    title,
    content,
    button,
    modalType,
    closeButton,
    bodyStyle,
    wrapperStyle,
}: {
    show: boolean;
    modalType: string;
    handleModalClick?: () => void;
    title: JSX.Element;
    content: JSX.Element;
    button?: JSX.Element;
    closeButton?: boolean;
    bodyStyle?: CSSProperties;
    wrapperStyle?: CSSProperties;
}): JSX.Element => {
    const modalRef = useRef(null);

    return (
        <>
            {show && (
                <div className={`popup-module popup-wrap ${modalType} show`} style={wrapperStyle}>
                    <div className={"popup-body bounceInDown"} style={bodyStyle} ref={modalRef}>
                        <div className={"popup-icon"} />
                        <div className={"title"}>{title}</div>
                        <div className={"text"}>{content}</div>
                        {button && <div className={"btn-wrap"}>{button}</div>}
                        {closeButton && (
                            <button type={"button"} className={"close"} onClick={handleModalClick}>
                                ×
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalComponent;
