import { useEffect, useState } from "react";
import { getCookieConsentValue, Cookies } from "react-cookie-consent";
import { handleAcceptCookie, handleDeclineCookie } from "../utils/Helper";
import i18n from "i18next";

const PrivacyPolicyComponent = (): JSX.Element => {
    const [gAState, setGAState] = useState<boolean>(() => {
        const isConsent = getCookieConsentValue("analyticsCookie");
        return isConsent === "true";
    });

    useEffect(() => {
        if (gAState) {
            Cookies.set("analyticsCookie", gAState.toString());
            handleAcceptCookie();
        } else {
            Cookies.set("analyticsCookie", gAState.toString());
            handleDeclineCookie();
        }
    }, [gAState]);

    return i18n.language === "en" ? (
        <div className={"content-text"}>
            <h1>Privacy Policy</h1>
            <p>
                Personal data (usually referred to just as &quot;data&quot; below) will only be processed by us to the
                extent necessary and for the purpose of providing a functional and user-friendly website, including its
                contents, and the services offered there.
            </p>
            <p>
                Per Art. 4 No. 1 of Regulation (EU) 2016/679, i.e. the General Data Protection Regulation (hereinafter
                referred to as the &quot;GDPR&quot;), &quot;processing&quot; refers to any operation or set of
                operations such as collection, recording, organization, structuring, storage, adaptation, alteration,
                retrieval, consultation, use, disclosure by transmission, dissemination, or otherwise making available,
                alignment, or combination, restriction, erasure, or destruction performed on personal data, whether by
                automated means or not.
            </p>
            <p>
                The following privacy policy is intended to inform you in particular about the type, scope, purpose,
                duration, and legal basis for the processing of such data either under our own control or in conjunction
                with others. We also inform you below about the third-party components we use to optimize our website
                and improve the user experience which may result in said third parties also processing data they collect
                and control.
            </p>
            <p>Our privacy policy is structured as follows:</p>
            <p>
                I. Information about us as controllers of your data
                <br />
                II. The rights of users and data subjects
                <br />
                III. Information about the data processing
            </p>
            <h2>I. Information about us as controllers of your data</h2>
            <p>
                The party responsible for this website (the &quot;controller&quot;) for purposes of data protection law
                is:
            </p>
            <p>
                <span>Lukas Kleybolte</span>
            </p>
            <p>
                <span>Email: lukas@kleybolte.de</span>
            </p>
            <h2>II. The rights of users and data subjects</h2>
            <p>
                With regard to the data processing to be described in more detail below, users and data subjects have
                the right
            </p>
            <ul>
                <li>
                    to confirmation of whether data concerning them is being processed, information about the data being
                    processed, further information about the nature of the data processing, and copies of the data (cf.
                    also Art. 15 GDPR);
                </li>
                <li>to correct or complete incorrect or incomplete data (cf. also Art. 16 GDPR);</li>
                <li>
                    to the immediate deletion of data concerning them (cf. also Art. 17 DSGVO), or, alternatively, if
                    further processing is necessary as stipulated in Art. 17 Para. 3 GDPR, to restrict said processing
                    per Art. 18 GDPR;
                </li>
                <li>
                    to receive copies of the data concerning them and/or provided by them and to have the same
                    transmitted to other providers/controllers (cf. also Art. 20 GDPR);
                </li>
                <li>
                    to file complaints with the supervisory authority if they believe that data concerning them is being
                    processed by the controller in breach of data protection provisions (see also Art. 77 GDPR).
                </li>
            </ul>
            <p>
                In addition, the controller is obliged to inform all recipients to whom it discloses data of any such
                corrections, deletions, or restrictions placed on processing the same per Art. 16, 17 Para. 1, 18 GDPR.
                However, this obligation does not apply if such notification is impossible or involves a
                disproportionate effort. Nevertheless, users have a right to information about these recipients.
            </p>
            <p>
                <strong>
                    Likewise, under Art. 21 GDPR, users and data subjects have the right to object to the
                    controller&apos;s future processing of their data pursuant to Art. 6 Para. 1 lit. f) GDPR. In
                    particular, an objection to data processing for the purpose of direct advertising is permissible.
                </strong>
            </p>
            <h2>III. Information about the data processing</h2>
            <p>
                Your data processed when using our website will be deleted or blocked as soon as the purpose for its
                storage ceases to apply, provided the deletion of the same is not in breach of any statutory storage
                obligations or unless otherwise stipulated below.
            </p>
            <h3>Cookies</h3>
            <h4>a) Session cookies</h4>
            <p>
                We use cookies on our website. Cookies are small text files or other storage technologies stored on your
                computer by your browser. These cookies process certain specific information about you, such as your
                browser, location data, or IP address. &nbsp;
            </p>
            <p>
                This processing makes our website more user-friendly, efficient, and secure, allowing us, for example,
                to display our website in different languages or to offer a shopping cart function.
            </p>
            <p>
                The legal basis for such processing is Art. 6 Para. 1 lit. b) GDPR, insofar as these cookies are used to
                collect data to initiate or process contractual relationships.
            </p>
            <p>
                If the processing does not serve to initiate or process a contract, our legitimate interest lies in
                improving the functionality of our website. The legal basis is then Art. 6 Para. 1 lit. f) GDPR.
            </p>
            <p>When you close your browser, these session cookies are deleted.</p>
            <h4>b) Third-party cookies</h4>
            <p>
                If necessary, our website may also use cookies from companies with whom we cooperate for the purpose of
                advertising, analyzing, or improving the features of our website.
            </p>
            <p>
                Please refer to the following information for details, in particular for the legal basis and purpose of
                such third-party collection and processing of data collected through cookies.
            </p>
            <h4>c) Disabling cookies</h4>
            <p>
                You can refuse the use of cookies by changing the settings on your browser. Likewise, you can use the
                browser to delete cookies that have already been stored. However, the steps and measures required vary,
                depending on the browser you use. If you have any questions, please use the help function or consult the
                documentation for your browser or contact its maker for support. Browser settings cannot prevent
                so-called flash cookies from being set. Instead, you will need to change the setting of your Flash
                player. The steps and measures required for this also depend on the Flash player you are using. If you
                have any questions, please use the help function or consult the documentation for your Flash player or
                contact its maker for support.
            </p>
            <p>
                If you prevent or restrict the installation of cookies, not all of the functions on our site may be
                fully usable.
            </p>
            <h3>Google Analytics</h3>
            <p>
                We use Google Analytics on our website. This is a web analytics service provided by Google Ireland
                Limited, Gordon House, Barrow Street, Dublin 4, Irland (hereinafter: Google).
            </p>
            <p>
                The Google Analytics service is used to analyze how our website is used. The legal basis is Art. 6 Para.
                1 lit. f) GDPR. Our legitimate interest lies in the analysis, optimization, and economic operation of
                our site.
            </p>
            <p>
                Usage and user-related information, such as IP address, place, time, or frequency of your visits to our
                website will be transmitted to a Google server in the United States and stored there. However, we use
                Google Analytics with the so-called anonymization function, whereby Google truncates the IP address
                within the EU or the EEA before it is transmitted to the US.
            </p>
            <p>
                The data collected in this way is in turn used by Google to provide us with an evaluation of visits to
                our website and what visitors do once there. This data can also be used to provide other services
                related to the use of our website and of the internet in general.
            </p>
            <p>
                Google states that it will not connect your IP address to other data. In addition, Google provides
                further information with regard to its data protection practices at
            </p>
            <p>
                <a href="https://www.google.com/intl/de/policies/privacy/partners">
                    https://www.google.com/intl/de/policies/privacy/partners,
                </a>
            </p>
            <p>including options you can exercise to prevent such use of your data.</p>
            <p>In addition, Google offers an opt-out add-on at</p>
            <p>
                <a href="https://tools.google.com/dlpage/gaoptout?hl=de">
                    https://tools.google.com/dlpage/gaoptout?hl=en
                </a>
            </p>
            <p>
                in addition with further information. This add-on can be installed on the most popular browsers and
                offers you further control over the data that Google collects when you visit our website. The add-on
                informs Google Analytics&apos; JavaScript (ga.js) that no information about the website visit should be
                transmitted to Google Analytics. However, this does not prevent information from being transmitted to us
                or to other web analytics services we may use as detailed herein.
            </p>
            <p>You can revoke your agreement at any time with effect for the future by clicking here.</p>
            <br />
            <br />
            <div className={"ga-link"} onClick={() => setGAState(!gAState)}>
                {gAState ? "Click to deactivate Google Analytics!" : "Click to activate Google Analytics!"}
            </div>

            <h3>OpenStreetMap</h3>
            <p>
                For directions on our site, we use OpenStreetMap, a service of the OpenStreetMap Foundation, St
                John&apos;s Innovation Centre, Cowley Road, Cambridge, CB4 0WS, United Kingdom, hereinafter referred to
                as &quot;OpenStreetMap&quot;.
            </p>
            <p>
                When you access one of our Internet pages that includes the OpenStreetMap service, OpenStreetMap stores
                a cookie on your terminal device via your browser. This processes your user settings and user data for
                the purpose of displaying the page or guaranteeing the functionality of the OpenStreetMap service.
                Through this processing, OpenStreetMap can recognize the website from which your request has been sent
                and to which IP address the directions should be transmitted.&nbsp;
            </p>
            <p>
                The legal basis for collecting and processing this information is Art. 6 Para. 1 lit. f) GDPR. Our
                legitimate interest lies in the optimization and economic operation of our site.
            </p>
            <p>
                If you do not agree to this processing, you have the option of preventing the installation of cookies by
                making the appropriate settings in your browser. Further details can be found in the section about
                cookies above.
            </p>
            <p>
                OpenStreetMap offers further information about its data collection and processing as well your rights
                and your options for protecting your privacy at this link:
            </p>
            <p>
                <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy">
                    https://wiki.osmfoundation.org/wiki/Privacy_Policy
                </a>
            </p>
        </div>
    ) : (
        <div className={"content-text"}>
            <h1>Datenschutzerklärung</h1>
            <p>
                Personenbezogene Daten (nachfolgend zumeist nur „Daten“ genannt) werden von uns nur im Rahmen der
                Erforderlichkeit sowie zum Zwecke der Bereitstellung eines funktionsfähigen und nutzerfreundlichen
                Internetauftritts, inklusive seiner Inhalte und der dort angebotenen Leistungen, verarbeitet.
            </p>
            <p>
                Gemäß Art. 4 Ziffer 1. der Verordnung (EU) 2016/679, also der Datenschutz-Grundverordnung (nachfolgend
                nur „DSGVO“ genannt), gilt als „Verarbeitung“ jeder mit oder ohne Hilfe automatisierter Verfahren
                ausgeführter Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit personenbezogenen Daten, wie das
                Erheben, das Erfassen, die Organisation, das Ordnen, die Speicherung, die Anpassung oder Veränderung,
                das Auslesen, das Abfragen, die Verwendung, die Offenlegung durch Übermittlung, Verbreitung oder eine
                andere Form der Bereitstellung, den Abgleich oder die Verknüpfung, die Einschränkung, das Löschen oder
                die Vernichtung.
            </p>
            <p>
                Mit der nachfolgenden Datenschutzerklärung informieren wir Sie insbesondere über Art, Umfang, Zweck,
                Dauer und Rechtsgrundlage der Verarbeitung personenbezogener Daten, soweit wir entweder allein oder
                gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung entscheiden. Zudem informieren wir Sie
                nachfolgend über die von uns zu Optimierungszwecken sowie zur Steigerung der Nutzungsqualität
                eingesetzten Fremdkomponenten, soweit hierdurch Dritte Daten in wiederum eigener Verantwortung
                verarbeiten.
            </p>
            <p>Unsere Datenschutzerklärung ist wie folgt gegliedert:</p>
            <p>
                I. Informationen über uns als Verantwortliche
                <br />
                II. Rechte der Nutzer und Betroffenen
                <br />
                III. Informationen zur Datenverarbeitung
            </p>
            <h2>I. Informationen über uns als Verantwortliche</h2>
            <p>Verantwortlicher Anbieter dieses Internetauftritts im datenschutzrechtlichen Sinne ist:</p>
            <p>
                <span>Lukas Kleybolte</span>
            </p>
            <p>
                <span>E-Mail: lukas@kleybolte.de</span>
            </p>
            <h2>II. Rechte der Nutzer und Betroffenen</h2>
            <p>
                Mit Blick auf die nachfolgend noch näher beschriebene Datenverarbeitung haben die Nutzer und Betroffenen
                das Recht
            </p>
            <ul>
                <li>
                    auf Bestätigung, ob sie betreffende Daten verarbeitet werden, auf Auskunft über die verarbeiteten
                    Daten, auf weitere Informationen über die Datenverarbeitung sowie auf Kopien der Daten (vgl. auch
                    Art. 15 DSGVO);
                </li>
                <li>
                    auf Berichtigung oder Vervollständigung unrichtiger bzw. unvollständiger Daten (vgl. auch Art. 16
                    DSGVO);
                </li>
                <li>
                    auf unverzügliche Löschung der sie betreffenden Daten (vgl. auch Art. 17 DSGVO), oder, alternativ,
                    soweit eine weitere Verarbeitung gemäß Art. 17 Abs. 3 DSGVO erforderlich ist, auf Einschränkung der
                    Verarbeitung nach Maßgabe von Art. 18 DSGVO;
                </li>
                <li>
                    auf Erhalt der sie betreffenden und von ihnen bereitgestellten Daten und auf Übermittlung dieser
                    Daten an andere Anbieter/Verantwortliche (vgl. auch Art. 20 DSGVO);
                </li>
                <li>
                    auf Beschwerde gegenüber der Aufsichtsbehörde, sofern sie der Ansicht sind, dass die sie
                    betreffenden Daten durch den Anbieter unter Verstoß gegen datenschutzrechtliche Bestimmungen
                    verarbeitet werden (vgl. auch Art. 77 DSGVO).
                </li>
            </ul>
            <p>
                Darüber hinaus ist der Anbieter dazu verpflichtet, alle Empfänger, denen gegenüber Daten durch den
                Anbieter offengelegt worden sind, über jedwede Berichtigung oder Löschung von Daten oder die
                Einschränkung der Verarbeitung, die aufgrund der Artikel 16, 17 Abs. 1, 18 DSGVO erfolgt, zu
                unterrichten. Diese Verpflichtung besteht jedoch nicht, soweit diese Mitteilung unmöglich oder mit einem
                unverhältnismäßigen Aufwand verbunden ist. Unbeschadet dessen hat der Nutzer ein Recht auf Auskunft über
                diese Empfänger.
            </p>
            <p>
                <strong>
                    Ebenfalls haben die Nutzer und Betroffenen nach Art. 21 DSGVO das Recht auf Widerspruch gegen die
                    künftige Verarbeitung der sie betreffenden Daten, sofern die Daten durch den Anbieter nach Maßgabe
                    von Art. 6 Abs. 1 lit. f) DSGVO verarbeitet werden. Insbesondere ist ein Widerspruch gegen die
                    Datenverarbeitung zum Zwecke der Direktwerbung statthaft.
                </strong>
            </p>
            <h2>III. Informationen zur Datenverarbeitung</h2>
            <p>
                Ihre bei Nutzung unseres Internetauftritts verarbeiteten Daten werden gelöscht oder gesperrt, sobald der
                Zweck der Speicherung entfällt, der Löschung der Daten keine gesetzlichen Aufbewahrungspflichten
                entgegenstehen und nachfolgend keine anderslautenden Angaben zu einzelnen Verarbeitungsverfahren gemacht
                werden.
            </p>
            <h3>Cookies</h3>
            <h4>a) Sitzungs-Cookies/Session-Cookies</h4>
            <p>
                Wir verwenden mit unserem Internetauftritt sog. Cookies. Cookies sind kleine Textdateien oder andere
                Speichertechnologien, die durch den von Ihnen eingesetzten Internet-Browser auf Ihrem Endgerät ablegt
                und gespeichert werden. Durch diese Cookies werden im individuellen Umfang bestimmte Informationen von
                Ihnen, wie beispielsweise Ihre Browser- oder Standortdaten oder Ihre IP-Adresse, verarbeitet. &nbsp;
            </p>
            <p>
                Durch diese Verarbeitung wird unser Internetauftritt benutzerfreundlicher, effektiver und sicherer, da
                die Verarbeitung bspw. die Wiedergabe unseres Internetauftritts in unterschiedlichen Sprachen oder das
                Angebot einer Warenkorbfunktion ermöglicht.
            </p>
            <p>
                Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit b.) DSGVO, sofern diese Cookies Daten zur
                Vertragsanbahnung oder Vertragsabwicklung verarbeitet werden.
            </p>
            <p>
                Falls die Verarbeitung nicht der Vertragsanbahnung oder Vertragsabwicklung dient, liegt unser
                berechtigtes Interesse in der Verbesserung der Funktionalität unseres Internetauftritts. Rechtsgrundlage
                ist in dann Art. 6 Abs. 1 lit. f) DSGVO.
            </p>
            <p>Mit Schließen Ihres Internet-Browsers werden diese Session-Cookies gelöscht.</p>
            <h4>b) Drittanbieter-Cookies</h4>
            <p>
                Gegebenenfalls werden mit unserem Internetauftritt auch Cookies von Partnerunternehmen, mit denen wir
                zum Zwecke der Werbung, der Analyse oder der Funktionalitäten unseres Internetauftritts
                zusammenarbeiten, verwendet.
            </p>
            <p>
                Die Einzelheiten hierzu, insbesondere zu den Zwecken und den Rechtsgrundlagen der Verarbeitung solcher
                Drittanbieter-Cookies, entnehmen Sie bitte den nachfolgenden Informationen.
            </p>
            <h4>c) Beseitigungsmöglichkeit</h4>
            <p>
                Sie können die Installation der Cookies durch eine Einstellung Ihres Internet-Browsers verhindern oder
                einschränken. Ebenfalls können Sie bereits gespeicherte Cookies jederzeit löschen. Die hierfür
                erforderlichen Schritte und Maßnahmen hängen jedoch von Ihrem konkret genutzten Internet-Browser ab. Bei
                Fragen benutzen Sie daher bitte die Hilfefunktion oder Dokumentation Ihres Internet-Browsers oder wenden
                sich an dessen Hersteller bzw. Support. Bei sog. Flash-Cookies kann die Verarbeitung allerdings nicht
                über die Einstellungen des Browsers unterbunden werden. Stattdessen müssen Sie insoweit die Einstellung
                Ihres Flash-Players ändern. Auch die hierfür erforderlichen Schritte und Maßnahmen hängen von Ihrem
                konkret genutzten Flash-Player ab. Bei Fragen benutzen Sie daher bitte ebenso die Hilfefunktion oder
                Dokumentation Ihres Flash-Players oder wenden sich an den Hersteller bzw. Benutzer-Support.
            </p>
            <p>
                Sollten Sie die Installation der Cookies verhindern oder einschränken, kann dies allerdings dazu führen,
                dass nicht sämtliche Funktionen unseres Internetauftritts vollumfänglich nutzbar sind.
            </p>
            <h3>Google Analytics</h3>
            <p>
                In unserem Internetauftritt setzen wir Google Analytics ein. Hierbei handelt es sich um einen
                Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, nachfolgend
                nur „Google“ genannt.
            </p>
            <p>
                Der Dienst Google Analytics dient zur Analyse des Nutzungsverhaltens unseres Internetauftritts.
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Analyse,
                Optimierung und dem wirtschaftlichen Betrieb unseres Internetauftritts.
            </p>
            <p>
                Nutzungs- und nutzerbezogene Informationen, wie bspw. IP-Adresse, Ort, Zeit oder Häufigkeit des Besuchs
                unseres Internetauftritts, werden dabei an einen Server von Google in den USA übertragen und dort
                gespeichert. Allerdings nutzen wir Google Analytics mit der sog. Anonymisierungsfunktion. Durch diese
                Funktion kürzt Google die IP-Adresse schon innerhalb der EU bzw. des EWR.
            </p>
            <p>
                Die so erhobenen Daten werden wiederum von Google genutzt, um uns eine Auswertung über den Besuch
                unseres Internetauftritts sowie über die dortigen Nutzungsaktivitäten zur Verfügung zu stellen. Auch
                können diese Daten genutzt werden, um weitere Dienstleistungen zu erbringen, die mit der Nutzung unseres
                Internetauftritts und der Nutzung des Internets zusammenhängen.
            </p>
            <p>Google gibt an, Ihre IP-Adresse nicht mit anderen Daten zu verbinden. Zudem hält Google unter</p>
            <p>
                <a href="https://www.google.com/intl/de/policies/privacy/partners">
                    https://www.google.com/intl/de/policies/privacy/partners
                </a>
            </p>
            <p>
                weitere datenschutzrechtliche Informationen für Sie bereit, so bspw. auch zu den Möglichkeiten, die
                Datennutzung zu unterbinden.
            </p>
            <p>Zudem bietet Google unter</p>
            <p>
                <a href="https://tools.google.com/dlpage/gaoptout?hl=de">
                    https://tools.google.com/dlpage/gaoptout?hl=de
                </a>
            </p>
            <p>
                ein sog. Deaktivierungs-Add-on nebst weiteren Informationen hierzu an. Dieses Add-on lässt sich mit den
                gängigen Internet-Browsern installieren und bietet Ihnen weitergehende Kontrollmöglichkeit über die
                Daten, die Google bei Aufruf unseres Internetauftritts erfasst. Dabei teilt das Add-on dem JavaScript
                (ga.js) von Google Analytics mit, dass Informationen zum Besuch unseres Internetauftritts nicht an
                Google Analytics übermittelt werden sollen. Dies verhindert aber nicht, dass Informationen an uns oder
                an andere Webanalysedienste übermittelt werden. Ob und welche weiteren Webanalysedienste von uns
                eingesetzt werden, erfahren Sie natürlich ebenfalls in dieser Datenschutzerklärung.
            </p>
            <p>
                Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem Sie hier klicken.
                <br />
                <br />
            </p>
            <div className={"ga-link"} onClick={() => setGAState(!gAState)}>
                {gAState
                    ? "Klicken um Google Analytics zu deaktivieren!"
                    : "Klicken um Google Analytics zu aktivieren!"}
            </div>

            <h3>OpenStreetMap</h3>
            <p>
                Für Anfahrtsbeschreibungen setzen wir OpenStreetMap, einen Dienst der OpenStreetMap Foundation, St
                John’s Innovation Centre, Cowley Road, Cambridge, CB 4 0 WS, United Kingdom, nachfolgend nur
                „OpenStreetMap“ genannt, ein.
            </p>
            <p>
                Bei Aufruf einer unserer Internetseiten, in die der Dienst OpenStreetMap eingebunden ist, wird durch
                OpenStreetMap ein Cookie über Ihren Internet-Browser auf Ihrem Endgerät gespeichert. Hierdurch werden
                Ihre Nutzereinstellungen und Nutzerdaten zum Zwecke der Anzeige der Seite bzw. zur Gewährleistung der
                Funktionalität des Dienstes OpenStreetMap verarbeitet. Durch diese Verarbeitung kann OpenStreetMap
                erkennen, von welcher Internetseite Ihre Anfrage gesendet worden ist und an welche IP- Adresse die
                Darstellung der Anfahrt übermittelt werden soll.&nbsp;
            </p>
            <p>
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f) DSGVO. Unser berechtigtes Interesse liegt in der Optimierung
                und dem wirtschaftlichen Betrieb unseres Internetauftritts.
            </p>
            <p>
                Sofern Sie mit dieser Verarbeitung nicht einverstanden sind, haben Sie die Möglichkeit, die Installation
                der Cookies durch die entsprechenden Einstellungen in Ihrem Internet-Browser zu verhindern. Einzelheiten
                hierzu finden Sie vorstehend unter dem Punkt „Cookies“.
            </p>
            <p>OpenStreetMap bietet unter</p>
            <p>
                <a href="https://wiki.osmfoundation.org/wiki/Privacy_Policy">
                    https://wiki.osmfoundation.org/wiki/Privacy_Policy
                </a>
            </p>
            <p>
                weitere Informationen zur Erhebung und Nutzung der Daten sowie zu Ihren Rechten und Möglichkeiten zum
                Schutz Ihrer Privatsphäre an.
            </p>
        </div>
    );
};

export default PrivacyPolicyComponent;
