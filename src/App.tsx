import MainComponent from "./components/MainComponent";
import WelcomeComponent from "./components/WelcomeComponent";
import useLocalStorage from "use-local-storage";
import { useEffect, useMemo, useState } from "react";
import ModalComponent from "./components/ModalComponent";
import { useMediaQuery } from "react-responsive";
import HeaderButtons from "./components/HeaderButtons";
import useWindowDimensions, { IWindowDimension } from "./hooks/useWindowDimensions";
import { useTranslation } from "react-i18next";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import { handleAcceptCookie, handleDeclineCookie } from "./utils/Helper";

function App(): JSX.Element {
    const { t } = useTranslation();
    const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark, setIsDark] = useLocalStorage("darkMode", defaultDark);
    const [isAbsolute, setIsAbsolute] = useState<boolean>(false);
    const { width, height }: IWindowDimension = useWindowDimensions();

    const isSmartphone = useMediaQuery({ maxWidth: 760 });
    const isTablet = useMediaQuery({ minWidth: 760 });
    const isPortrait = useMediaQuery({ orientation: "portrait" });

    /**
     * If the website detects a smartphone or tablet in portrait mode, a modal is displayed
     * indicating that the page should be visited on a desktop or tablet in landscape mode.
     */

    const isMobile = useMemo(() => {
        const height1610 = (width / 16) * 10;
        const height43 = (width / 4) * 3;
        return (
            isSmartphone || (isTablet && isPortrait) || !(height > 650 || (height1610 <= height && height <= height43))
        );
    }, [isSmartphone, isPortrait, isTablet, width, height]);

    /**
     * Disable Google Analytics if cookie is set to false
     */
    useEffect(() => {
        const isConsent = getCookieConsentValue("analyticsCookie");
        if (isConsent === "true") {
            handleAcceptCookie();
        }
    }, []);

    useEffect(() => {
        const welcomeContainer = document.getElementById("welcome-container");
        const imageAuthor = document.getElementById("image-author");
        const requiredLinks = document.getElementById("required-links");
        const waitTilRender = setInterval(function () {
            if (welcomeContainer && imageAuthor && requiredLinks) {
                if (isMobile) {
                    document.body.style.overflow = "hidden";
                    document.body.style.touchAction = "none";
                    welcomeContainer.style.filter = "blur(5px)";
                    imageAuthor.style.filter = "blur(5px)";
                    requiredLinks.style.filter = "blur(5px)";
                } else {
                    document.body.style.touchAction = "unset";
                    welcomeContainer.style.filter = "none";
                    imageAuthor.style.filter = "none";
                    requiredLinks.style.filter = "none";
                    document.body.style.overflow = "unset";
                }
                clearInterval(waitTilRender);
            }
        }, 100);
    });

    const textValue: JSX.Element = (
        <>
            Diese Webseite sollte <b>nur</b> im Querformat und auf einem Desktop, Laptop oder Tablet betrachtet werden!
        </>
    );
    const titleValue: JSX.Element = <>Kompatibilitätswarnung</>;

    return (
        <>
            <ModalComponent show={isMobile} modalType={"danger"} title={titleValue} content={textValue} />
            <div
                data-theme={isDark ? "dark" : "light"}
                style={{
                    backgroundColor: "var(--color-white)",
                    transition: "color 0.2 ease, background-color 0.2 ease, background 0.2 ease",
                }}
            >
                <WelcomeComponent />
                {!isMobile && (
                    <>
                        <HeaderButtons isDark={isDark} setIsDark={setIsDark} setIsAbsolute={setIsAbsolute} />
                        <MainComponent isDark={isDark} isAbsolute={isAbsolute} />
                    </>
                )}
            </div>
            <CookieConsent
                enableDeclineButton={true}
                flipButtons={true}
                declineButtonText={t("CookieButtonNO")}
                onAccept={handleAcceptCookie}
                onDecline={handleDeclineCookie}
                location="bottom"
                buttonText={t("CookieButtonOK")}
                cookieName="analyticsCookie"
                style={{ backgroundColor: "var(--color-black)" }}
                buttonStyle={{
                    color: "var(--color-white)",
                    backgroundColor: "var(--color-green)",
                    fontSize: "13px",
                    borderRadius: "3px",
                }}
                declineButtonStyle={{
                    color: "var(--color-white)",
                    backgroundColor: "var(--color-red)",
                    fontSize: "13px",
                    borderRadius: "3px",
                }}
            >
                {t("CookieText")}
            </CookieConsent>
        </>
    );
}

export default App;
