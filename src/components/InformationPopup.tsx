import { ReactComponent as Sankey } from "../style/image/sankey.svg";
import { ReactComponent as SankeyDark } from "../style/image/sankey-dark.svg";
import PopupComponent from "./PopupComponent";
import { Trans } from "react-i18next";
import { JSX } from "react";

const InformationPopup = ({
    isDark,
    showPopup,
    setShowPopup,
}: {
    isDark: boolean;
    showPopup: boolean | null;
    setShowPopup: (showPopup: boolean | null) => void;
}): JSX.Element => {
    return (
        <PopupComponent showPopup={showPopup} setShowPopup={setShowPopup}>
            <div className={"content-text"}>
                <h1>
                    <Trans i18nKey={"info1_title"} />
                </h1>
                <p>
                    <Trans i18nKey={"info1"} />
                    <br />
                    <br />
                    <a
                        href="https://www.statistikdaten.bayern.de/genesis//online?operation=table&code=33111-201r&bypass=true&levelindex=0&levelid=1638273244475#abreadcrumb"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Trans i18nKey={"blvs"} /> - ALB
                    </a>
                    <br />
                    <a
                        href="https://www.statistikdaten.bayern.de/genesis//online?operation=table&code=33111-001r&bypass=true&levelindex=0&levelid=1638273260896#abreadcrumb"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <Trans i18nKey={"blvs"} /> - ALKIS®
                    </a>
                </p>
                <h1>
                    <Trans i18nKey={"info2_title"} />
                </h1>
                <p>
                    <Trans i18nKey={"info2"} />
                </p>
                <h1>
                    <Trans i18nKey={"info3_title"} />
                </h1>
                <p>
                    <Trans i18nKey={"info3"} />
                    <br />
                    <br />
                    <Trans i18nKey={"info3_more_info"} />
                    <a
                        href={
                            "https://www.destatis.de/DE/Themen/Branchen-Unternehmen/Landwirtschaft-Forstwirtschaft-Fischerei/Flaechennutzung/Publikationen/_publikationen-innen-indikator-siedlungs-verkehrsflaeche.html"
                        }
                    >
                        <Trans i18nKey={"info3_link"} />
                    </a>
                </p>
                <h1>
                    <Trans i18nKey={"info4_title"} />
                </h1>
                <p>
                    <Trans i18nKey={"info4"} />
                </p>
                <h1>
                    <Trans i18nKey={"info5_title"} />
                </h1>
                <p>
                    <Trans i18nKey={"info5"} />
                </p>
            </div>
            <div className={"content-image"}>{isDark ? <SankeyDark /> : <Sankey />}</div>
            <div className={"content-text"}>
                <h1>
                    <Trans i18nKey={"quellen"} />
                </h1>

                <ul>
                    <li>
                        <a href="https://www.statistikdaten.bayern.de/genesis//online?operation=table&code=33111-201r&bypass=true&levelindex=0&levelid=1638273244475#abreadcrumb">
                            <Trans i18nKey={"blvs"} /> - GENESIS-Online <Trans i18nKey={"table"} /> 33111-201r
                        </a>
                    </li>
                    <li>
                        <a
                            href="
                            https://www.statistikdaten.bayern.de/genesis//online?operation=table&code=33111-001r&bypass=true&levelindex=0&levelid=1638273260896#abreadcrumb"
                        >
                            <Trans i18nKey={"blvs"} /> - GENESIS-Online <Trans i18nKey={"table"} /> 33111-201r
                        </a>
                    </li>
                    <li>
                        <a href="https://gdz.bkg.bund.de/index.php/default/open-data/verwaltungsgebiete-1-250-000-ebenen-stand-31-12-vg250-ebenen-31-12.html">
                            <Trans i18nKey={"bkg"} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.fontsquirrel.com/license/liberation-mono">
                            2010 Google Corporation with Reserved Font Arimo, Tinos and Cousine; 2012 Red Hat, Inc. with
                            Reserved Font Name Liberation - Liberation Mono
                        </a>
                    </li>
                    <li>
                        <a href="http://roulettepolar.net/">
                            <Trans i18nKey={"pic"} />: Franz Wanner, Secret Service Landmark,{" "}
                            <Trans i18nKey={"series"} /> Secret Sites, 2018
                        </a>
                    </li>
                    <li>
                        <a href="https://feathericons.com/">Feather Icons</a>
                    </li>
                </ul>
            </div>
        </PopupComponent>
    );
};

export default InformationPopup;
