import { JSX, useEffect, useLayoutEffect, useMemo, useState } from "react";
import DistrictStepComponent from "./DistrictStepComponent";
import "../style/MainComponent.scss";
import TimeLineComponent from "./TimeLineComponent";
import InteractiveMapContainer from "./InteractiveMapContainer";
import ModalComponent from "./ModalComponent";
import LineGraphComponent from "./LineGraphComponent";
import StackedBarComponent from "./StackedBarComponent";
import { colord, extend } from "colord";
import data from "../data/data.json";
import { IDataEntry } from "../utils/Helper";
import mixPlugin from "colord/plugins/mix";
import { useTranslation } from "react-i18next";
import TextTransition from "./TextTransitionComponent";

extend([mixPlugin]);

export interface ICLickedLK {
    BEZ: string;
    GEN: string;
    AGS: string;
}

const MainComponent = ({ isDark, isAbsolute }: { isDark: boolean; isAbsolute: boolean }): JSX.Element => {
    const { t } = useTranslation();
    const [currentCountries, setCurrentCountries] = useState<string>("Bayern");
    const [currentYear, setCurrentYear] = useState<number>(1980);
    const [modalState, setModalState] = useState<boolean>(false);
    const [modalState2, setModalState2] = useState<boolean>(false);
    const [clickedLK, setClickedLK] = useState<ICLickedLK>({ BEZ: "Bundesland", GEN: "Bayern", AGS: "09" });

    const getClickedLKName: string = useMemo(() => {
        return data.find((entry: IDataEntry) => entry.AGS === parseInt(clickedLK.AGS))?.municipality_short ?? "";
    }, [clickedLK]);

    const colors: { color: string; percent: number }[] = [
        {
            color: "rgb(255,255,255)",
            percent: 0,
        },
        {
            color: isDark ? "rgb(255, 69, 58)" : "rgb(255, 59, 48)",
            percent: 12,
        },
        {
            color: isDark ? "rgb(191, 90, 242)" : "rgb(175, 82, 222)",
            percent: 100,
        },
    ];

    /**
     * Calculate the color range for the legend and the map
     * @param percentage
     */
    const percentageToColor = (percentage: number) => {
        let c1 = colors[0];
        let c2 = colors[1];

        for (let i = 0; i < colors.length - 1; i++) {
            if (colors[i].percent <= percentage && percentage <= colors[i + 1].percent) {
                c1 = colors[i];
                c2 = colors[i + 1];
                break;
            }
        }
        const color1 = colord(c1.color);
        const color2 = colord(c2.color);

        const ratio = (percentage - c1.percent) / (c2.percent - c1.percent);
        return color1.mix(color2, ratio).toHex();
    };

    const redColors = Array.from(Array(101).keys()).map(percentageToColor);

    const handleModalClick = (): void => {
        setModalState((prevState) => !prevState);
    };
    const handleModalClick2 = (): void => {
        setModalState2((prevState) => !prevState);
    };

    /**
     * If modal is open blur background and disable scroll
     */
    useEffect(() => {
        if (modalState || modalState2) {
            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none";
            (document.getElementById("main-component") as HTMLDivElement).style.filter = "blur(5px)";
            (document.getElementById("welcome-container") as HTMLDivElement).style.filter = "blur(5px)";
            (document.getElementById("header-button-container") as HTMLDivElement).style.filter = "blur(5px)";
            (document.getElementById("image-author") as HTMLDivElement).style.filter = "blur(5px)";
            (document.getElementById("required-links") as HTMLDivElement).style.filter = "blur(5px)";
        } else {
            document.body.style.touchAction = "unset";
            (document.getElementById("main-component") as HTMLDivElement).style.filter = "none";
            (document.getElementById("welcome-container") as HTMLDivElement).style.filter = "none";
            (document.getElementById("header-button-container") as HTMLDivElement).style.filter = "none";
            (document.getElementById("image-author") as HTMLDivElement).style.filter = "none";
            (document.getElementById("required-links") as HTMLDivElement).style.filter = "none";
            document.body.style.overflow = "unset";
        }
    }, [modalState, modalState2]);

    /**
     * Dirty solution:
     * Trigger rerender if User tile the window
     * For example: undock the window from fullscreen -> align the window on the left side and fill the half screen
     */
    function useWindowSize() {
        const [size, setSize] = useState([0, 0]);
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }

            window.addEventListener("resize", updateSize);
            updateSize();
            return () => window.removeEventListener("resize", updateSize);
        }, []);
        return size;
    }

    function ShowWindowDimensions() {
        return useWindowSize();
    }

    ShowWindowDimensions();

    const textValue: JSX.Element = <>{t("ALBtoALKIS_Text")}</>;
    const titleValue: JSX.Element = (
        <>
            {t("ALBtoALKIS")}
            <sup>®</sup>
        </>
    );

    const textValue2: JSX.Element = <>{t("Kategorisierungsupdate_Text")}</>;
    const titleValue2: JSX.Element = <>{t("Kategorisierungsupdate")}</>;

    const moreInfoButton: JSX.Element = (
        <button
            className={"btn btn-more"}
            onClick={() => {
                window.open("https://www.adbv-wuerzburg.de/file/pdf/6154/ALKIS_kompakt_Web_A3.pdf");
                handleModalClick();
            }}
        >
            Mehr informationen
        </button>
    );
    return (
        <>
            <ModalComponent
                show={modalState}
                modalType={"info"}
                handleModalClick={handleModalClick}
                title={titleValue}
                content={textValue}
                button={moreInfoButton}
                closeButton={true}
            />
            <ModalComponent
                show={modalState2}
                modalType={"info"}
                handleModalClick={handleModalClick2}
                title={titleValue2}
                content={textValue2}
                closeButton={true}
            />
            <div id={"main-component"} className={"main-component"}>
                <div className={"graphic-container"}>
                    <div id={"district"} className={"district"}>
                        <DistrictStepComponent getDistrict={currentCountries} setDistrict={setCurrentCountries} />
                    </div>
                    <div className={"main-view"}>
                        <code className={"main-view-title"}>
                            <TextTransition style={{ fontFamily: "Liberation Mono", fontWeight: 400 }}>
                                {t(currentCountries)}
                            </TextTransition>
                            <div className={"text-transition"} style={{ margin: "0 10px" }}>
                                &#8210;
                            </div>
                            <TextTransition style={{ fontFamily: "Liberation Mono", fontWeight: 400 }}>
                                {currentYear}
                            </TextTransition>
                        </code>
                        <StackedBarComponent
                            isAbsolute={isAbsolute}
                            getYear={currentYear}
                            getDistrict={currentCountries}
                            isDark={isDark}
                        />
                    </div>
                    <div id={"right_content_container"} className={"graphic"}>
                        <div className={"map"}>
                            <InteractiveMapContainer
                                isDark={isDark}
                                getDistrict={currentCountries}
                                setDistrict={setCurrentCountries}
                                getYear={currentYear}
                                setClickedLK={setClickedLK}
                                redColors={redColors}
                            />
                        </div>
                        <div className={"map-legend-container"}>
                            <div className={"map-legend"}>
                                <div>0%</div>
                                <div className={"map-legend-bar"}>
                                    {redColors.map((color: string, index: number) => {
                                        return (
                                            <div
                                                id={`MapLegend_${index}`}
                                                key={color}
                                                className={"map-legend-bar-item"}
                                                style={{ backgroundColor: color }}
                                            />
                                        );
                                    })}
                                </div>
                                <div>100%</div>
                            </div>
                            <code className={"info"}>
                                <TextTransition style={{ fontFamily: "Liberation Mono", fontWeight: 400 }}>
                                    {t(getClickedLKName)}
                                </TextTransition>
                            </code>
                        </div>
                        <div className={"line-graph"}>
                            <LineGraphComponent
                                getClickedLK={clickedLK}
                                getCurrentYear={currentYear}
                                isDark={isDark}
                                handleModalClick={() => setModalState(true)}
                                handleModalClick2={() => setModalState2(true)}
                                setCurrentYear={setCurrentYear}
                            />
                        </div>
                    </div>
                </div>
                <div id={"timeline-component"} className={"timeline"}>
                    <TimeLineComponent
                        isDark={isDark}
                        getYear={currentYear}
                        setYear={setCurrentYear}
                        handleModalClick={() => setModalState(true)}
                        handleModalClick2={() => setModalState2(true)}
                    />
                </div>
            </div>
        </>
    );
};

export default MainComponent;
