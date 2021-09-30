import React, { useRef, useEffect, useState } from "react";

const Canvas = (props) => {
  const initialState = [
    // { pos: [0, 0], booked: false, seatType: "Normal", seatNo: "1",selected:false },
    {
      pos: [30, 50],
      booked: false,
      seatType: "business",
      seatNo: "A51",
      selected: true,
    },
    {
      pos: [30, 110],
      booked: false,
      seatType: "available",
      seatNo: "2",
      selected: false,
    },
    {
      pos: [30, 170],
      booked: false,
      seatType: "available",
      seatNo: "6",
      selected: false,
    },
    {
      pos: [30, 230],
      booked: false,
      seatType: "available",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [30, 290],
      booked: false,
      seatType: "available",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [30, 350],
      booked: false,
      seatType: "VIP",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [30, 410],
      booked: false,
      seatType: "VVIP",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [30, 470],
      booked: false,
      seatType: "business",
      seatNo: "8",
      selected: false,
    },

    {
      pos: [80, 470],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [80, 410],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [80, 350],
      booked: false,
      seatType: "Normal",
      seatNo: "6",
      selected: false,
    },
    {
      pos: [80, 290],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [80, 230],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [80, 170],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [80, 110],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [80, 50],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },

    {
      pos: [150, 50],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [150, 110],
      booked: false,
      seatType: "Normal",
      seatNo: "2",
      selected: false,
    },
    {
      pos: [150, 170],
      booked: false,
      seatType: "Normal",
      seatNo: "6",
      selected: false,
    },
    {
      pos: [150, 230],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [150, 290],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [150, 350],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [150, 410],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [150, 470],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },

    {
      pos: [200, 470],
      booked: true,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [200, 410],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [200, 350],
      booked: false,
      seatType: "Normal",
      seatNo: "6",
      selected: false,
    },
    {
      pos: [200, 290],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [200, 230],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [200, 170],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [200, 110],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [200, 50],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },

    {
      pos: [250, 50],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [250, 110],
      booked: false,
      seatType: "Normal",
      seatNo: "2",
      selected: false,
    },
    {
      pos: [250, 170],
      booked: false,
      seatType: "Normal",
      seatNo: "6",
      selected: false,
    },
    {
      pos: [250, 230],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [250, 290],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [250, 350],
      booked: true,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [250, 410],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
    {
      pos: [250, 470],
      booked: false,
      seatType: "Normal",
      seatNo: "8",
      selected: false,
    },
  ];
  const [seats, setSeats] = useState(initialState);
  const [seatColor, setSeatColor] = useState("#000");
  const canvasRef = useRef(null);

  const STATE_BOOKED = "#cbcbcb";
  const STATE_SELECTED = "rgb(85, 255, 0)";
  const STATE_AVAILABLE = "#000";
  const STATE_BUSINESS = "rgb(83, 165, 185))";
  const STATE_VIP = "rgb(209, 157, 45)";
  const STATE_VVIP = "rgb(195, 113, 228)";

  const drawSeat = (ctx, seatState) => {
    let SEAT_COLOR;
    if (seatState.booked) {
      SEAT_COLOR = STATE_BOOKED;
    } else if (
      seatState.seatType == "available" &&
      seatState.selected == false
    ) {
      SEAT_COLOR = STATE_AVAILABLE;
    } else if (
      seatState.seatType == "business" &&
      seatState.selected == false
    ) {
      SEAT_COLOR = STATE_BUSINESS;
    } else if (seatState.seatType == "VIP" && seatState.selected == false) {
      SEAT_COLOR = STATE_VIP;
    } else if (seatState.seatType == "VVIP" && seatState.selected == false) {
      SEAT_COLOR = STATE_VVIP;
    } else if (seatState.selected == true) {
      SEAT_COLOR = STATE_SELECTED;
    }
    ctx.save();
    // console.log(SEAT_COLOR);
    ctx.fillStyle = SEAT_COLOR;
    ctx.strokeStyle = SEAT_COLOR;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(3, 32);
    ctx.lineTo(12, 32);
    ctx.stroke();

    ctx.beginPath();
    ctx.textAlign = "center";
    ctx.font = "9px Roboto";
    ctx.fillText(seatState.seatNo, 7.5, 24);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.bezierCurveTo(-2, -5, 15, -5, 13, 0);
    ctx.lineTo(13, 5);
    ctx.quadraticCurveTo(6.5, 5, 9, 10);
    ctx.bezierCurveTo(17, 8, 23, 28, 15, 30);
    ctx.bezierCurveTo(24, 25, 17.5, 38, 16, 37);
    ctx.lineTo(-1, 37);
    ctx.bezierCurveTo(-2.5, 37, -9, 25, 0, 30);
    ctx.bezierCurveTo(-8, 28, -1, 8, 4, 10);
    ctx.quadraticCurveTo(4.5, 5, 0, 5);
    ctx.closePath();
    if (seatState.booked || seatState.selected) {
      return ctx.fill(), (ctx.strokeStyle = "#000");
    } else {
      ctx.stroke();
    }
    ctx.restore();
  };
  const drawStructure = (ctx, seats) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let index in seats) {
      if (index == 0) {
        ctx.translate(seats[index]["pos"][0], seats[index]["pos"][1]);
        ctx.save();
        drawSeat(ctx, seats[index]);
        ctx.restore();
      } else {
        ctx.translate(
          seats[index]["pos"][0] - seats[index - 1]["pos"][0],
          seats[index]["pos"][1] - seats[index - 1]["pos"][1]
        );
        ctx.save();
        drawSeat(ctx, seats[index]);
        ctx.restore();
      }
    }
    ctx.translate(seats[0]["pos"][0], seats[0]["pos"][1]);
    console.log("end");
  };
  useEffect(() => {
    let canvas = canvasRef.current;
    let context = canvas.getContext("2d");
    drawStructure(context, seats);
    // return (canvas.width = canvas.width), (canvas.height = canvas.height);
  }, [drawStructure, seats]);
  const collides = (rects, x, y) => {
    for (let i = 0; i < rects.length; i++) {
      let left = rects[i][0];
      let right = rects[i][0] + 18;
      let top = rects[i][1];
      let bottom = rects[i][1] + 39;

      if (right >= x && left <= x && bottom >= y && top <= y) {
        console.log("right");
        setSeats([
          ...seats,
          (seats[i] = { ...seats[i], selected: !seats[i].selected }),
        ]);
        console.log(seats[i]);
      }
    }
  };

  const handleClickCanvas = (e) => {
    let canvas = canvasRef.current;
    const rects = seats.map((seat) => seat.pos);

    let x = e.pageX - canvas.offsetLeft;
    let y = e.pageY - canvas.offsetTop;

    collides(rects, x, y);
  };

  return (
    <canvas
      ref={canvasRef}
      width="300px"
      height="550px"
      onClick={handleClickCanvas}
    />
  );
};

export default Canvas;
