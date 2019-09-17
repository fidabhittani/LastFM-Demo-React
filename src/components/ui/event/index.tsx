import React from "react";
import { useTranslation } from "react-i18next";
import CardBox from "components/ui/card.box";

import "./styles.scss";
/** ARTIST CONNTAINER */
export default ({ event }: any) => {
  const { t } = useTranslation();
  // background: linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(/image.png);background-repeat: no-repeat;  background-position: center;
  return (
    <CardBox className="event-item">
      <header title={event.event_name}>
        <span>{event.event_name || "Unkown"}</span>
      </header>
      <div
        className="event-content"
        onClick={() => window.open(event.url, "_blank")}
      >
        <section className="event-info">
          <div className="event-label">
            <div className="label">{event.artist && event.artist.name}</div>
            <div className="value">
              {t("events.play_count")}: {event.playcount}
            </div>
          </div>
        </section>

        <section
          className="image"
          style={{
            background: ` url(${event.bg_url})`
          }}
        ></section>
      </div>
    </CardBox>
  );
};

// linear-gradient( rgba(255,255,255, 1), rgba(255,255,255, 1) ),
