const PrivacyPolicyComponent = (): JSX.Element => {
    return (
        <div className={"content-text"}>
            <h1>Datenschutzerklärung</h1>
            <p>
                Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:
                <br />
                <br />
                IP-Adresse, die Adresse der vorher besuchten Website (Referer Anfrage-Header), Datum und Uhrzeit der
                Anfrage, Zeitzonendifferenz zur Greenwich Mean Time, Inhalt der Anforderung, HTTP-Statuscode,
                übertragene Datenmenge, Website, von der die Anforderung kommt und Informationen zu Browser und
                Betriebssystem.
                <br />
                <br />
                Das ist erforderlich, um unsere Website anzuzeigen und die Stabilität und Sicherheit zu gewährleisten.
                Dies entspricht unserem berechtigten Interesse im Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO.
                <br />
                <br />
                Es erfolgt kein Tracking und wir haben auf diese Daten keinen direkten Zugriff, sondern erhalten
                lediglich eine anonymisierte, statistische Zusammenfassung. Diese beinhaltet die Adresse der vorher
                besuchten Seite, die Häufigkeit der jeweils aufgerufenen Seiten und die Anzahl eindeutiger Besucher.
                Diese Daten führen wir nicht mit anderen Daten zusammen.
                <br />
                <br />
                Wir setzen für die Zurverfügungstellung unserer Website folgenden Hoster ein:
                <br />
                <br />
                GitHub Inc.
                <br />
                88 Colin P Kelly Jr St
                <br />
                San Francisco, CA 94107
                <br />
                United States
                <br />
                <br />
                Dieser ist Empfänger Ihrer personenbezogenen Daten. Dies entspricht unserem berechtigten Interesse im
                Sinne des Art. 6 Abs. 1 S. 1 lit. f DSGVO, selbst keinen Server in unseren Räumlichkeiten vorhalten zu
                müssen. Serverstandort ist USA.
                <br />
                <br />
                Weitere Informationen zu Widerspruchs- und Beseitigungsmöglichkeiten gegenüber GitHub finden Sie unter:{" "}
                <a
                    href={
                        "https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages"
                    }
                >
                    https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-privacy-statement#github-pages
                </a>
                <br />
                <br />
                Sie haben das Recht der Verarbeitung zu widersprechen. Ob der Widerspruch erfolgreich ist, ist im Rahmen
                einer Interessenabwägung zu ermitteln.
                <br />
                <br />
                Die Daten werden gelöscht, sobald der Zweck der Verarbeitung entfällt.
                <br />
                <br />
                Die Verarbeitung der unter diesem Abschnitt angegebenen Daten ist weder gesetzlich noch vertraglich
                vorgeschrieben. Die Funktionsfähigkeit der Website ist ohne die Verarbeitung nicht gewährleistet.
                <br />
                <br />
                GitHub hat Compliance-Maßnahmen für internationale Datenübermittlungen umgesetzt. Diese gelten für alle
                weltweiten Aktivitäten, bei denen GitHub personenbezogene Daten von natürlichen Personen in der EU
                verarbeitet. Diese Maßnahmen basieren auf den EU-Standardvertragsklauseln (SCCs). Weitere Informationen
                finden Sie unter:{" "}
                <a
                    href={
                        "https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1–the-standard-contractual-clauses-processors"
                    }
                >
                    https://docs.github.com/en/free-pro-team@latest/github/site-policy/github-data-protection-addendum#attachment-1–the-standard-contractual-clauses-processors
                </a>
            </p>
            <p>
                <br />
                <br />
                Diese Website nutzt den Dienst „Google Analytics“, welcher von der Google Inc. (1600 Amphitheatre
                Parkway Mountain View, CA 94043, USA) angeboten wird, zur Analyse der Websitebenutzung durch Nutzer.
                <br />
                <br />
                Der Dienst verwendet „Cookies“ – Textdateien, welche auf Ihrem Endgerät gespeichert werden. Die durch
                die Cookies gesammelten Informationen werden im Regelfall an einen Google-Server in den USA gesandt und
                dort gespeichert.
                <br />
                <br />
                Auf dieser Website greift die IP-Anonymisierung. Die IP-Adresse der Nutzer wird innerhalb der
                Mitgliedsstaaten der EU und des Europäischen Wirtschaftsraum gekürzt. Durch diese Kürzung entfällt der
                Personenbezug Ihrer IP-Adresse. Im Rahmen der Vereinbarung zur Auftragsdatenvereinbarung, welche die
                Websitebetreiber mit der Google Inc. geschlossen haben, erstellt diese mithilfe der gesammelten
                Informationen eine Auswertung der Websitenutzung und der Websiteaktivität und erbringt mit der
                Internetnutzung verbundene Dienstleistungen.
                <br />
                <br />
                Sie haben die Möglichkeit, die Speicherung des Cookies auf Ihrem Gerät zu verhindern, indem Sie in Ihrem
                Browser entsprechende Einstellungen vornehmen. Es ist nicht gewährleistet, dass Sie auf alle Funktionen
                dieser Website ohne Einschränkungen zugreifen können, wenn Ihr Browser keine Cookies zulässt. Weiterhin
                können Sie durch ein Browser-Plugin verhindern, dass die durch Cookies gesammelten Informationen
                (inklusive Ihrer IP-Adresse) an die Google Inc. gesendet und von der Google Inc. genutzt werden.
                <br />
                <br />
                Hier finden Sie weitere Informationen zur Datennutzung durch die Google Inc.:
                <a href={"https://support.google.com/analytics/answer/6004245?hl=de"}>
                    https://support.google.com/analytics/answer/6004245?hl=de
                </a>
            </p>
        </div>
    );
};

export default PrivacyPolicyComponent;
