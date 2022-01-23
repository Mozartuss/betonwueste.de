import { useEffect, useState } from "react";
import DistrictStepComponent from "./DistrictStepComponent";
import "../style/MainComponent.scss";
import TimeLineComponent from "./TimeLineComponent";
import InteractiveMapContainer from "./InteractiveMapContainer";
import TextTransition, { presets } from "react-text-transition";
import ModalComponent from "./ModalComponent";
import LineGraphComponent from "./LineGraphComponent";
import StackedBarComponent from "./StackedBarComponent";

export interface ICLickedLK {
    BEZ: string;
    GEN: string;
    AGS: string;
}

const MainComponent = ({ isDark, isAbsolute }: { isDark: boolean; isAbsolute: boolean }): JSX.Element => {
    const [getCurrentCountries, setCurrentCountries] = useState<string>("Bayern");
    const [getCurrentYear, setCurrentYear] = useState<number>(1980);
    const [modalState, setModalState] = useState<boolean>(false);
    const [modalState2, setModalState2] = useState<boolean>(false);
    const [getClickedLK, setClickedLK] = useState<ICLickedLK>({ BEZ: "Bundesland", GEN: "Bayern", AGS: "09" });
    const [getShortLKName, setShortLKName] = useState<string>("Bayern");

    useEffect(() => {}, [setShortLKName]);

    const handleModalClick = (): void => {
        setModalState((prevState) => !prevState);
    };
    const handleModalClick2 = (): void => {
        setModalState2((prevState) => !prevState);
    };

    useEffect(() => {
        if (modalState || modalState2) {
            (document.getElementById("main-component") as HTMLDivElement).style.filter = "blur(5px)";
            (document.getElementById("welcome-container") as HTMLDivElement).style.filter = "blur(5px)";
        } else {
            (document.getElementById("main-component") as HTMLDivElement).style.filter = "none";
            (document.getElementById("welcome-container") as HTMLDivElement).style.filter = "none";
        }
    });

    const textValue: JSX.Element = (
        <>
            2014 wurde in Bayern das <b>Automatisierte Liegenschaftsbuchs</b> (ALB) von{" "}
            <b>Amtliche Liegenschaftskatasterinformationssystem</b> abgelöst. Dabei gab es eine neue Kategorisierung für
            Flächen. Durch diese neue Kategorisierung, konnte es passieren das zum Beispiel ein Truppenübungsplatz von
            Siedlungsfläche in die Grünfläche übergegangen ist.
        </>
    );
    const titleValue: JSX.Element = (
        <>
            Wechsel von ALB zu ALKIS<sup>®</sup>
        </>
    );

    const textValue2: JSX.Element = (
        <>
            Zwischen 1992 und 1996 wurde eine Veränderte Kategorisierung der Daten durchgeführt. Es können sich deshalb
            speziell große Unterschiede bei Daten bezüglich Wohnfläche und Sonstigen Daten ergeben.
        </>
    );
    const titleValue2: JSX.Element = <>Kategorisierungsupdate</>;

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
                        <DistrictStepComponent getDistrict={getCurrentCountries} setDistrict={setCurrentCountries} />
                    </div>
                    <div className={"main-view"}>
                        <code className={"main-view-title"}>
                            <TextTransition text={getCurrentCountries} springConfig={presets.gentle} />
                            <div className={"text-transition"} style={{ margin: "0 10px" }}>
                                &#8210;
                            </div>
                            <TextTransition text={getCurrentYear} springConfig={presets.gentle} />
                        </code>
                        <StackedBarComponent
                            isAbsolute={isAbsolute}
                            getYear={getCurrentYear}
                            getDistrict={getCurrentCountries}
                            isDark={isDark}
                        />
                    </div>
                    <div id={"right_content_container"} className={"graphic"}>
                        <div className={"map"}>
                            <InteractiveMapContainer
                                isDark={isDark}
                                getDistrict={getCurrentCountries}
                                setDistrict={setCurrentCountries}
                                getYear={getCurrentYear}
                                setClickedLK={setClickedLK}
                            />
                        </div>
                        <div className={"map-legend-container"}>
                            <div className={"map-legend"}>
                                <div>0%</div>
                                <div className={"map-legend-bar"} />
                                <div>100%</div>
                            </div>
                            <code className={"info"}>
                                <TextTransition text={getClickedLK.GEN} springConfig={presets.gentle} />
                            </code>
                        </div>
                        <div className={"line-graph"}>
                            <LineGraphComponent
                                getClickedLK={getClickedLK}
                                getCurrentYear={getCurrentYear}
                                isDark={isDark}
                                handleModalClick2={handleModalClick2}
                            />
                        </div>
                    </div>
                </div>
                <div id={"timeline-component"} className={"timeline"}>
                    <TimeLineComponent
                        isDark={isDark}
                        getYear={getCurrentYear}
                        setYear={setCurrentYear}
                        handleModalClick={handleModalClick}
                        handleModalClick2={handleModalClick2}
                    />
                </div>
            </div>
        </>
    );
};

export default MainComponent;
