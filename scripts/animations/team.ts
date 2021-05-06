import { timeline } from ".";

export const teamAnimation = () => {
  return timeline(".team", "top 80%", "+=100px")
    .from(".team #back", {
      scaleX: 0,
      opacity: 0,
      duration: 0.5,
      x: -400,
      transformOrigin: "0% 50%",
    })
    .addLabel("team")
    .from(".team #person1", {
      x: -400,
      opacity: 0,
      duration: 0.5,
    })
    .from(
      ".team #person4",
      {
        x: 400,
        opacity: 0,
        duration: 0.5,
      },
      "team"
    )
    .from(
      ".team #person2",
      {
        y: -400,
        opacity: 0,
        duration: 0.5,
      },
      "team"
    )
    .from(
      ".team #person3",
      {
        y: -300,
        opacity: 0,
        duration: 0.5,
      },
      "team"
    );
};
