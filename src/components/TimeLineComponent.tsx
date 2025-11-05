import "../style/TimeLineComponent.scss";
import { JSX, Dispatch, SetStateAction, useEffect, useMemo, useRef, useState } from "react";
import { years } from "../utils/Helper";
import WarnSymbol from "./WarnSymbol";

interface TimeLineProps {
    getYear: number;
    setYear: Dispatch<SetStateAction<number>>;
    handleModalClick: () => void;
    handleModalClick2: () => void;
    isDark: boolean;
}

const TICK_LABEL_INSET = 16;
const STEP = 4;
const END_YEAR = 2020;

export default function TimeLineComponent({
    getYear,
    setYear,
    handleModalClick,
    handleModalClick2,
    isDark,
}: TimeLineProps): JSX.Element {
    const [playing, setPlaying] = useState(false);
    const [anchorWidth, setAnchorWidth] = useState<number>(0);
    const playButtonRef = useRef<HTMLButtonElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const anchor = document.getElementById("district_left");
        if (!anchor) return;

        const ro = new ResizeObserver((entries) => {
            const w = entries[0]?.contentRect?.width ?? anchor.offsetWidth;
            setAnchorWidth(w);
        });

        ro.observe(anchor);
        setAnchorWidth(anchor.offsetWidth);

        return () => ro.disconnect();
    }, []);

    useEffect(() => {
        const districtLeft = document.getElementById("district_left");
        const timelineProgress = document.getElementById("timeline-progress");
        if (playButtonRef.current && districtLeft && timelineProgress) {
            //playButtonRef.current.style.flexBasis = `${districtLeft.offsetWidth + 88}px`;
            timelineProgress.style.marginLeft = `${districtLeft.offsetWidth + 40}px`;
            playButtonRef.current.style.left = `${districtLeft.offsetWidth + 20}px`;
        }
    }, [anchorWidth]);

    useEffect(() => {
        if (!playing) return;
        if (getYear >= END_YEAR) {
            setPlaying(false);
            return;
        }
        const id = setTimeout(() => {
            setYear((y) => Math.min(END_YEAR, y + STEP));
        }, 2000);
        return () => clearTimeout(id);
    }, [playing, getYear, setYear]);

    const tickStates = useMemo(
        () =>
            years.map((y) => ({
                year: y,
                isCurrent: y === getYear,
                isPrev: y < getYear,
            })),
        [getYear]
    );

    const canPlay = getYear < END_YEAR;

    return (
        <div className="timeline-outer" ref={containerRef}>
            <button
                ref={playButtonRef}
                id="playButton"
                className={`play-button${playing ? " pause" : ""}`}
                onClick={() => setPlaying((p) => !p)}
                disabled={!canPlay}
                aria-pressed={playing}
                aria-label={playing ? "Pause timeline animation" : "Play timeline animation"}
            />

            <div id="timeline-progress" className="timeline-progress">
                <div className="above">
                    <WarnSymbol
                        onClick={handleModalClick}
                        size={24}
                        style={{
                            top: "-0.7em",
                            position: "relative",
                            left: "82%",
                            zIndex: 20,
                            fill: isDark ? "var(--color-white)" : "var(--color-yellow)",
                            stroke: isDark ? "var(--color-yellow)" : "var(--color-black)",
                        }}
                        color="var(--color-yellow)"
                    />
                    <WarnSymbol
                        onClick={handleModalClick2}
                        size={24}
                        style={{
                            top: "-0.7em",
                            position: "relative",
                            left: "33%",
                            zIndex: 20,
                            fill: isDark ? "var(--color-white)" : "var(--color-yellow)",
                            stroke: isDark ? "var(--color-yellow)" : "var(--color-black)",
                        }}
                        color="var(--color-yellow)"
                    />
                    <div />
                    <div />
                </div>

                <div className="below">
                    {tickStates.map(({ year, isCurrent, isPrev }, idx) => {
                        const classes = ["tick"];
                        if (isPrev) classes.push("prev");
                        if (isCurrent) classes.push("current");

                        const labelStyle: React.CSSProperties =
                            idx === 0
                                ? { left: TICK_LABEL_INSET }
                                : idx === years.length - 1
                                  ? { right: TICK_LABEL_INSET }
                                  : {};

                        return (
                            <div
                                key={year}
                                id={String(year)}
                                className={classes.join(" ")}
                                role="button"
                                tabIndex={0}
                                aria-current={isCurrent ? "step" : undefined}
                                aria-label={`Jump to year ${year}`}
                                onClick={() => {
                                    setPlaying(false);
                                    setYear(year);
                                }}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") {
                                        e.preventDefault();
                                        setPlaying(false);
                                        setYear(year);
                                    }
                                }}
                            >
                                <p style={labelStyle}>{year}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
