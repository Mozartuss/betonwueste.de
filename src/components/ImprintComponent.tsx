import i18n from "i18next";

const ImprintComponent = (): JSX.Element => {
    return i18n.language === "en" ? (
        <div className={"content-text"} style={{ textAlign: "left" }}>
            <h1>Legal notice</h1>
            <p>
                Lukas Kleybolte
                <br />
                Auf dem Kreuz 19
                <br />
                86152 Augsburg
                <br />
                Germany
            </p>

            <h2>contact</h2>
            <p>Mail: lukas@kleybolte.de</p>
        </div>
    ) : (
        <div className={"content-text"} style={{ textAlign: "left" }}>
            <h1>Impressum</h1>

            <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
            <p>
                Lukas Kleybolte
                <br />
                Auf dem Kreuz 19
                <br />
                86152 Augsburg
                <br />
                Deutschland
            </p>

            <h2>Kontakt</h2>
            <p>E-Mail: lukas@kleybolte.de</p>
        </div>
    );
};

export default ImprintComponent;
